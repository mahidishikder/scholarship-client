import useAxiosSecure from "../../hooks/useAxiosSecure"
import useCard from "../../hooks/useCard"
import { LiaEditSolid } from "react-icons/lia";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function ManageScholarship() {
  const axiosSecure = useAxiosSecure()
  const [card,refetch] = useCard()
  console.log(card)

  const handleDelete =async (_id) => {
   console.log(_id)
   const res = await axiosSecure.delete(`/scholarship/${_id}`)
   if(res.data.deletedCount > 0){
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    refetch()
   }
   console.log(res.data)
  }
  return (
    <div>
      <Helmet><title>MANAGE SCHOLARSHIP</title></Helmet>
     <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>#</th>
        <th>Scholarship name</th>
        <th>University Name</th>
        <th>Subject Category</th>
        <th>Degree</th>
        <th>Application Fees</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        card.map((one,i) => <tr key={i}>
          <th>{i+1}</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Littel, Schaden and Vandervort</td>
          <td>Canada</td>
          <td>12/16/2020</td>
          <td className="text-2xl flex justify-between">
            <button className=""><FcViewDetails /></button>
            <Link to={`/dashboard/updateScholarshipForm/${one._id}`}><button className="text-blue-800"><LiaEditSolid /></button></Link>
            <button onClick={() => handleDelete(one._id)} className="text-red-500"><MdDelete /></button>
          </td>
        </tr>)
      }

    </tbody>

  </table>
</div>
    </div>
  )
}

export default ManageScholarship