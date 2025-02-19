import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import { FaUserCircle } from "react-icons/fa";
import "chart.js/auto";

function DashboardInfo() {
  // Sample data for charts
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Growth Rate",
        data: [10, 25, 40, 60, 80, 100],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["#1F77B4", "#FF7F0E", "#2CA02C"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900 transition-all">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div>
          <button className="p-2 text-xl rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <FaUserCircle />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg h-60">
          <h3 className="text-lg font-semibold mb-2">Performance Chart</h3>
          <Line data={lineData} options={{ maintainAspectRatio: false }} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg h-60">
          <h3 className="text-lg font-semibold mb-2">Category Distribution</h3>
          <Pie data={pieData} options={{ maintainAspectRatio: false }} />
        </div>

        {/* User Engagement */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">User Engagement</h3>
          <div className="flex justify-between text-xl font-bold">
            <div>
              <p className="text-gray-600">Active Users</p>
              <p>1,350</p>
            </div>
            <div>
              <p className="text-gray-600">New Sign-ups</p>
              <p>500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Sections */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">1,200</p>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
          <ul>
            <li className="text-sm text-gray-600">New user registration</li>
            <li className="text-sm text-gray-600">System update completed</li>
            <li className="text-sm text-gray-600">New feedback submitted</li>
            <li className="text-sm text-gray-600">Task completed by admin</li>
          </ul>
        </div>

        {/* Latest Notifications */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Latest Notifications</h3>
          <ul>
            <li className="text-sm text-gray-600">Update your profile details.</li>
            <li className="text-sm text-gray-600">System maintenance scheduled for tonight.</li>
            <li className="text-sm text-gray-600">New message received in inbox.</li>
            <li className="text-sm text-gray-600">Security alert: Unusual login attempt.</li>
          </ul>
        </div>
      </div>

      {/* Growth Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Revenue */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
          <p className="text-3xl font-bold">$3,500</p>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
          <ul>
            <li className="text-sm text-gray-600">Team meeting: Feb 21, 2025</li>
            <li className="text-sm text-gray-600">Project launch: Mar 5, 2025</li>
            <li className="text-sm text-gray-600">Annual conference: Apr 15, 2025</li>
          </ul>
        </div>
      </div>

      {/* System Health */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Server Status */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Server Status</h3>
          <p className="text-xl font-bold text-green-500">All Systems Go</p>
        </div>

        {/* System Alerts */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">System Alerts</h3>
          <ul>
            <li className="text-sm text-gray-600">No critical alerts at the moment.</li>
            <li className="text-sm text-gray-600">Database backup completed successfully.</li>
            <li className="text-sm text-gray-600">No pending maintenance tasks.</li>
          </ul>
        </div>
      </div>

      {/* User Feedback */}
      <div className="mt-8 bg-white shadow-md p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">User Feedback</h3>
        <ul>
          <li className="text-sm text-gray-600">"Great user experience, easy to navigate!"</li>
          <li className="text-sm text-gray-600">"The app is fast and responsive. Keep up the good work!"</li>
          <li className="text-sm text-gray-600">"Would love more customization options."</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardInfo;
