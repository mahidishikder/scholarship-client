import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const scholars = [
  {
    name: "Sarah Johnson",
    university: "Harvard University",
    scholarship: "Fullbright Scholarship",
    image: "https://cdn.openart.ai/published/lEbunQQD5WFq9rXQcTMv/32I6iEat_ycpZ_1024.webp",
    testimonial: "This scholarship changed my life, opening doors to endless opportunities!",
  },
  {
    name: "Ali Khan",
    university: "Oxford University",
    scholarship: "Rhodes Scholarship",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRk57cDKyXLSVi3zkgdpIrbUcns5lCNgtaH-7fdZKpX2NU-n8aaLJaZ85riNf9LJayrI&usqp=CAU",
    testimonial: "I never imagined studying at Oxford. This scholarship made it possible!",
  },
  {
    name: "Emma Lee",
    university: "MIT",
    scholarship: "Google Women Techmakers Scholarship",
    image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
    testimonial: "Empowered by this scholarship, I pursued my passion for technology!",
  },
];

function Success() {
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

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-4xl mx-auto"
      >
        {scholars.map((scholar, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={scholar.image}
                alt={scholar.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-[#4946EC]"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{scholar.name}</h3>
              <p className="text-sm text-gray-600 dark:text-white/70">{scholar.university}</p>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">{scholar.scholarship}</p>
              <p className="mt-4 text-gray-700 dark:text-white/80 text-center italic">“{scholar.testimonial}”</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center mt-10">
        <Link to={`/success_story`}>
      <button className="bg-[#4946EC] py-3 px-10  text-white/80 font-medium ">Success Story</button>
      </Link>
      </div>
    </section>
  );
}

export default Success;
