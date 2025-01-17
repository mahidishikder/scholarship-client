
import { motion } from "framer-motion";

function ExtraSection1() {
  return (
    <section id="featured-universities" className="py-14 bg-gray-100">
      <motion.h2 
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Universities
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg"
            alt="Harvard University"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">Harvard University</h3>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src="https://drascoedu.com/wp-content/uploads/2022/01/notre-dame-university-campus-1024x683.jpg"
            alt="Stanford University"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">Stanford University</h3>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://www.troy.edu/_assets/sharing/troy-campus.jpg"
            alt="MIT"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">MIT</h3>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src="https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/10/30/bigstock-the-curzon-hall-is-a-british-r-237225406-1593951367020.jpeg"
            alt="Oxford University"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">Oxford University</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ExtraSection1;
