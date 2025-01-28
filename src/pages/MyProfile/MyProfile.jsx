import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../provider/AuthPorvider";
import { Helmet } from "react-helmet";
import useModerator from "../../hooks/useModerator";
import useAdmin from "../../hooks/useAdmin";
import { toast } from "react-toastify";

function MyProfile() {
  const [isModerator] = useModerator();
  const [isAdmin] = useAdmin();

  const { user,logOut,setLoading } = useContext(AuthContext);

  const handleLogout = () => {
      logOut()
        .then(() => {
          toast.success("Logout successful!", {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message, {
            autoClose: 3000,
            hideProgressBar: true,
          });
          console.log(error.message);
        });
    };

  // Continuous animation for the image
  const floatAnimation = {
    animate: {
      y: [0, -20, 0], // Move up and down
      transition: {
        duration: 3, // Time for one cycle
        repeat: Infinity, // Infinite loop
        ease: "easeInOut", // Smooth transition
      },
    },
  };

  // Animation for role text
  const roleAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  // If user is null, return a loading message
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6D091D] to-[#940c28] ">
      <Helmet>
        <title>MY PROFILE</title>
      </Helmet>
      <motion.div
        className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Floating Image */}
          <motion.div {...floatAnimation}>
            <img
              src={
                user?.photoURL ||
                "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
              }
              alt=""
              className="w-32 h-32 mb-4 rounded-full border-4 border-[#940c28] shadow-lg"
            />
          </motion.div>

          {/* User Info */}
          <h2 className="text-3xl font-extrabold text-gray-800">
            {user.displayName || "User Name"}
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            {user.email || "No Email Provided"}
          </p>

          {/* Show Role if Moderator or Admin */}
          {isModerator && (
            <motion.div
              {...roleAnimation}
              className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 font-semibold text-lg rounded-full shadow-md border border-blue-300"
            >
              Role: Moderator
            </motion.div>
          )}
          {isAdmin && (
            <motion.div
              {...roleAnimation}
              className="mt-4 px-4 py-2 bg-green-100 text-green-700 font-semibold text-lg rounded-full shadow-md border border-green-300"
            >
              Role: Admin
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div className="flex gap-4 mt-6">
            <motion.button
              className="px-6 py-2 text-white bg-[#6D091D] rounded-lg shadow-md hover:bg-[#940c28] focus:ring-4 focus:ring-[#6D091D]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Edit Profile
            </motion.button>
            <motion.button
            onClick={handleLogout}
              className="px-6 py-2 text-white bg-gray-700 rounded-lg shadow-md hover:bg-gray-800 focus:ring-4 focus:ring-gray-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default MyProfile;

