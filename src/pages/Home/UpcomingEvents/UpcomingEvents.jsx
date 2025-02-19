import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "International Scholarship Fair",
    date: "March 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Online",
    description: "Explore top scholarships from global universities.",
  },
  {
    id: 2,
    title: "Study Abroad Webinar",
    date: "March 15, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Zoom",
    description: "Learn about studying abroad and available scholarships.",
  },
  {
    id: 3,
    title: "Global Education Summit",
    date: "March 20, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Webinar",
    description: "Discover opportunities for studying in top universities worldwide.",
  }
];

function Card({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="shadow-lg p-4 bg-white dark:bg-slate-700 rounded-lg max-w-md w-full"
    >
      {children}
    </motion.div>
  );
}

function CardContent({ children }) {
  return <div className="p-5">{children}</div>;
}

function UpcomingEvents() {
  return (
    <div className="p-6 md:p-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="lg:text-4xl text-3xl mb-16 font-bold text-center text-blue-600 dark:text-white/90">
          📅 Upcoming Scholarship Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {events.map(event => (
            <Card key={event.id}>
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
                  {event.title}
                </h3>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <FaCalendarAlt className="text-blue-500" /> {event.date}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <FaClock className="text-green-500" /> {event.time}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-red-500" /> {event.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">{event.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full px-4 py-2 bg-[#4946EC] text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Register Now
                </motion.button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
