
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Helmet>
        <title>Error</title>
      </Helmet>
      {/* Animated Error Icon */}
      <motion.div
        initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="mb-5">
        <img
          src="https://img.icons8.com/color/96/error--v1.png"
          alt="Error Icon"
        />
      </motion.div>

      {/* Animated Error Message */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        className="text-gray-600 text-lg text-center max-w-md mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </motion.p>

      {/* Animated Back Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}>
        <Link
          to="/"
          className="px-6 py-3 bg-[#6d091d] text-white rounded-lg shadow hover:bg-red-700 transition duration-300">
          Go Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default Error;
