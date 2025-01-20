import { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

function UpdateScholarshipForm() {
  const axiosSecure = useAxiosSecure()
  const {_id, applicationDeadline,
    applicationFees,
    degree,
    postDate,
    postedUserEmail,
    rating,
    scholarshipCategory,
    scholarshipDetails,
    scholarshipName,
    serviceCharge,
    stipend,
    subjectCategory,
    tuitionFees,
    universityCity,
    universityCountry,
    universityImage,
    universityName,
    universityRank} = useLoaderData()

  // state for form data
  const [formData, setFormData] = useState({
    scholarshipName,
    universityName,
    universityImage,
    universityCountry,
    universityCity,
    universityRank,
    subjectCategory,
    scholarshipCategory,
    degree,
    tuitionFees,
    applicationFees,
    serviceCharge,
    applicationDeadline,
    postDate,
    postedUserEmail,
    rating,
    scholarshipDetails,
    stipend
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Assuming formData is the data you want to send to the server
    console.log('Form Data:', formData);
    
    try {
      const res = await axiosSecure.put(`/AppliedScholarship/${_id}`, formData);  // Pass formData as body
      console.log(res.data);
  
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",  // Use the correct icon name
          title: "Your work has been updated",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Error updating scholarship:', error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Scholarship Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Scholarship Name</label>
          <input
            type="text"
            value={formData.scholarshipName}
            name="scholarshipName"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
            required
          />
        </div>

        {/* University Name */}
        <div>
          <label className="block text-sm font-medium mb-1">University Name</label>
          <input
            value={formData.universityName}
            type="text"
            name="universityName"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
            required
          />
        </div>

        {/* University Image */}
        <div>
          <label className="block text-sm font-medium mb-1">University Image (URL)</label>
          <input
            value={formData.universityImage}
            type="text"
            name="universityImage"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* University Country */}
        <div>
          <label className="block text-sm font-medium mb-1">University Country</label>
          <input
            value={formData.universityCountry}
            type="text"
            name="universityCountry"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
            required
          />
        </div>

        {/* University City */}
        <div>
          <label className="block text-sm font-medium mb-1">University City</label>
          <input
            value={formData.universityCity}
            type="text"
            name="universityCity"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
            required
          />
        </div>

        {/* University Rank */}
        <div>
          <label className="block text-sm font-medium mb-1">University World Rank</label>
          <input
            value={formData.universityRank}
            type="number"
            name="universityRank"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Subject Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Subject Category</label>
          <select
            value={formData.subjectCategory}
            name="subjectCategory"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          >
            <option>Agriculture</option>
            <option>Engineering</option>
            <option>Doctor</option>
          </select>
        </div>

        {/* Scholarship Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Scholarship Category</label>
          <select
            value={formData.scholarshipCategory}
            name="scholarshipCategory"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          >
            <option>Full fund</option>
            <option>Partial</option>
            <option>Self-fund</option>
          </select>
        </div>

        {/* Degree */}
        <div>
          <label className="block text-sm font-medium mb-1">Degree</label>
          <select
            value={formData.degree}
            name="degree"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          >
            <option>Diploma</option>
            <option>Bachelor</option>
            <option>Masters</option>
          </select>
        </div>

        {/* Tuition Fees */}
        <div>
          <label className="block text-sm font-medium mb-1">Tuition Fees</label>
          <input
            value={formData.tuitionFees}
            type="number"
            name="tuitionFees"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Application Fees */}
        <div>
          <label className="block text-sm font-medium mb-1">Application Fees</label>
          <input
            value={formData.applicationFees}
            type="number"
            name="applicationFees"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Service Charge */}
        <div>
          <label className="block text-sm font-medium mb-1">Service Charge</label>
          <input
            value={formData.serviceCharge}
            type="number"
            name="serviceCharge"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-sm font-medium mb-1">Application Deadline</label>
          <input
            value={formData.applicationDeadline}
            type="date"
            name="applicationDeadline"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Post Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Post Date</label>
          <input
            value={formData.postDate}
            type="date"
            name="postDate"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Posted User Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Posted User Email</label>
          <input
            value={formData.postedUserEmail}
            type="email"
            name="postedUserEmail"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            value={formData.rating}
            type="number"
            name="rating"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Scholarship Details */}
        <div>
          <label className="block text-sm font-medium mb-1">Scholarship Details</label>
          <textarea
            value={formData.scholarshipDetails}
            name="scholarshipDetails"
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Stipend */}
        <div>
          <label className="block text-sm font-medium mb-1">Stipend</label>
          <input
            value={formData.stipend}
            type="text"
            name="stipend"
            className="w-full border border-gray-300 rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateScholarshipForm;
