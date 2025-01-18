import React, { useState } from 'react';
// import toast from 'react-toastify'; // Assuming React Toastify is used

function ScholarshipForm() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    photo: null,
    address: {
      village: '',
      district: '',
      country: '',
    },
    gender: '',
    degree: '',
    sscResult: '',
    hscResult: '',
    studyGap: '',
    userName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.phoneNumber || !formData.gender || !formData.degree) {
      toast.error('Please fill out all required fields!');
      return;
    }

    const submissionData = {
      ...formData,
      applicationDate: new Date().toISOString(),
    };

    // API Call to save data
    console.log('Submitting Data:', submissionData);

    // Simulate successful submission
    toast.success('Application Submitted Successfully!');
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Scholarship Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Photo</label>
          <input type="file" onChange={handleFileChange} className="w-full border px-3 py-2 rounded-md" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address.village"
            value={formData.address.village}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md mb-2"
            placeholder="Village"
          />
          <input
            type="text"
            name="address.district"
            value={formData.address.district}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md mb-2"
            placeholder="District"
          />
          <input
            type="text"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Country"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Applying Degree</label>
          <select
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select Degree</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">SSC Result</label>
          <input
            type="text"
            name="sscResult"
            value={formData.sscResult}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter your SSC result"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">HSC Result</label>
          <input
            type="text"
            name="hscResult"
            value={formData.hscResult}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter your HSC result"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Study Gap (Optional)</label>
          <select
            name="studyGap"
            value={formData.studyGap}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select Study Gap</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Years">2 Years</option>
            <option value="More than 2 Years">More than 2 Years</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">University Name</label>
          <input
            type="text"
            
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Scholarship Category</label>
          <input
            type="text"
           
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject Category</label>
          <input
            type="text"
           
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ScholarshipForm;
