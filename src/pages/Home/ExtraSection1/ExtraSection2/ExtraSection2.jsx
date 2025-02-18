
import { motion } from "framer-motion";

function ExtraSection2() {
  return (
    <section id="top-categories" className="py-10 bg-gradient-to-r from-blue-50 to-blue-100">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6 text-blue-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Top Scholarship Categories
      </motion.h2>
      <div className="grid grid-cols-1 max-w-screen-2xl mx-auto sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-14">
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-blue-600 text-5xl mb-4">
            🎓
          </div>
          <h3 className="text-xl font-semibold mb-2">Undergraduate Scholarships</h3>
          <p className="text-sm text-gray-700">Explore scholarships for undergraduate programs around the world.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-blue-600 text-5xl mb-4">
            📚
          </div>
          <h3 className="text-xl font-semibold mb-2">Postgraduate Scholarships</h3>
          <p className="text-sm text-gray-700">Find scholarships for master's and doctoral programs.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-blue-600 text-5xl mb-4">
            🌍
          </div>
          <h3 className="text-xl font-semibold mb-2">International Scholarships</h3>
          <p className="text-sm text-gray-700">Discover global scholarships for studying abroad.</p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-blue-600 text-5xl mb-4">
            💻
          </div>
          <h3 className="text-xl font-semibold mb-2">STEM Scholarships</h3>
          <p className="text-sm text-gray-700">Explore funding options for Science, Technology, Engineering, and Math.</p>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-blue-600 text-5xl mb-4">
            🎨
          </div>
          <h3 className="text-xl font-semibold mb-2">Arts & Humanities</h3>
          <p className="text-sm text-gray-700">Find scholarships for creative arts and humanities students.</p>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-blue-600 text-5xl mb-4">
            🏅
          </div>
          <h3 className="text-xl font-semibold mb-2">Sports Scholarships</h3>
          <p className="text-sm text-gray-700">Scholarships for athletes excelling in sports and academics.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default ExtraSection2;
