import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Toast import
import { AuthContext } from "../../provider/AuthPorvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function ShareGoogle() {
  const axiosPublic = useAxiosPublic()
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
            console.log(res.data);
            if (res.data.insertedId) {
              toast.success("Google Login Successful!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
              });
             
              navigate(from, { replace: true });
            } else {
              toast.error(res.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
              });
            }
          })
          .catch(err => {
            console.error("Google Login Successful!:", err);
            toast.success("Google Login Successful!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
            });
          });
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Google Login Failed!", {
          position: "top-right",
          autoClose: 2000,
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

