import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthPorvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function ShareGoogle() {
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };

        axiosPublic.post('/users', userInfo)
          .then(res => {
            if (res.data.insertedId) {
              toast.success("Google Login Successful!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
              });
            } else {
              toast.success("Google Login Successful!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
              });
            }
            navigate(from, { replace: true });
          })
          .catch(err => {
            if (err.response && err.response.status === 409) {
              toast.success("Google Login Successful!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
              });
              navigate(from, { replace: true });
            } else {
              console.error("Error posting user info:", err);
              toast.success("Google Login Successful!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
              });
            }
          });
      })
      .catch((error) => {
        console.error("Google Login Failed:", error.message);
        toast.success("Google Login Successful!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
        });
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
