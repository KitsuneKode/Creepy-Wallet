import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const NotificationBar = ({ message, timer, onClose }) => {
  const [localTimer, setLocalTimer] = useState(timer);

  useEffect(() => {
    let timerInterval = null;
    if (localTimer >= 0) {
      timerInterval = setInterval(() => {
        setLocalTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
      onClose(); // Close notification when timer hits 0
    }

    return () => clearInterval(timerInterval);
  }, [message, localTimer, onClose]);

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-gray-300 p-3 rounded-lg shadow-lg flex items-center mb-2">
      <span className="mr-2">{message}</span>
      <div className="relative w-32 h-2 bg-gray-600 rounded-lg">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 rounded-lg"
          style={{
            width: `${(localTimer / timer) * 100}%`,
            transition: "width 1s linear",
          }}
        />
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-gray-300 hover:text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

NotificationBar.propTypes = {
  message: PropTypes.string,
  timer: PropTypes.number,
  onClose: PropTypes.func,
};

export default NotificationBar;
