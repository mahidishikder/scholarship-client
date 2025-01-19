import { useLoaderData } from "react-router-dom"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

function UpdateApplicationForm() {
  const axiosPublic = useAxiosPublic()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const photo = e.target.photo.files[0];
    const village = e.target.village.value;
    const district = e.target.district.value;
    const country = e.target.country.value;
    const gender = e.target.gender.value;
    const degree = e.target.degree.value;
    const sscResult = e.target.sscResult.value;
    const hscResult = e.target.hscResult.value;
    const studyGap = e.target.studyGap.value;

    const data = {
      phone,
      photo,
      village,
      district,
      country,
      gender,
      degree,
      sscResult,
      hscResult,
      studyGap,
    };

     const res = await axiosPublic.put(`/AppliedScholarship/${_id}`,data)
        console.log(res.data)
        if(res.data.modifiedCount> 0){
          toast.success('Your scholarship application has been successfully submitted!');
         
        }
  
    // Proceed to send the data to the server or API
  };
  
  const {country,degree,district,genter,hscResult,phone,photo,price,scholarshipCategory,service_charge,sscResult,studyGap,subjectCategory,submissioDate,transactionId,unicercityLocation,universityName,userEmail,userName,village,_id} = useLoaderData()


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl my-24 ring-[#890C25]  ring-2">
      <h2 className="text-3xl my-6 font-bold mb-10 text-center text-[#890C25]">Update Scholarship Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            defaultValue={phone}
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
              defaultValue={village}
              type="text"
              name="village"
              placeholder="Village"
              required
              className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
            defaultValue={district}
              type="text"
              name="district"
              placeholder="District"
              required
              className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
            defaultValue={country}
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
          defaultValue={genter}
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
          defaultValue={degree}
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
            defaultValue={sscResult}
              type="text"
              name="sscResult"
              placeholder="SSC Result"
              required
              className="block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              defaultValue={hscResult}
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
          defaultValue={studyGap}
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
           value={universityName}
           className='mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500' />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>Scholarship category</label>
           <input type="text" 
           value={scholarshipCategory}
           className='mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500' />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Subject Category</label>
           <input type="text" 
           value={subjectCategory}
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
  )
}

export default UpdateApplicationForm