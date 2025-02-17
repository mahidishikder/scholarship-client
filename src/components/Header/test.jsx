import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const { user, logOut, setLoading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // নতুন স্টেট

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user, setLoading]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-white/90">
      <div className="navbar-start">
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
        <ul className="menu menu-horizontal px-1 space-x-10 text-lg font-medium">
          <NavLink to="/" className="text-gray-700">HOME</NavLink>
          <NavLink to="/scholarsships" className="text-gray-700">SCHOLARSSHIPS</NavLink>
          <NavLink to="/blog" className="text-gray-700">BLOG</NavLink>
          <NavLink to="/about" className="text-gray-700">ABOUT</NavLink>
          <NavLink to="/contact" className="text-gray-700">CONTACT</NavLink>
        </ul>
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
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Link to="signIn" className="py-2 px-3 rounded bg-[#890C25] text-white/90">
              Sign in
            </Link>

            <div className="dropdown">
              <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
                {isMenuOpen ? <AiOutlineClose className="text-2xl" /> : <RiMenu3Fill className="text-2xl" />}
              </button>

              {isMenuOpen && (
                <ul className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                  <NavLink to="/" className="text-gray-700">HOME</NavLink>
                  <NavLink to="/scholarsships" className="text-gray-700">SCHOLARSSHIPS</NavLink>
                  <NavLink to="/blog" className="text-gray-700">BLOG</NavLink>
                  <NavLink to="/about" className="text-gray-700">ABOUT</NavLink>
                  <NavLink to="/contact" className="text-gray-700">CONTACT</NavLink>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
