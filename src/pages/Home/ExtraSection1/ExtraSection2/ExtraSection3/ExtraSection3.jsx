import React from "react";
import { motion } from "framer-motion";

function ExtraSection3() {
  return (
    <section id="global-stats" className="relative py-12 dark:bg-slate-900">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/white-abstract-background-paper-style_23-2148385754.jpg?t=st=1739885988~exp=1739889588~hmac=b875ea564a58f2c0982307a8ef71450e95c34a46c790de771972323908e84f42&w=1380')",
        }}
      ></div>

      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#4946EC] dark:text-white/90 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Scholarships by Continent
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto lg:grid-cols-3 gap-8 px-4 mt-14">
        {/* Continent Card */}
        {[
          { name: "Africa", scholarships: 20000, color: "bg-green-500" },
          { name: "Asia", scholarships: 40000, color: "bg-blue-500" },
          { name: "Europe", scholarships: 50000, color: "bg-red-500" },
          { name: "North America", scholarships: 30000, color: "bg-purple-500" },
          { name: "South America", scholarships: 15000, color: "bg-yellow-500" },
          { name: "Oceania", scholarships: 10000, color: "bg-pink-500" },
        ].map((continent, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-800 shadow-md shadow-gray-400 dark:shadow-blue-600 rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 mb-2">
              {continent.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white/90">
              Scholarships:{" "}
              <span className="font-semibold text-green-700 dark:text-green-400">
                {continent.scholarships.toLocaleString()}
              </span>
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-4 relative">
              <div
                className={`h-4 rounded-full ${continent.color}`}
                style={{
                  width: `${(continent.scholarships / 50000) * 100}%`,
                }}
              ></div>
              <span className="absolute right-2 text-xs text-gray-600 dark:text-gray-300 top-0.5">
                {(continent.scholarships / 50000) * 100}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center px-4">
        <motion.h3
          className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Key Insights
        </motion.h3>
        <motion.p
          className="text-gray-700 dark:text-white/90 text-lg max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Scholarships are widely distributed across continents. However, Europe and Asia hold the highest opportunities.
          Expand your search and maximize your potential by applying today!
        </motion.p>
      </div>
    </section>
  );
}

export default ExtraSection3;
