import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      {/* SEO-friendly Helmet */}
      <Helmet>
        <title>About</title>
        
      </Helmet>

      {/* Main Container */}
      <motion.div
        className="min-h-screen bg-gradient-to-b from-red-100 to-slate-100 px-6 py-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-6 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 text-lg text-center max-w-3xl mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are committed to excellence and aim to provide outstanding services to our users. Our team works tirelessly to bring innovative solutions tailored to your needs.
        </motion.p>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          {/* Mission Section */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to empower individuals by providing them with resources and tools to achieve their personal and professional goals.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leading platform recognized for innovation, excellence, and user-centric solutions that make a difference in the world.
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Meet our dedicated team of professionals who bring passion, creativity, and expertise to deliver the best experience for our users.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Integrity, innovation, and inclusivity are at the core of everything we do. We strive to make a positive impact on our community and beyond.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <p className="text-gray-800 font-semibold mb-4">
            Want to learn more about us? Feel free to get in touch!
          </p>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;

