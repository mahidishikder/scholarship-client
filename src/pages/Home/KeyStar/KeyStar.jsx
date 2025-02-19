import { FaUserGraduate, FaThumbsUp, FaDownload, FaBriefcase } from "react-icons/fa";
import { useState } from "react";

const stats = [
  {
    id: 1,
    title: "Happy Student",
    value: 5025,
    icon: <FaUserGraduate size={40} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "Good Comment",
    value: 1524,
    icon: <FaThumbsUp size={40} className="text-green-600" />,
  },
  {
    id: 3,
    title: "Services Download",
    value: 5060,
    icon: <FaDownload size={40} className="text-purple-600" />,
  },
  {
    id: 4,
    title: "Projects Completed",
    value: 1250,
    icon: <FaBriefcase size={40} className="text-yellow-600" />,
  },
];

function KeyStar() {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [hovered, setHovered] = useState(false);

  const startAnimation = () => {
    setHovered(true);
    const intervals = stats.map((stat, index) => {
      let currentValue = 0;
      const increment = Math.ceil(stat.value / 100);
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.value) {
          currentValue = stat.value;
          clearInterval(intervals[index]);
        }
        setAnimatedValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = currentValue;
          return newValues;
        });
      }, 20);
    });

    setTimeout(() => intervals.forEach(clearInterval), 2000); // Stop after 2 seconds
  };

  const resetValues = () => {
    setHovered(false);
    setAnimatedValues(stats.map(() => 0));
  };

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 pb-20 p-4"
      onMouseEnter={startAnimation}
      onMouseLeave={resetValues}
    >
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-600 dark:text-white mb-8">
          Key Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex items-center justify-center p-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center items-center">{stat.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {hovered ? animatedValues[index] : 0}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyStar;

