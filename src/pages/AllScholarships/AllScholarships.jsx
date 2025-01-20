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
      className="my-16 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Search Box */}
      <div className="flex justify-center items-center mb-8">
        <Helmet>
          <title>SCHOLARSSHIPS</title>
        </Helmet>
        <input
          type="text"
          placeholder="Search by Scholarship, University, or Degree Name"
          className="border rounded-md p-2 w-full max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-[#6D091D] text-white py-2 px-4 rounded-md hover:bg-[#520615] transition"
        >
          Search
        </button>
      </div>

      <h2 className="text-center text-4xl font-bold mb-16">
        All Scholarships
      </h2>

      {filteredScholarships.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {filteredScholarships.map((item) => (
            <motion.div
              key={item._id}
              className="border bg-[#6D091D] border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* University Logo */}
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.university_logo}
                  alt={item.university_name}
                  className="w-20 h-20 object-cover rounded-full shadow-md"
                />
              </motion.div>

              {/* University Name */}
              <h3 className="text-lg font-bold text-center text-white mb-4">
                {item.university_name}
              </h3>

              {/* Scholarship Info */}
              <div className="space-y-2">
                <p className="text-sm text-gray-200">
                  <span className="font-medium text-white">Category:</span>{" "}
                  {item.scholarship_category}
                </p>
                <p className="text-sm text-gray-200">
                  <span className="font-medium text-white">Subject:</span>{" "}
                  {item.subject_category}
                </p>
                <p className="text-sm text-gray-200">
                  <span className="font-medium text-white">Location:</span>{" "}
                  {item.location}
                </p>
                <p className="text-sm text-gray-200">
                  <span className="font-medium text-white">Application Fee:</span>{" "}
                  {item.application_fees}
                </p>
                <p className="text-sm text-gray-200">
                  <span className="font-medium text-white">Deadline:</span>{" "}
                  {item.deadline}
                </p>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-yellow-400 font-medium">
                  ⭐ {item.rating} / 5
                </p>
              </div>

              <motion.div
                className="block mt-6 text-center bg-white text-slate-700 font-medium py-2 px-4 rounded-md hover:text-[#6D091D] transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <Link to={`/scholarship/${item._id}`}>View Details</Link>
              </motion.div>
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
