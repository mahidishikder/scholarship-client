import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      {/* Main Container */}
      <motion.div
        className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl w-full">
          {/* Title */}
          <motion.h1
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-gray-600 dark:text-gray-300 text-center mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Have questions or need support? Fill out the form below, and we’ll get back to you shortly!
          </motion.p>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full px-4 py-2 bg-[#4946EC] text-white font-semibold rounded-md shadow-sm transition"
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            className="mt-8 text-center text-gray-600 dark:text-gray-300"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p>📞 Phone: +123 456 7890</p>
            <p>📧 Email: support@example.com</p>
            <p>📍 Address: 1234 Your Street, Your City, Country</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
