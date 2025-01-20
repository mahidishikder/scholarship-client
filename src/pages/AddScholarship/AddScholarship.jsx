import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

function AddScholarship() {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    scholarshipName: '',
    universityName: '',
    universityImage: '',
    universityCountry: '',
    universityCity: '',
    universityRank: '',
    subjectCategory: 'Agriculture',
    scholarshipCategory: 'Full fund',
    degree: 'Diploma',
    tuitionFees: '',
    applicationFees: '',
    serviceCharge: '',
    applicationDeadline: '',
    postDate: '',
    postedUserEmail: '',
    rating: '', // নতুন
    scholarshipDetails: '', // নতুন
    stipend: '', // নতুন
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? parseFloat(value) || '' : value, // rating কে number-এ কনভার্ট করা
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitted Data:', formData);
      const res = await axiosSecure.post('/scholarship', formData);
      console.log(res.data);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });

      // ইনপুট রিসেট করার জন্য ফর্ম ডাটার স্টেট আপডেট করা
      setFormData({
        scholarshipName: '',
        universityName: '',
        universityImage: '',
        universityCountry: '',
        universityCity: '',
        universityRank: '',
        subjectCategory: 'Agriculture',
        scholarshipCategory: 'Full fund',
        degree: 'Diploma',
        tuitionFees: '',
        applicationFees: '',
        serviceCharge: '',
        applicationDeadline: '',
        postDate: '',
        postedUserEmail: '',
        rating: '',
        scholarshipDetails: '',
        stipend: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Failed to save your work',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet><title>ADD SCHOLARSHIP</title></Helmet>
      <h1 className="text-2xl font-bold mb-4">Add Scholarship</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Scholarship Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Scholarship Name</label>
          <input
            type="text"
            name="scholarshipName"
            value={formData.scholarshipName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* University Name */}
        <div>
          <label className="block text-sm font-medium mb-1">University Name</label>
          <input
            type="text"
            name="universityName"
            value={formData.universityName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* University Image */}
        <div>
          <label className="block text-sm font-medium mb-1">University Image (URL)</label>
          <input
            type="text"
            name="universityImage"
            value={formData.universityImage}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* University Country */}
        <div>
          <label className="block text-sm font-medium mb-1">University Country</label>
          <input
            type="text"
            name="universityCountry"
            value={formData.universityCountry}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* University City */}
        <div>
          <label className="block text-sm font-medium mb-1">University City</label>
          <input
            type="text"
            name="universityCity"
            value={formData.universityCity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* University Rank */}
        <div>
          <label className="block text-sm font-medium mb-1">University World Rank</label>
          <input
            type="number"
            name="universityRank"
            value={formData.universityRank}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Subject Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Subject Category</label>
          <select
            name="subjectCategory"
            value={formData.subjectCategory}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
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
            name="scholarshipCategory"
            value={formData.scholarshipCategory}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
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
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
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
            type="number"
            name="tuitionFees"
            value={formData.tuitionFees}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Application Fees */}
        <div>
          <label className="block text-sm font-medium mb-1">Application Fees</label>
          <input
            type="number"
            name="applicationFees"
            value={formData.applicationFees}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Service Charge */}
        <div>
          <label className="block text-sm font-medium mb-1">Service Charge</label>
          <input
            type="number"
            name="serviceCharge"
            value={formData.serviceCharge}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-sm font-medium mb-1">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Post Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Post Date</label>
          <input
            type="date"
            name="postDate"
            value={formData.postDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Posted User Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Posted User Email</label>
          <input
            type="email"
            name="postedUserEmail"
            value={formData.postedUserEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Scholarship Details */}
        <div>
          <label className="block text-sm font-medium mb-1">Scholarship Details</label>
          <textarea
            name="scholarshipDetails"
            value={formData.scholarshipDetails}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
          ></textarea>
        </div>

        {/* Stipend */}
        <div>
          <label className="block text-sm font-medium mb-1">Stipend</label>
          <input
            type="text"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
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

export default AddScholarship;
