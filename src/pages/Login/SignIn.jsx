import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthPorvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShareGoogle from "../../components/ShareGoogle/ShareGoogle";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

function SignIn() {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/";

  const handleValidateCaptcha = () => {
    const userCaptcha = captchaRef.current.value;
    if (validateCaptcha(userCaptcha)) {
      toast.success("Captcha validated successfully!");
      setDisabled(false); // Activate button
    } else {
      toast.error("Captcha validation failed!");
      setDisabled(true); // Deactivate button
    }
  };

  useEffect(() => {
    try {
      loadCaptchaEnginge(6);
    } catch (error) {
      console.error("Error loading captcha engine:", error);
      toast.error("Failed to load captcha. Please refresh the page.");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then(() => {
        toast.success("Login successful!", {
          autoClose: 2000,
          hideProgressBar: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message.includes("auth")
          ? "Invalid email or password."
          : "An error occurred. Please try again.";
        toast.error(errorMsg, {
          autoClose: 2000,
          hideProgressBar: true,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg shadow-blue-200 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="captcha"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              <LoadCanvasTemplate />
            </label>
            <input
              ref={captchaRef}
              type="text"
              id="captcha"
              onChange={() => setDisabled(true)} // Deactivate button on new captcha input
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              placeholder="Enter captcha"
              required
            />
            <button
              type="button"
              onClick={handleValidateCaptcha}
              className="py-1 px-3 bg-slate-600 text-white/80 rounded-lg mt-2 w-full"
            >
              Validate
            </button>
          </div>
          <button
            disabled={disabled}
            type="submit"
            className={`w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Sign in
          </button>
        </form>
        <ShareGoogle />
        <p>
          Not a member?{" "}
          <Link className="text-blue-400" to={`/signUp`}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
