import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div className="w-full h-screen">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              className="w-full h-screen object-cover"
              src="https://img.freepik.com/free-photo/students-taking-selfie-graduation_23-2148201806.jpg?t=st=1736774345~exp=1736777945~hmac=e0fd769d4bee421fbd2222a8774f2fe569c8a636197b3297b2fabf524f96e1b5&w=1380"
              alt="Slide 1"
            />
             
             <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black/40 p-6">
             <motion.div
  initial={{ height: 0 }}
  animate={{ height: 'auto' }}
  transition={{ duration: 1 }}
>
              <h1 className="text-5xl font-bold mb-4 text-center text-white/90">
                Scholarships for Your Future
              </h1>
              <p className="text-lg text-center mb-6 text-gray-200 mt-5">
                Discover a wide range of scholarships designed to empower students from all walks of life.
                Whether you're looking to pursue higher education, specialize in a specific field, <br /> or alleviate financial burdens,
                our scholarship programs provide the resources and support you need.
              </p>
              </motion.div>
              <div className="flex space-x-4 mt-3">
                <button className="px-6 py-3 bg-[#890C25] hover:bg-[#6d091d] font-medium ring-2 hover:ring-[#890C25] ring-white text-white rounded-lg transition">
                  View Scholarships
                </button>
                <button className="px-6 py-3  ring-2 ring-[#890C25] bg-white/80 text-black hover:bg-[#890C25] font-medium rounded-lg transition">
                  Apply Now
                </button>
              </div>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              className="w-full h-screen object-cover"
              src="https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201874.jpg?t=st=1736774637~exp=1736778237~hmac=a66129c1416d101c5e1475919765b428278068d64e5b86a06e4d2638d2ba8794&w=1380"
              alt="Slide 2"
            />
               <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black/40 p-6">
             <motion.div
  initial={{ height: 0 }}
  animate={{ height: 'auto' }}
  transition={{ duration: 1 }}
>
              <h1 className="text-5xl font-bold mb-4 text-center text-white/90">
                Scholarships for Your Future
              </h1>
              <p className="text-lg text-center mb-6 text-gray-200 mt-5">
                Discover a wide range of scholarships designed to empower students from all walks of life.
                Whether you're looking to pursue higher education, specialize in a specific field, <br /> or alleviate financial burdens,
                our scholarship programs provide the resources and support you need.
              </p>
              </motion.div>
              <div className="flex space-x-4 mt-3">
                <button className="px-6 py-3 bg-[#890C25] hover:bg-[#6d091d] font-medium ring-2 hover:ring-[#890C25] ring-white text-white rounded-lg transition">
                  View Scholarships
                </button>
                <button className="px-6 py-3  ring-2 ring-[#890C25] bg-white/80 text-black hover:bg-[#890C25] font-medium rounded-lg transition">
                  Apply Now
                </button>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              className="w-full h-screen object-cover"
              src="https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?t=st=1736774297~exp=1736777897~hmac=79dff31e1d06b4fb06403b905c69d56afd89e84564a28e37ed5b26c5d4c99100&w=1380"
              alt="Slide 3"
            />
                 <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black/40 p-6">
             <motion.div
  initial={{ height: 0 }}
  animate={{ height: 'auto' }}
  transition={{ duration: 1 }}
>
              <h1 className="text-5xl font-bold mb-4 text-center text-white/90">
                Scholarships for Your Future
              </h1>
              <p className="text-lg text-center mb-6 text-gray-200 mt-5">
                Discover a wide range of scholarships designed to empower students from all walks of life.
                Whether you're looking to pursue higher education, specialize in a specific field, <br /> or alleviate financial burdens,
                our scholarship programs provide the resources and support you need.
              </p>
              </motion.div>
              <div className="flex space-x-4 mt-3">
                <Link to={`/scholarsships`}><button className="px-6 py-3 bg-[#890C25] hover:bg-[#6d091d] font-medium ring-2 hover:ring-[#890C25] ring-white text-white rounded-lg transition">
                  View Scholarships
                </button></Link>
                <button className="px-6 py-3  ring-2 ring-[#890C25] bg-white/80 text-black hover:bg-[#890C25] font-medium rounded-lg transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              className="w-full h-screen object-cover"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-graduate-student_23-2148950576.jpg?t=st=1736774305~exp=1736777905~hmac=5a78ba05fe8c2af1ac2c8a97a87f3fb9a4f9bf0739e0a128709a95ca1086e0d3&w=1380"
              alt="Slide 4"
            />
                  <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black/40 p-6">
             <motion.div
  initial={{ height: 0 }}
  animate={{ height: 'auto' }}
  transition={{ duration: 1 }}
>
              <h1 className="text-5xl font-bold mb-4 text-center text-white/90">
                Scholarships for Your Future
              </h1>
              <p className="text-lg text-center mb-6 text-gray-200 mt-5">
                Discover a wide range of scholarships designed to empower students from all walks of life.
                Whether you're looking to pursue higher education, specialize in a specific field, <br /> or alleviate financial burdens,
                our scholarship programs provide the resources and support you need.
              </p>
              </motion.div>
              <div className="flex space-x-4 mt-3">
                <button className="px-6 py-3 bg-[#890C25] hover:bg-[#6d091d] font-medium ring-2 hover:ring-[#890C25] ring-white text-white rounded-lg transition">
                  View Scholarships
                </button>
                <button className="px-6 py-3  ring-2 ring-[#890C25] bg-white/80 text-black hover:bg-[#890C25] font-medium rounded-lg transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
