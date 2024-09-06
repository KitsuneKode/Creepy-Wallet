import { motion, AnimatePresence } from "framer-motion";
import WalletItem from "./WalletItem";
import PropTypes from "prop-types";

const WalletList = ({
  isDarkMode,
  solWalletLength,
  wallets,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center 
            ${isDarkMode ? " bg-gray-900 " : " bg-gray-300 "}`}
          initial={{ opacity: 0, scale: 1.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.6 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className={`
          
            ${
              isDarkMode
                ? "border-gray-300 bg-gray-700  text-gray-300"
                : "border-gray-600 bg-gray-100  text-gray-700"
            }
 p-8 rounded-lg shadow-lg max-w-3xl w-11/12 h-5/6 overflow-y-auto relative`}
          >
            <button
              onClick={onClose}
              className="sticky  top-1 right-4 text-gray-400 hover:text-gray-100"
              style={{ float: "right" }}
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
            <h2 className="text-2xl font-bold mb-4"> All Wallets</h2>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {Array.isArray(wallets) &&
                wallets.map((wallet, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <WalletItem
                      solWalletLength={solWalletLength}
                      isDarkMode={isDarkMode}
                      wallet={wallet}
                      index={index}
                    />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

WalletList.propTypes = {
  solWalletLength: PropTypes.array,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  wallets: PropTypes.arrayOf(PropTypes.any),
  isDarkMode: PropTypes.bool,
};
export default WalletList;
