import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useCard from "../../../hooks/useCard";

function HomeCard() {
  const [card] = useCard();
  console.log(card)
  const navigate = useNavigate();

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="my-20 ">
      <h2 className="text-center text-3xl font-bold mb-14 text-black">
      Top Scholarships Awaiting You
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }, // Delay between card animations
          },
        }}
      >
        {card.slice(0, 6).map((item) => (
          <motion.div
            key={item._id}
            className="border bg-[#6D091D] border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            variants={cardVariants}
          >
            {/* University Logo */}
            <div className="flex justify-center mb-4">
              <motion.img
                src={item.universityImage}
                alt={item.universityName}
                className="w-20 h-20 object-cover rounded-full shadow-md"
                whileHover={{ rotate: 360 }} // Rotate on hover
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* University Name */}
            <h3 className="text-lg font-bold text-center text-white mb-4">
              {item.universityName}
            </h3>

            {/* Scholarship Info */}
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Category:</span>{" "}
                {item.
scholarshipCategory}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Subject:</span>{" "}
                {item.
scholarshipCategory}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Location:</span>{" "}
                {item.universityCountry}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">
                  Application Fee:
                </span>{" "}
                {item.applicationFees}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Deadline:</span>{" "}
                {item.applicationDeadline}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-yellow-400 font-medium">
                ⭐ {item.rating} / 5
              </p>
            </div>

            {/* Details Button */}
            <Link to={`/scholarship/${item._id}`}><motion.div
              href={item.details_button}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center bg-white text-slate-700 font-medium py-2 px-4 rounded-md hover:text-[#6D091D] transition-colors"
              whileTap={{ scale: 0.9 }}
            >
             View Details
            </motion.div> </Link>

          </motion.div>
        ))}
      </motion.div>

      {/* All Scholarship Button */}
      <div className="text-center mt-8">
        <motion.button
          onClick={() => navigate("/scholarships")}
          className="hover:bg-[#6D091D] hover:text-white py-3 text-lg px-14 mt-8 rounded bg-white/90 ring-2 ring-[#6D091D] text-black transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          All Scholarships
        </motion.button>
      </div>
    </div>
  );
}

export default HomeCard;
