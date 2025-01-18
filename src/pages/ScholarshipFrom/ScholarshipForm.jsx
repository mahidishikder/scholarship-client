import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthPorvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';


function ScholarshipForm() {
  const axiosPublic = useAxiosPublic()
  const {user} = useContext(AuthContext)
  const location = useLocation();
  const { UName, SCategory, SubCategory, price, transactionId } = location.state || {};
  console.log(UName,SCategory,SubCategory)

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form থেকে ডেটা সংগ্রহ করা
    const formData = new FormData(e.target);
  
    const data = {
      phone: formData.get("phone"),
      photo: formData.get("photo"), // File input data
      village: formData.get("village"),
      district: formData.get("district"),
      country: formData.get("country"),
      gender: formData.get("gender"),
      degree: formData.get("degree"),
      sscResult: formData.get("sscResult"),
      hscResult: formData.get("hscResult"),
      studyGap: formData.get("studyGap"),
      universityName: UName, 
      scholarshipCategory: SCategory,
      subjectCategory: SubCategory, 
      userName: user?.displayName,
      userEmail: user?.email,
      submissionDate: new Date().toISOString() 
    };
  
    console.log(data); 
    const res = await axiosPublic.post('/AppliedScholarship',data)
    console.log(res.data)
    if(res.data.insertedId){
      toast.success('Your scholarship application has been successfully submitted!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl my-24 ring-[#890C25]  ring-2">
        <h2 className="text-3xl my-6 font-bold mb-10 text-center text-[#890C25]">Scholarship Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                name="village"
                placeholder="Village"
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="district"
                placeholder="District"
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Degree */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Degree</label>
            <select
              name="degree"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          {/* SSC and HSC Results */}
          <div>
            <label className="block text-sm font-medium text-gray-700">SSC and HSC Results</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="sscResult"
                placeholder="SSC Result"
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="hscResult"
                placeholder="HSC Result"
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Study Gap */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Study Gap</label>
            <select
              name="studyGap"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">No Gap</option>
              <option value="1 year">1 Year</option>
              <option value="2 years">2 Years</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>University name</label>
             <input type="text" 
             value={UName}
             className='mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500' />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>Scholarship category</label>
             <input type="text" 
             value={SCategory}
             className='mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500' />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Subject Category</label>
             <input type="text" 
             value={SubCategory}
             className='mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500' />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#890C25] text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ScholarshipForm;

