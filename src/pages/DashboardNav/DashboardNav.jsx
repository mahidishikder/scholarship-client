import React, { useState } from 'react';
import { FaMoon, FaSun, FaBell, FaUserCircle, FaCogs, FaThLarge, FaCrown } from 'react-icons/fa';

function DashboardNav() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`p-4 shadow-md ${darkMode ? 'bg-gray-900 shadow-md  text-white' : 'bg-gray-100 mb-[2px] text-gray-900'}`}>
      <div className="flex justify-between items-center">
        {/* Search Box */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden max-w-lg w-full">
          {/* Input Box */}
          <input
            type="text"
            placeholder="Search by info"
            className="px-4 w-full text-gray-800 py-2 placeholder-gray-500 focus:outline-none focus:ring-2"
          />

          {/* Search Button */}
          <button className="bg-[#3D3DC5] text-white py-2 px-4 hover:bg-white/80 transition duration-300">
            Search
          </button>
        </div>

        {/* Icons & Profile */}
        <div className="flex items-center gap-6">
          {/* Premium Badge */}
          <div className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-lg font-bold">
            <FaCrown style={{ color: 'orange' }} />
            <span>Premium</span>
          </div>

          {/* Notifications */}
          <FaBell
            size={22}
            className="cursor-pointer hover:text-red-500 transition"
            style={{ color: darkMode ? '#FF5733' : '#FF4500' }}
          />

          {/* Country Flag */}
          <img
            src="https://flagcdn.com/w40/bd.png"
            alt="Country"
            className="w-8 h-6 rounded-full"
          />

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <FaSun size={20} style={{ color: '#FDB813' }} />
            ) : (
              <FaMoon size={20} style={{ color: '#8A8D92' }} />
            )}
          </button>

          {/* Apps Menu */}
          <FaThLarge
            size={22}
            className="cursor-pointer hover:text-green-500 transition"
            style={{ color: darkMode ? '#00FF7F' : '#32CD32' }}
          />

          {/* Profile & Settings */}
          <div className="flex items-center gap-4">
            <FaUserCircle
              size={28}
              className="cursor-pointer hover:text-blue-500 transition"
              style={{ color: darkMode ? '#00BFFF' : '#1E90FF' }}
            />
            <FaCogs
              size={22}
              className="cursor-pointer hover:text-purple-500 transition"
              style={{ color: darkMode ? '#9370DB' : '#800080' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
