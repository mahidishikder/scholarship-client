import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthPorvider";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import useReview from "../../../hooks/useReview";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CardDetails() {
  const publicAxios = useAxiosPublic();
  const [reviews, refetch] = useReview();
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const {
    _id,
    applicationFees,
    universityName,
    universityImage,
    scholarshipCategory,
    universityCountry,
    applicationDeadline,
    subjectCategory,
    rating,
    scholarshipDetails,
    serviceCharge,
    stipend,
    postDate,
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
      universityName,
      scholarshipCategory,
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
      refetch();

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
    <div className="bg-blue-200  dark:bg-slate-900 py-20">
      <motion.div
        className="max-w-4xl mx-auto  px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-center sm:text-4xl text-3xl font-bold text-blue-700 mb-8"
          variants={itemVariants}
        >
          {universityName}
        </motion.h2>

        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={universityImage}
            alt={universityName}
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
        </motion.div>

        <motion.div
          className="bg-blue-100 dark:bg-slate-700 p-6 rounded-lg shadow-md space-y-4"
          variants={itemVariants}
        >
          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Category:</span> {scholarshipCategory}
          </motion.p>

          <motion.p className="text-lg text-gray-700 dark:text-white/70 " variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Subject:</span> {subjectCategory}
          </motion.p>

          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Location:</span> {universityCountry}
          </motion.p>

          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Application Fee:</span> {applicationFees}
          </motion.p>

          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Deadline:</span> {applicationDeadline}
          </motion.p>

          <motion.div
            className="flex items-center space-x-2"
            variants={itemVariants}
          >
            <span className="font-bold dark:text-white/80 text-lg text-yellow-500">⭐</span>
            <p className="text-lg text-gray-700 dark:text-white/70">{rating} / 5</p>
          </motion.div>

          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Description:</span> {scholarshipDetails}
          </motion.p>

          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Stipend:</span> {stipend}
          </motion.p>

          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Service Charge:</span> {serviceCharge}
          </motion.p>

          <motion.p className="text-lg text-gray-700 dark:text-white/70" variants={itemVariants}>
            <span className="font-bold dark:text-white/80">Service Charge:</span> {serviceCharge}
            <span className="font-bold dark:text-white/80">Post Date:</span> {postDate}
          </motion.p>
        </motion.div>

        <motion.div
          className="text-center mt-8"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <Link
            to={{
              pathname: "/payment",
            }}
            state={{
              applicationFees,
              universityName,
              scholarshipCategory,
              subjectCategory,
              serviceCharge,
              _id,
              universityCountry, // Added universityCountry here
            }}
          >
            <button className="bg-[#4946EC] text-white py-3 px-10   transition-colors">
              Apply Scholarship
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <h2 className="sm:text-4xl text-3xl font-semibold text-center mb-12 mt-10  dark:text-white/90">Our Student Reviews</h2>
      <div className="px-2">
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
        className="mySwiper max-w-screen-2xl  mx-auto"
      >
        {reviews
          .filter((items) => items.scholarshipId === data._id)
          .map((items) => (
            <SwiperSlide
              key={items._id}
              className="bg-white dark:bg-slate-700 border-2 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center my-4">
                <h3 className="text-xl dark:text-white/90 font-semibold text-gray-900 mb-2">
                  {items.reviewName}
                </h3>
                <p className=" text-gray-500 mb-1 dark:text-blue-600">{items.userEmail}</p>
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
      </div>

      <div className=" max-w-4xl mx-auto px-4 my-24">
        <h2 className="text-center text-2xl font-bold mb-4 dark:text-white/90">Your Review</h2>
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
          className="border rounded-lg bg-sky-100 p-2 w-full h-24 mt-4 mb-4"
        ></textarea>
        <div className="mb-10">
          <button
            onClick={handleSubmit}
            className="bg-[#4946EC] text-white py-2 px-4 "
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
