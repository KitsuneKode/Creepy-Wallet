import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import PropTypes from "prop-types";

const KeyAlert = ({ message, onClose }) => {
  //wait only for 3 seconds

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 4000 milliseconds = 4 seconds

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-slate-800 text-teal-200 p-6 rounded-lg shadow-lg max-w-lg w-full border-2 border-teal-400"
            whileHover={{
              boxShadow: "0 0 20px rgba(45, 212, 191, 0.3)",
              scale: 1.02,
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-teal-300">NOTE</h2>
              <button
                onClick={onClose}
                className="text-teal-400 hover:text-teal-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-sm space-y-3">
              {message.split(". ").map((sentence, index) => (
                <div key={index} className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-teal-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span className="bg-slate-700 px-2 py-1 rounded text-teal-100 flex-grow">
                    {sentence.trim()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

KeyAlert.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
};

export default KeyAlert;
