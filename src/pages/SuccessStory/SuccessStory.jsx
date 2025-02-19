import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import ReactModal from "react-modal";

const scholars = [
  {
    name: "Sarah Johnson",
    university: "Harvard University",
    scholarship: "Fullbright Scholarship",
    image: "https://cdn.openart.ai/published/lEbunQQD5WFq9rXQcTMv/32I6iEat_ycpZ_1024.webp",
    testimonial: "This scholarship changed my life, opening doors to endless opportunities!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Ali Khan",
    university: "Oxford University",
    scholarship: "Rhodes Scholarship",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRk57cDKyXLSVi3zkgdpIrbUcns5lCNgtaH-7fdZKpX2NU-n8aaLJaZ85riNf9LJayrI&usqp=CAU",
    testimonial: "I never imagined studying at Oxford. This scholarship made it possible!",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    name: "Emma Lee",
    university: "MIT",
    scholarship: "Google Women Techmakers Scholarship",
    image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
    testimonial: "Empowered by this scholarship, I pursued my passion for technology!",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    name: "Sarah Johnson",
    university: "Harvard University",
    scholarship: "Fullbright Scholarship",
    image: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
    testimonial: "This scholarship changed my life, opening doors to endless opportunities!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Alim Khan",
    university: "Oxford University",
    scholarship: "Rhodes Scholarship",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxu1bpsH8F1dpTwMDSlGqJKIs_gabi3T5MQqjLaq-oUevVu7aq9cnd-7o_oj--2zXeAI&usqp=CAU",
    testimonial: "I never imagined studying at Oxford. This scholarship made it possible!",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    name: "Mahidi",
    university: "MIT",
    scholarship: "Google  Techmakers Scholarship",
    image: "https://img.freepik.com/free-photo/studio-portrait-good-looking-man-with-short-blond-hair-blue-eyes-black-t-shirt-looking-camera-with-eyebrow-up-showing-confidence-arrogance_132075-8423.jpg?semt=ais_hybrid",
    testimonial: "Empowered by this scholarship, I pursued my passion for technology!",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    name: "Sarah Johnson",
    university: "Harvard University",
    scholarship: "Fullbright Scholarship",
    image: "https://cdn.openart.ai/published/lEbunQQD5WFq9rXQcTMv/32I6iEat_ycpZ_1024.webp",
    testimonial: "This scholarship changed my life, opening doors to endless opportunities!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Ali Khan",
    university: "Oxford University",
    scholarship: "Rhodes Scholarship",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRk57cDKyXLSVi3zkgdpIrbUcns5lCNgtaH-7fdZKpX2NU-n8aaLJaZ85riNf9LJayrI&usqp=CAU",
    testimonial: "I never imagined studying at Oxford. This scholarship made it possible!",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    name: "Emma Lee",
    university: "MIT",
    scholarship: "Google Women Techmakers Scholarship",
    image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
    testimonial: "Empowered by this scholarship, I pursued my passion for technology!",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    name: "Sarah Johnson",
    university: "Harvard University",
    scholarship: "Fullbright Scholarship",
    image: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
    testimonial: "This scholarship changed my life, opening doors to endless opportunities!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Alim Khan",
    university: "Oxford University",
    scholarship: "Rhodes Scholarship",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxu1bpsH8F1dpTwMDSlGqJKIs_gabi3T5MQqjLaq-oUevVu7aq9cnd-7o_oj--2zXeAI&usqp=CAU",
    testimonial: "I never imagined studying at Oxford. This scholarship made it possible!",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
];

function SuccessStory() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-12 bg-gray-300 dark:bg-slate-900 dark:text-white/90">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#4946EC] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🌟 Success Stories
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-white/90 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover the journeys of students who transformed their dreams into reality with the help of scholarships.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholars.map((scholar, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden p-6 text-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={scholar.image}
              alt={scholar.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{scholar.name}</h3>
            <p className="text-sm text-gray-600 dark:text-white/70">{scholar.university}</p>
            <p className="text-sm font-medium text-green-600 dark:text-green-400">{scholar.scholarship}</p>
            <p className="mt-4 text-gray-700 dark:text-white/80 italic">“{scholar.testimonial}”</p>

            <button
              onClick={() => setSelectedVideo(scholar.videoUrl)}
              className="absolute top-2 right-2 bg-[#4946EC] hover:bg-blue-700 text-white text-sm px-3 py-1 rounded flex items-center"
            >
              <FaPlay className="mr-1" /> See Story
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for YouTube Video */}
      <ReactModal
        isOpen={!!selectedVideo}
        onRequestClose={() => setSelectedVideo(null)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white dark:bg-slate-900 rounded-lg p-6 max-w-3xl w-full text-center relative">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-2 right-2 text-gray-600 dark:text-white text-xl"
          >
            ✖
          </button>
          {selectedVideo && (
            <iframe
              width="100%"
              height="400"
              src={selectedVideo}
              title="Scholarship Success Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </ReactModal>
    </section>
  );
}

export default SuccessStory;
