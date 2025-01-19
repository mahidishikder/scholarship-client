import { FcViewDetails } from "react-icons/fc";
import useApplication from "../../hooks/useApplication";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthPorvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

function Application() {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [applications, refetch] = useApplication();
  console.log(applications);

  const handleDelete = async (_id) => {
    try {
      // API DELETE request using axios
      const response = await axiosPublic.delete(`/AppliedScholarship/${_id}`);
      console.log(response.data); // Server response after deleting
      // Optionally, refetch the data to reflect the changes
      refetch();
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  // Filter applications based on user email
  const userApplications = applications.filter(
    (item) => item.userEmail === user?.email
  );

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                University Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                University Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Subject Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Applied Degree
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Application Fees
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Service Charge
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userApplications.map((items, i) => (
              <tr key={items._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {i + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {items.universityName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {items.unicercityLocation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {items.subjectCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {items.degree}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  ${items.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {items.service_charge}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-between items-center">
                  <button className="text-xl">
                    <FcViewDetails />
                  </button>
                  <Link to={`/AppliedScholarship/${items._id}`}>
                    <button className="text-xl">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleDelete(items._id)}
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Application;
