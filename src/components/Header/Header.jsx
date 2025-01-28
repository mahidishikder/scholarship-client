import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const { user, logOut, setLoading } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user, setLoading]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
        });
        console.log(error.message);
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#890C25] font-bold" : "text-gray-700"
        }>
        HOME
      </NavLink>
      <NavLink
        to="/scholarsships"
        className={({ isActive }) =>
          isActive ? "text-[#890C25] font-bold" : "text-gray-700"
        }>
        SCHOLARSSHIPS
      </NavLink>
      {/* {user && (
        <NavLink
          to="/secret"
          className={({ isActive }) =>
            isActive ? "text-[#890C25] font-bold" : "text-gray-700"
          }>
          SECRET
        </NavLink>
      )} */}
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-[#890C25] font-bold" : "text-gray-700"
        }>
        BLOG
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-[#890C25] font-bold" : "text-gray-700"
        }>
        ABOUT
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-[#890C25] font-bold" : "text-gray-700"
        }>
        CONTACT
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-white/90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <motion.div
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}>
          <img
            src="https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/06/logo__five.svg"
            alt="Logo"
            className="w-32"
          />
        </motion.div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10 text-lg font-medium">{links}</ul>
      </div>
      <div className="navbar-end z-10">
        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <motion.div
                tabIndex={0}
                role="button"
                initial={{ scale: 0.8, y: -5 }}
                animate={{ scale: 0.8, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}>
                <div className="w-10 rounded-full">
                  <img
                    className="ring-2 hover:ring-green-500 ring-[#6D091D] rounded-full p-1"
                    alt="User Avatar"
                    src={
                      user.photoURL ||
                      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                    }
                  />
                </div>
              </motion.div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <Link to={`profile`}>
                  <li className="hover:text-yellow-500">
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                </Link>
                <Link to={`/dashboard/profile`}>
                  <li className="hover:text-yellow-500">
                    <a>Dashboard</a>
                  </li>
                </Link>
                <Link onClick={handleLogout} to={`/signIn`}>
                  <li className="bg-red-500 text-white/90 rounded">
                    <a>Logout</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <Link to={`signIn`} className="py-2 px-3 rounded bg-[#890C25] text-white/90">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
