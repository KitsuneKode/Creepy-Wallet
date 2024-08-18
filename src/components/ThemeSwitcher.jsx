// ThemeSwitcher.js
import PropTypes from "prop-types";

const ThemeSwitcher = ({ isDarkMode, onToggleTheme }) => (
  <button
    onClick={onToggleTheme}
    className={`p-2 rounded-full shadow-lg transition duration-300 ${
      isDarkMode
        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
        : "bg-gray-300 text-gray-800 hover:bg-gray-200"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-6 h-6 ${isDarkMode ? "text-yellow-400" : "text-blue-400"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          isDarkMode
            ? "M12 4.5A7.5 7.5 0 0 1 19.5 12A7.5 7.5 0 0 1 12 19.5A7.5 7.5 0 0 1 4.5 12A7.5 7.5 0 0 1 12 4.5z"
            : "M12 4.5A7.5 7.5 0 0 1 19.5 12A7.5 7.5 0 0 1 12 19.5A7.5 7.5 0 0 1 4.5 12A7.5 7.5 0 0 1 12 4.5z"
        }
      />
    </svg>
  </button>
);

ThemeSwitcher.propTypes = {
  isDarkMode: PropTypes.bool,
  onToggleTheme: PropTypes.containerVariants,
};

export default ThemeSwitcher;
