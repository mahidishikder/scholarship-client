import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsersGear } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // Framer Motion Import
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

function AllUser() {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const token = localStorage.getItem("access-token"); // টোকেন পাঠানোর জন্য পড়া হচ্ছে
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${token}`, // সঠিকভাবে টোকেন যুক্ত করা হয়েছে
        },
      });
      return res.data; // ডেটা রিটার্ন করা হচ্ছে
    },
  });

  // ইউজারকে রোল হিসেবে admin, moderator বা user হিসেবে পরিবর্তন করা
  const handleMakeRole = async (_id, role) => {
    console.log(_id, role);
    const res = await axiosSecure.patch(`/users/${role}/${_id}`); 
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  const hanleDelete = async (_id) => {
    console.log(_id);
    const res = await axiosSecure.delete(`/users/${_id}`);
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      refetch();
      toast.success("User deleted successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <h1 className="text-3xl font-bold text-center mb-6">All Users</h1>
      <Helmet><title>MANAGE USERS</title></Helmet>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="table-auto w-full border-collapse"
        >
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <motion.tbody>
            {users.map((user, i) => (
              <motion.tr
                key={user._id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="py-3 px-4">{i + 1}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 text-center">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : user.role === "moderator" ? (
                    "Moderator"
                  ) : (
                    <div>
                      <button
                        onClick={() => handleMakeRole(user._id, "admin")}
                        className="bg-[#4946EC] py-2 px-3 rounded text-white text-lg transition duration-200"
                      >
                        Admin
                      </button>
                      <button
                        onClick={() => handleMakeRole(user._id, "moderator")}
                        className="bg-[#7573ee] py-2 px-3 rounded text-white text-lg hover:bg-blue-700 transition duration-200 ml-2"
                      >
                        Moderator
                      </button>
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => hanleDelete(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-lg py-2 px-3 rounded transition duration-200"
                  >
                    <RiDeleteBin2Fill />
                  </button>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </div>
    </motion.div>
  );
}

export default AllUser;
