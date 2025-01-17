import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "./../../../provider/AuthPorvider";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import useReview from "../../../hooks/useReview";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CardDetails() {
  const publicAxios = useAxiosPublic();
  const [reviews,refetch] = useReview();
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const {
    _id,
    application_fees,
    university_name,
    university_logo,
    scholarship_category,
    university_location,
    application_deadline,
    subject_name,
    rating,
    scholarship_description,
    service_charge,
    stipend,
    post_date,
  } = data;

  // States for review form
  const [review, setReview] = useState("");
  const [reviewRating, setReviewRating] = useState(0);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setReviewRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!review || reviewRating === 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please provide a review and a rating before submitting.",
        confirmButtonText: "OK",
      });

      return;
    }

    // Review Data
    const reviewData = {
      review,
      rating: reviewRating,
      reviewName: user.displayName,
      userEmail: user.email,
      scholarshipId: data._id,
      status: "Pending",
      dateSubmitted: new Date().toISOString().split("T")[0],
    };

    try {
      const response = await publicAxios.post(`/review`, reviewData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your review has been submitted",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch()

      // Reset form
      setReview("");
      setReviewRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Failed to submit review. Please try again.",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        className="max-w-4xl mx-auto my-16 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-center text-4xl font-bold text-blue-700 mb-8"
          variants={itemVariants}
        >
          {university_name}
        </motion.h2>

        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={university_logo}
            alt={university_name}
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
        </motion.div>

        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
          variants={itemVariants}
        >
          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Category:</span> {scholarship_category}
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Subject:</span> {subject_name}
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Location:</span> {university_location}
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Application Fee:</span> {application_fees}
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Deadline:</span> {application_deadline}
          </motion.p>

          <motion.div
            className="flex items-center space-x-2"
            variants={itemVariants}
          >
            <span className="font-bold text-lg text-yellow-500">⭐</span>
            <p className="text-lg text-gray-700">{rating} / 5</p>
          </motion.div>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Description:</span> {scholarship_description}
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Stipend:</span> {stipend}
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Service Charge:</span> {service_charge}
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={itemVariants}>
            <span className="font-bold">Post Date:</span> {post_date}
          </motion.p>
        </motion.div>

        <motion.div
          className="text-center mt-8"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <button className="bg-[#6d091d] text-white py-2 px-6 rounded-lg hover:bg-[#960d28] transition-colors">
            Apply Scholarship
          </button>
        </motion.div>
      </motion.div>

      <h2 className="text-4xl font-semibold text-center mb-12">Our Student Review</h2>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {reviews
          .filter((items) => items.scholarshipId === data._id)
          .map((items) => (
            <SwiperSlide
              key={items._id}
              className="bg-white border-2 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 w-full"
            >
              <div className="flex flex-col items-center my-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {items.reviewName}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{items.userEmail}</p>
                <p className="text-xs text-gray-400 mb-3">{items.dateSubmitted}</p>
                <div className="mb-3">
                  <ReactStars
                    count={5}
                    value={items.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
                <p className="text-gray-700 text-sm">{items.review}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className=" max-w-4xl mx-auto px-4 my-24">
        <h2 className="text-center text-2xl font-bold mb-4">Your Review</h2>
        <ReactStars
          count={5}
          value={reviewRating}
          onChange={handleRatingChange}
          size={24}
          color2={"#ffd700"}
        />
        <textarea
          required
          value={review}
          onChange={handleReviewChange}
          placeholder="Write your review here"
          className="border p-2 w-full h-24 mt-4 mb-4"
        ></textarea>
        <div className="mb-10"><button
          onClick={handleSubmit}
          className="bg-[#6d091d]  text-white py-2 px-4 rounded"
        >
          Submit Review
        </button></div>
      </div>
    </div>
  );
}

export default CardDetails;
