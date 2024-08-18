import PropTypes from "prop-types";

const KeyInput = ({
  label,
  value,
  isDarkMode,
  type = "text",
  onCopy,
  onToggleShow,
  showToggle = false,
}) => (
  <div>
    <label
      className={`block text-sm font-medium mb-1 ${
        isDarkMode ? "text-gray-400" : "text-gray-700"
      }`}
    >
      {label}
    </label>
    <div
      className={`flex items-center rounded-lg overflow-hidden ${
        isDarkMode ? "bg-gray-700" : "bg-gray-100"
      }`}
    >
      <input
        type={type}
        value={value}
        readOnly
        className={`flex-grow px-3 py-2 focus:outline-none ${
          isDarkMode
            ? "bg-transparent text-white"
            : "bg-transparent text-gray-800"
        }`}
      />
      {showToggle && (
        <button
          onClick={onToggleShow}
          className={`p-2 ${
            isDarkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-gray-800"
          } focus:outline-none`}
        >
          {type === "text" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                clipRule="evenodd"
              />
              <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
            </svg>
          )}
        </button>
      )}
      <button
        onClick={onCopy}
        className={`p-2 ${
          isDarkMode
            ? "text-gray-400 hover:text-white"
            : "text-gray-600 hover:text-gray-800"
        } focus:outline-none`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
        </svg>
      </button>
    </div>
  </div>
);

KeyInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  onCopy: PropTypes.func,
  onToggleShow: PropTypes.func,
  showToggle: PropTypes.bool,
  isDarkMode: PropTypes.bool,
  type: PropTypes.string,
};

export default KeyInput;
