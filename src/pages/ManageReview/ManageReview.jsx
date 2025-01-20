
import { AiTwotoneDelete } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
import { motion } from "framer-motion"; // Framer Motion
import useReview from "../../hooks/useReview";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthPorvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ManageReview() {
  const axiosPublic = useAxiosPublic()
  const { user } = useContext(AuthContext); // লগ ইন ইউজারের তথ্য
  const [reviews, refetch] = useReview(); // সব রিভিউ ফেচ

  const handleSubmit = async (_id) => {
  console.log(_id)
  const res = await axiosPublic.delete(`/review/${_id}`)
  console.log(res.data)
  if(res.data.deletedCount > 0){
     toast.success('Your scholarship review has been successfully submitted!');
      refetch()
  }
  }


  return (
    <div className="p-6">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <motion.table
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="table-auto w-full border-collapse text-center"
        >
          {/* টেবিল হেডার */}
          <thead>
            <motion.tr
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#890C25] text-white"
            >
              <Helmet><title>MANAGE REVIEWS</title></Helmet>
              <th className="py-3 px-6">Scholarship Name</th>
              <th className="py-3 px-6">University Name</th>
              <th className="py-3 px-6">Review Comment</th>
              <th className="py-3 px-6">Review Date</th>
              <th className="py-3 px-6">Action</th>
            </motion.tr>
          </thead>
          {/* ফিল্টার করা রিভিউ দেখানো */}
          <tbody>
            {reviews.map((item, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`border-b ${i % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} hover:bg-blue-100`}
              >
                <td className="py-4 px-6">{item.scholarship_category}</td>
                <td className="py-4 px-6">{item.university_name}</td>
                <td className="py-4 px-6">{item.review}</td>
                <td className="py-4 px-6">{item.dateSubmitted}</td>
                <td className="py-4 px-6 flex justify-center gap-4">
                
                <Link to={`/updateReview/${item._id}`}>
                <button  className="text-2xl text-blue-600 hover:scale-110 transition-transform">
                    <MdEditDocument />
                  </button>
                </Link>
                  
                  <button onClick={() => handleSubmit(item._id)} className="text-2xl text-red-600 hover:scale-110 transition-transform">
                    <AiTwotoneDelete />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
        {reviews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-6 text-gray-500"
          >
            No reviews found for this user.
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ManageReview;
