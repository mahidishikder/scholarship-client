import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../provider/AuthPorvider";

function Profile() {
  const { user, loading } = useContext(AuthContext);

  // Continuous animation for the image
  const floatAnimation = {
    animate: {
      y: [0, -30, 0], // Move up and down
      transition: {
        duration: 2, // Time for one cycle
        repeat: Infinity, // Infinite loop
        ease: "easeInOut", // Smooth transition
      },
    },
  };

  // If user is null, return a loading message
  if (!user) {
    return <div>{loading}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg shadow-[#6D091D]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <motion.img
            src={user.photoURL}
            alt="User Avatar"
            className="w-24 h-24 mb-4 rounded-full border-2 border-[#6D091D] p-2"
            {...floatAnimation} // Add the floating animation
          />
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <motion.button
            className="mt-6 px-6 py-2 text-white/80 bg-[#6D091D] rounded-lg hover:bg-[#940c28] focus:ring-4 focus:ring-blue-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Edit Profile
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;
