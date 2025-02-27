import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Fill, RiUserLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLogoTwitter } from "react-icons/io";
import { PiInstagramLogoBold } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdNotificationsPaused } from "react-icons/md";

function Header() {
  const [open, setOpen] = useState(false);
  const notifications = [
    { id: 1, message: "New Scholarship Opportunity Available!" },
    { id: 2, message: "Your application has been reviewed." },
  ];
  const { user, logOut, setLoading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const body = document.documentElement;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    document.body.style.transition = "background-color 0.5s ease-in-out, color 0.5s ease-in-out";
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true); // Add sticky class when scrolled down 100px
      } else {
        setSticky(false); // Remove sticky class when back at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user, setLoading]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!", { autoClose: 2000 });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 3000 });
      });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#4946EC] dark:text-[#4946EC] font-bold" : "text-gray-700 dark:text-white"
        }
        onClick={() => setMenuOpen(false)}
      >
        HOME
      </NavLink>
      <NavLink
        to="/scholarships"
        className={({ isActive }) =>
          isActive ? "text-[#4946EC] dark:text-[#4946EC] font-bold" : "text-gray-700 dark:text-white"
        }
        onClick={() => setMenuOpen(false)}
      >
        SCHOLARSHIPS
      </NavLink>
      <NavLink
        to="/success_story"
        className={({ isActive }) =>
          isActive ? "text-[#4946EC] dark:text-[#4946EC] font-bold" : "text-gray-700 dark:text-white"
        }
        onClick={() => setMenuOpen(false)}
      >
        SUCCESS STORY
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-[#4946EC] dark:text-[#4946EC] font-bold" : "text-gray-700 dark:text-white"
        }
        onClick={() => setMenuOpen(false)}
      >
        BLOG
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-[#4946EC] dark:text-[#4946EC] font-bold" : "text-gray-700 dark:text-white"
        }
        onClick={() => setMenuOpen(false)}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-[#4946EC] dark:text-[#4946EC] font-bold" : "text-gray-700 dark:text-white"
        }
        onClick={() => setMenuOpen(false)}
      >
        CONTACT
      </NavLink>
    </>
  );

  return (
    <div className=" ">
      <div className="bg-[#4946EC] py-1">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="text-white/90 md:text-xl text-sm font-semibold">
            Register with Google & get your first
            <span className="text-red-400"> scholarship application free!</span>
          </div>
          <div className="flex space-x-4 text-2xl text-white/90">
            <Link><BiLogoFacebookSquare /></Link>
            <Link><CiLinkedin /></Link>
            <Link><IoLogoTwitter /></Link>
            <Link><PiInstagramLogoBold /></Link>
          </div>
        </div>
      </div>

      <div className={`bg-gray-200 shadow-neutral dark:bg-slate-800 ${sticky ? 'fixed top-0 left-0 right-0 z-50' : ''} transition-all`}>
      <div className="navbar max-w-screen-2xl mx-auto relative">
          <div className="navbar-start gap-2">
            <motion.img
              src="https://img.icons8.com/?size=80&id=7Bz1NeBMgy5h&format=png"
              alt="Logo"
              className="w-9"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <h2 className="text-2xl dark:text-white font-bold">ScholGo</h2>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-10 text-lg font-medium">{links}</ul>
          </div>

          <div className="navbar-end flex items-center space-x-4">
            <div className="relative">
              <div className="relative cursor-pointer z-200" onClick={() => setOpen(!open)}>
                <MdNotificationsPaused className="text-3xl text-[#4946EC]" />
                {notifications.length > 0 && (
                  <span className="absolute -top-2 -right- bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {notifications.length}
                  </span>
                )}
              </div>
              {open && (
                <div className="absolute z-20 -right-10 sm:right-0 mt-2 w-64 ring-1 ring-[#4946EC] bg-blue-300 dark:bg-slate-800 shadow-lg rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  <ul className="mt-2 space-y-2">
                    {notifications.map((notif) => (
                      <li key={notif.id} className="text-sm text-gray-700 dark:text-gray-300 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                        {notif.message}
                      </li>
                    ))}
                  </ul>
                  {notifications.length === 0 && <p className="text-sm text-gray-500">No new notifications</p>}
                </div>
              )}
            </div>

            <motion.button
              onClick={handleThemeToggle}
              className="text-3xl text-[#4946EC]"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {theme === "dark" ? <FiSun className="text-[#ebeaea]" /> : <FiMoon className="text-[#000000]" />}
            </motion.button>

            {!user && (
              <Link to="/signIn" className="py-2 px-3 bg-[#4946EC] flex items-center gap-1 text-white rounded">
                <RiUserLine /> Login
              </Link>
            )}

            {user && (
              <div className="relative">
                <img
                  className="w-8 h-8 rounded-full ring-2 p-[2px] ring-[#395BDF] hover:ring-green-500 cursor-pointer"
                  alt="User Avatar"
                  src={user.photoURL || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"}
                  onClick={toggleProfile}
                />
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-200 ring-2 ring-[#395BDF] border border-gray-200 shadow-lg rounded-lg z-50">
                    <ul className="py-6 text-gray-700 items-center flex flex-col w-full">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 text-lg py-2 hover:bg-[#4946EC] rounded hover:text-white"
                          onClick={() => setProfileOpen(false)}
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard"
                          className="block text-lg px-4 hover:bg-[#4946EC] mb-4 py-2 rounded hover:text-white"
                          onClick={() => setProfileOpen(false)}
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="w-full text-lg text-left px-4 py-2 hover:bg-red-400 rounded text-white bg-red-500">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            <button onClick={toggleMenu} className="lg:hidden ml-3 text-3xl dark:text-white">
              {menuOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="fixed top-0 right-0 w-3/4 h-full dark:bg-slate-700 bg-white shadow-lg p-5 flex flex-col space-y-3 text-lg font-medium z-50 lg:hidden"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <button onClick={toggleMenu} className="text-3xl dark:text-white self-end">
                  <AiOutlineClose />
                </button>
                {links}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Header;
