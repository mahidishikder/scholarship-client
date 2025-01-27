import { BsInfoCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBlogger } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdAddTask, MdOutlineAdminPanelSettings, MdReviews } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

function Dashboard() {
  const [isAdmin] = useAdmin()
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Sidebar */}
      <div className="h-full lg:h-screen w-full lg:w-64 shadow-md shadow-[#890C25] bg-gray-100 ring-2 ring-[#890C25] rounded-lg lg:rounded-none">
        <img className="mx-auto mt-3" src="https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/06/logo__five.svg" alt="" />
        <ul className="menu space-y-4 p-4">
           {
            isAdmin ? 
            <>
             <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/profile`} className="flex items-center gap-2">
              <CgProfile /> Admin Profile
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/addScholarship`} className="flex items-center gap-2">
            <MdAddTask /> Add Scholarship
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/manageScholarship`} className="flex items-center gap-2">
            <GrUserManager />
            Manage Scholarship
            </NavLink>
            
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/appliedScholarship`} className="flex items-center gap-2">
            <VscGitPullRequestGoToChanges /> Applied Application
            </NavLink>
            
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/users`} className="flex items-center gap-2">
            <MdOutlineAdminPanelSettings /> Manage Users
            </NavLink>
            
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/manageReview`} className="flex items-center gap-2">
              <MdReviews /> Manage Review
            </NavLink>
            
          </li>
            </>
            : 
            <>
            <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/profile`} className="flex items-center gap-2">
              <CgProfile /> My Profile
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/applications`} className="flex items-center gap-2">
              <SlDocs /> My Applications
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/dashboard/reviews`} className="flex items-center gap-2">
              <MdReviews /> My Reviews
            </NavLink>
            
          </li>
            </>
           }
          
         

         {/* share menu */}
          <div className="divider text-lg font-semibold">menu</div>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/`} className="flex items-center gap-2">
              <IoHomeOutline /> Home
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/SCHOLARSSHIPS`} className="flex items-center gap-2">
            <FaGoogleScholar /> SCHOLARSSHIPS
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/blog`} className="flex items-center gap-2">
            <FaBlogger /> BLOGS
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/CONTACT`} className="flex items-center gap-2">
            <RiContactsBook2Line /> CONTACT
            </NavLink>
          </li>
          <li className="bg-[#890C25] text-white/90 rounded-lg text-lg font-semibold">
            <NavLink to={`/About`} className="flex items-center gap-2">
            <BsInfoCircle />
            ABOUT
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-lg shadow-lg ">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
