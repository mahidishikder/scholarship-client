import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FaBlogger, FaGraduationCap } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdAddTask, MdOutlineAdminPanelSettings, MdReviews } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { BsInfoCircle } from "react-icons/bs";
import useAdmin from "../hooks/useAdmin";
import useModerator from "../hooks/useModerator";
import DashboardNav from "../pages/DashboardNav/DashboardNav";

function Dashboard() {
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:fixed lg:left-0 lg:top-0 lg:w-72 lg:h-screen bg-[#2C3E50] text-white shadow-lg flex flex-col lg:overflow-y-auto lg:pr-2 w-full"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <motion.img
            src="https://img.icons8.com/?size=80&id=7Bz1NeBMgy5h&format=png"
            alt="Logo"
            className="w-9"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <h2 className="text-xl font-bold">ScholGo</h2>
        </div>
        <div className="divider divider-info my-8">menu</div>

        {/* Scrollable Menu */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 pr-2">
          <ul className="space-y-2">
            {isAdmin ? (
              <>
                <DashboardLink to="/dashboard" icon={<CgProfile />} label="Dashboard" />
                <DashboardLink to="/dashboard/profile" icon={<CgProfile />} label="Admin Profile" />
                <DashboardLink to="/dashboard/addScholarship" icon={<MdAddTask />} label="Add Scholarship" />
                <DashboardLink to="/dashboard/manageScholarship" icon={<GrUserManager />} label="Manage Scholarships" />
                <DashboardLink to="/dashboard/appliedScholarship" icon={<VscGitPullRequestGoToChanges />} label="Applied Applications" />
                <DashboardLink to="/dashboard/users" icon={<MdOutlineAdminPanelSettings />} label="Manage Users" />
                <DashboardLink to="/dashboard/manageReview" icon={<MdReviews />} label="Manage Reviews" />
              </>
            ) : isModerator ? (
              <>
                <DashboardLink to="/dashboard/profile" icon={<CgProfile />} label="Moderator Profile" />
                <DashboardLink to="/dashboard/manageScholarship" icon={<GrUserManager />} label="Manage Scholarships" />
                <DashboardLink to="/dashboard/manageReview" icon={<MdReviews />} label="All Reviews" />
                <DashboardLink to="/dashboard/appliedScholarship" icon={<VscGitPullRequestGoToChanges />} label="All Applied Scholarships" />
                <DashboardLink to="/dashboard/addScholarship" icon={<MdAddTask />} label="Add Scholarship" />
              </>
            ) : (
              <>
                <DashboardLink to="/dashboard/profile" icon={<CgProfile />} label="User Profile" />
                <DashboardLink to="/dashboard/applications" icon={<SlDocs />} label="My Applications" />
                <DashboardLink to="/dashboard/reviews" icon={<MdReviews />} label="My Reviews" />
              </>
            )}
          </ul>

          {/* General Links */}
          <ul className="space-y-2 border-t border-gray-500 pt-4 mt-4">
            <DashboardLink to="/" icon={<IoHomeOutline />} label="Home" />
            <DashboardLink to="/scholarships" icon={<FaGraduationCap />} label="Scholarships" />
            <DashboardLink to="/success_story" icon={<FaBlogger />} label="Success Story" />
            <DashboardLink to="/blog" icon={<FaBlogger />} label="Blogs" />
            <DashboardLink to="/contact" icon={<RiContactsBook2Line />} label="Contact" />
            <DashboardLink to="/about" icon={<BsInfoCircle />} label="About" />
          </ul>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="lg:ml-72 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white"
        >
          <DashboardNav></DashboardNav>
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}

function DashboardLink({ to, icon, label }) {
  return (
    <li>
      <NavLink
        to={to}
        end={to === "/dashboard"} // Add this line to only match exactly for /dashboard
        className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 hover:rounded-r-full w-full transition-all text my-4 font-medium 
          ${isActive ? "bg-[#4946EC] rounded-r-full text-white shadow-lg" : "hover:bg-[#4946EC] hover:text-gray-300"}`
        }
      >
        {icon} <span>{label}</span>
      </NavLink>
    </li>
  );
}

export default Dashboard;
