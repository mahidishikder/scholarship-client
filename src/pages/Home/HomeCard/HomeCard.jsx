import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useCard from "../../../hooks/useCard";

function HomeCard() {
  const [card] = useCard();
  console.log(card);
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="relative py-20 bg-cover bg-center dark:bg-black"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-shiny-lines-white-gray-minimal-background-design_84443-2787.jpg?t=st=1739883771~exp=1739887371~hmac=b094bda7d5efbc56b5192640bd00b99e217e3b4e2d20145a2e46fa5f16802142&w=1380')",
      }}
    >
      <div className="absolute inset-0 dark:bg-black/80 bg-white/80"></div>

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-[#4946EC] dark:text-white">
          Top Scholarships Awaiting You
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {card.slice(0, 6).map((item) => (
            <motion.div
              key={item._id}
              className="border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-6 hover:shadow-xl transition-shadow bg-[#4946EC]  bg-opacity-80 dark:bg-opacity-80"
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4">
                <motion.img
                  src={item.universityImage}
                  alt={item.universityName}
                  className="w-20 h-20 object-cover rounded-full shadow-md opacity-80"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-lg font-bold text-center text-black dark:text-white mb-4">
                {item.universityName}
              </h3>
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
              <div className="mt-4 flex items-center justify-between">
                <p className="text-yellow-400 font-medium">⭐ {item.rating} / 5</p>
              </div>
              <Link to={`/scholarship/${item._id}`}>
                <motion.div
                  className="block mt-6 text-center bg-gray-200 shadow-md hover:bg-gray-300  hover:ring-[#4946EC] hover:ring-2  text-slate-700 hover:text-[#4946EC]  font-medium py-2 px-4   transition-all"
                  
                >
                  View Details
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <motion.button
            onClick={() => navigate("/scholarships")}
            className=" hover:text-white py-3 text-white/90 text-lg px-14 mt-8 hover:text-white/60  hover:bg-[#1c1a85] bg-[#4946EC]    text-black dark:text-white transition-colors"
            
          >
            All Scholarships
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
