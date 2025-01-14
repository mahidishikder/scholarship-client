import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

function CardDetails() {
  // Destructure data from loader
  const {
    application_fees,
    university_name,
    university_logo,
    scholarship_category,
    location,
    deadline,
    subject_category,
    rating,
  } = useLoaderData();

  // Variants for smooth animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Children appear one after another
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto my-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h2
        className="text-center text-4xl font-bold text-blue-700 mb-8"
        variants={itemVariants}
      >
        {university_name}
      </motion.h2>

      {/* University Logo */}
      <motion.div
        className="flex justify-center mb-8"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={university_logo}
          alt={university_name}
          className="w-40 h-40 object-cover rounded-full shadow-lg"
        />
      </motion.div>

      {/* Details */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
        variants={itemVariants}
      >
        <motion.p
          className="text-lg text-gray-700"
          variants={itemVariants}
          whileHover={{ x: 10 }}
        >
          <span className="font-bold">Category:</span> {scholarship_category}
        </motion.p>

        <motion.p
          className="text-lg text-gray-700"
          variants={itemVariants}
          whileHover={{ x: 10 }}
        >
          <span className="font-bold">Subject:</span> {subject_category}
        </motion.p>

        <motion.p
          className="text-lg text-gray-700"
          variants={itemVariants}
          whileHover={{ x: 10 }}
        >
          <span className="font-bold">Location:</span> {location}
        </motion.p>

        <motion.p
          className="text-lg text-gray-700"
          variants={itemVariants}
          whileHover={{ x: 10 }}
        >
          <span className="font-bold">Application Fee:</span> {application_fees}
        </motion.p>

        <motion.p
          className="text-lg text-gray-700"
          variants={itemVariants}
          whileHover={{ x: 10 }}
        >
          <span className="font-bold">Deadline:</span> {deadline}
        </motion.p>

        <motion.div
          className="flex items-center space-x-2"
          variants={itemVariants}
        >
          <span className="font-bold text-lg text-yellow-500">⭐</span>
          <p className="text-lg text-gray-700">{rating} / 5</p>
        </motion.div>
      </motion.div>

      {/* Back Button */}
      <motion.div
        className="text-center mt-8"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </motion.div>
    </motion.div>
  );
}

export default CardDetails;
