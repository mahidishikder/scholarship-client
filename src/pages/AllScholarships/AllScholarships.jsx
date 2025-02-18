import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useCard from "../../hooks/useCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function AllScholarships() {
  const [card] = useCard(); // Fetching all scholarships data
  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const [filteredScholarships, setFilteredScholarships] = useState([]); // For filtered scholarships

  // Set filteredScholarships initially with all cards
  useEffect(() => {
    if (card.length > 0) {
      setFilteredScholarships(card);
    }
  }, [card]);

  // Handle Search Functionality
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = card.filter(
      (item) =>
        item.scholarship_name?.toLowerCase().includes(query) ||
        item.university_name?.toLowerCase().includes(query) ||
        item.subject_category?.toLowerCase().includes(query)
    );
    setFilteredScholarships(results);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className=" px-4 py-20 bg-blue-100 dark:bg-slate-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Search Box */}
      <div className="flex justify-center items-center mb-8">
      <Helmet>
        <title>Scholarships</title>
      </Helmet>

      <div className="flex items-center border border-gray-300 rounded-full  overflow-hidden max-w-lg w-full">
        {/* Input Box */}
        <input
          type="text"
          placeholder="Search by Scholarship, University, or Degree Name"
          className="px-4 w-full text-gray-800 py-3  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6D091D] focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-[#3D3DC5] text-white py-3 px-4 hover:bg-white/80 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>

      <h2 className="text-center lg:text-4xl text-3xl dark:text-white/80  font-bold mb-16">
        All Scholarships
      </h2>

      {filteredScholarships.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 max-w-screen-2xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {filteredScholarships.map((item) => (
            <motion.div
              key={item._id}
              className="border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-6 hover:shadow-xl transition-shadow bg-[#4946EC]  bg-opacity-80 dark:bg-opacity-80"
              
            >
              {/* University Logo */}
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.
                    universityImage}
                  alt={item.universityName}
                  className="w-20 h-20 object-cover rounded-full shadow-md"
                />
              </motion.div>

              {/* University Name */}
              <h3 className="text-lg font-bold text-center text-black dark:text-white mb-4">
                {item.universityName}
              </h3>

              {/* Scholarship Info */}
              <div className="space-y-2">
                <p className="text-sm text-gray-200 dark:text-gray-300">
                  <span className="font-medium text-black dark:text-white">Category:</span> {item.scholarshipCategory}
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300">
                  <span className="font-medium text-black dark:text-white">Subject:</span> {item.scholarshipCategory}
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300">
                  <span className="font-medium text-black dark:text-white">Location:</span> {item.universityCountry}
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300">
                  <span className="font-medium text-black dark:text-white">Application Fee:</span> {item.applicationFees}
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-300">
                  <span className="font-medium text-black dark:text-white">Deadline:</span> {item.applicationDeadline}
                </p>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-yellow-400 font-medium">
                  ⭐ {item.rating} / 5
                </p>
              </div>

              <Link to={`/scholarship/${item._id}`}>
              <motion.div
                  className="block mt-6 cursor-pointer text-center bg-gray-200 shadow-md hover:bg-gray-300  hover:ring-[#4946EC] hover:ring-2  text-slate-700 hover:text-[#4946EC]  font-medium py-2 px-4   transition-all"
                  
                >
                  View Details
                </motion.div>
                </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-gray-700">
            No Scholarships Available
          </p>
          <img
            src="/images/no-scholarship.png"
            alt="No Scholarships"
            className="mx-auto mt-4 w-64"
          />
        </div>
      )}
    </motion.div>
  );
}

export default AllScholarships;
