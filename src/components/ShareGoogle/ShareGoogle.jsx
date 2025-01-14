import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Toast import
import { AuthContext } from "../../provider/AuthPorvider";

function ShareGoogle() {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
        console.log(result.user);
        toast.success("Google Login Successful!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
        }); // Toast for success
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Google Login Failed!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
        }); // Toast for error
      });
  };

  return (
    <div className="flex justify-center">
      <button onClick={handleGoogle} className="btn px-14 text-2xl">
        <FcGoogle />
      </button>
    </div>
  );
}

export default ShareGoogle;

