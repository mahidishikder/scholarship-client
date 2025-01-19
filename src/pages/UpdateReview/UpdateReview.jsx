import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Rating from "react-rating-stars-component";
import useAxiosPublic from "../../hooks/useAxiosPublic";


function UpdateReview() {
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  const { _id, rating, review, reviewName, userEmail, university_name } = useLoaderData();
  const [updatedReview, setUpdatedReview] = useState(review); // রিভিউ আপডেট করার জন্য স্টেট
  const [updatedRating, setUpdatedRating] = useState(rating); // রেটিং আপডেট করার জন্য স্টেট

  const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    review: updatedReview,
    rating: updatedRating,
  };

  console.log("Sending Data to Server:", data); // ডাটা কীভাবে পাঠাচ্ছেন তা চেক করুন

  try {
    const res = await axiosPublic.put(`/review/${_id}`, data);
    console.log("Response from Server:", res.data); // সার্ভার থেকে আসা রেসপন্স চেক করুন
    if (res.data.modifiedCount > 0) {
      toast.success('Your scholarship review has been successfully submitted!');
      navigate('/dashboard/reviews')
    } else {
      toast.warning('No changes were made!');
    }
  } catch (error) {
    console.error("Error while updating review:", error);
    toast.error('Failed to update review.');
  }
};


  return (
    <div className="p-6 max-w-3xl mx-auto my-14 bg-white shadow-md rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Update Your Review</h1>

      {/* Static Fields */}
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-700">
          University Name: <span className="font-normal text-gray-600">{university_name}</span>
        </p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-700">
          User Email: <span className="font-normal text-gray-600">{userEmail}</span>
        </p>
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-700">
          Review Name: <span className="font-normal text-gray-600">{reviewName}</span>
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Review Text */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Review:</label>
          <textarea
            value={updatedReview}
            onChange={(e) => setUpdatedReview(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Write your updated review here"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Rating:</label>
          <Rating
            count={5}
            value={updatedRating}
            onChange={(newRating) => setUpdatedRating(newRating)}
            size={30}
            activeColor="#ffd700"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Update Review
        </button>
      </form>
    </div>
  );
}

export default UpdateReview;
