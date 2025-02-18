import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine } from "react-icons/ri";

function Banner() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleButtonClick = () => {
    setIsVideoOpen(true); // Open video
  };

  const handleCloseClick = () => {
    setIsVideoOpen(false); // Close video
  };

  const images = [
    "https://i.ibb.co/bRXLdT33/Adobe-Express-file.png",
    "https://i.ibb.co/8DSy5tdf/Adobe-Express-file-2.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-200/30 dark:bg-gray-900 pt-10 transition-colors duration-500">
      {/* Video Popup */}
      {isVideoOpen && (
        <div className="absolute flex justify-center items-center w-full h-full z-20">
          <div className="relative w-full max-w-[1060px]">
            <div className="relative w-full pb-[56.25%]">  {/* Aspect ratio container */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JwC-Qx1lJso?si=kbxMNpXIKC-T6FKE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* Close Button */}
            <button
              onClick={handleCloseClick}
              className="absolute top-0 right-0 text-white font-bold text-xl bg-red-600 rounded-full p-2 hover:bg-red-700 transition"
            >
              <RiCloseLargeLine />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col max-w-screen-2xl mx-auto px-4 md:flex-row items-center justify-between text-gray-900 dark:text-white">
        {/* Left Side */}
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="md:w-1/2 text-center md:text-left"
>
  {/* Welcome Heading */}
  <h5 className="text-lg font-medium uppercase tracking-widest text-[#4946EC] dark:text-[#4946EC] mb-2">
    Welcome to ScholGo!
  </h5>

  <h1 className="md:text-5xl sm:text-4xl  font-bold my-8 sm:leading-10 text-3xl   md:leading-[60px]">
  Empowering Students for{" "}
  <span className="text-[#4946EC]   dark:text-[#4946EC]">
    Scholarship Opportunities
  </span>
</h1>




  {/* Description Paragraph */}
  <p className="text-lg text-gray-700   dark:text-gray-300 leading-relaxed mb-8">
    Unlock your future with our curated scholarships designed for students of all backgrounds. Our goal is to provide opportunities that will help you achieve your academic dreams.
  </p>

  {/* Buttons Container */}
  <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
    {/* Explore Scholarships Button */}
    <button className="px-8 py-3 bg-[#4946EC]  text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
      Explore Scholarships
    </button>

    {/* Play Button */}
    <div className="relative">
      <motion.button
        animate={{ scale: [0, 1.5, 0] }} // Smooth scaling animation
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }} // Looping effect
        className="w-14 h-14 flex items-center justify-center bg-white/90 ring-2 ring-[#4946EC] rounded-full shadow-lg transition duration-300 hover:bg-white/80"
        onClick={handleButtonClick}
      >
        <img
          src="https://img.icons8.com/?size=50&id=36067&format=png"
          alt="Play Icon"
          className="w-8 h-8 transition-transform duration-150 ease-in-out"
        />
      </motion.button>
    </div>
  </div>
</motion.div>

        {/* Right Side with Smooth Image Transition */}
        <div className="relative flex-1 flex justify-center mt-10 md:mt-0 min-h-[400px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Scholarship Banner"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Banner;
