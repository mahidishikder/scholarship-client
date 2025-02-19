import { motion } from "framer-motion";

function ExtraSection2() {
  return (
    <section
      id="top-categories"
      className="py-10 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#4946EC] "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Top Scholarship Categories
      </motion.h2>

      <div className="grid grid-cols-1 max-w-screen-2xl mx-auto sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-14">
        {/* Scholarship Categories */}
        {[
          { icon: "🎓", title: "Undergraduate Scholarships", description: "Explore scholarships for undergraduate programs around the world." },
          { icon: "📚", title: "Postgraduate Scholarships", description: "Find scholarships for master's and doctoral programs." },
          { icon: "🌍", title: "International Scholarships", description: "Discover global scholarships for studying abroad." },
          { icon: "💻", title: "STEM Scholarships", description: "Explore funding options for Science, Technology, Engineering, and Math." },
          { icon: "🎨", title: "Arts & Humanities", description: "Find scholarships for creative arts and humanities students." },
          { icon: "🏅", title: "Sports Scholarships", description: "Scholarships for athletes excelling in sports and academics." },
        ].map((category, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-900 shadow-inner shadow-blue-400 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-blue-600 dark:text-blue-300 text-5xl mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {category.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-white/90">
              {category.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExtraSection2;
