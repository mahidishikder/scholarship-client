import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../provider/AuthPorvider";
import { Helmet } from "react-helmet";

function MyProfile() {
  const { user, loading } = useContext(AuthContext);

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

  // If user is null, return a loading message
  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6D091D] to-[#940c28] ">
      <Helmet><title>MY PR0FILE</title></Helmet>
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
              src={user?.photoURL || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"}
              alt=""
              className="w-32 h-32 mb-4 rounded-full border-4 border-[#940c28] shadow-lg"
            />
          </motion.div>

          {/* User Info */}
          <h2 className="text-3xl font-extrabold text-gray-800">{user.displayName}</h2>
          <p className="text-gray-500 text-lg mt-2">{user.email || "No Email Provided"}</p>

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
