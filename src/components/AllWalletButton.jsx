import { useState } from "react";
import { motion } from "framer-motion";
import WalletList from "./ui/AllWalletModal";
import PropTypes from "prop-types";

const ViewAllButton = ({
  solWalletLength,
  isDarkMode,
  allEtherWallet,
  allSolWallet,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showWalletList, setShowWalletList] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setShowWalletList(true);
    setTimeout(() => setIsButtonClicked(false), 300);
  };

  return (
    <div
      className={` 
        ${
          isDarkMode
            ? "border-gray-700 bg-gray-900"
            : "border-gray-300 bg-white-200"
        }`}
    >
      <motion.button
        className={`px-6 py-2 rounded-lg font-medium relative overflow-hidden ${
          isDarkMode ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white"
        }`}
        whileHover={{
          scale: 1.05,
          backgroundColor: isDarkMode ? "#4338ca" : "#3730a3",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={handleButtonClick}
      >
        View all Wallet
        <span className="ml-2">→</span>
        <motion.div
          className="absolute inset-0 bg-white opacity-50"
          initial={{ scale: 0 }}
          animate={isButtonClicked ? { scale: 2, opacity: 0 } : { scale: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
      <WalletList
        isDarkMode={isDarkMode}
        solWalletLength={solWalletLength}
        wallets={[...allSolWallet, ...allEtherWallet]}
        isOpen={showWalletList}
        onClose={() => setShowWalletList(false)}
      />
    </div>
  );
};

ViewAllButton.propTypes = {
  solWalletLength: PropTypes.arrayOf(PropTypes.any),
  allSolWallet: PropTypes.arrayOf(PropTypes.any),
  allEtherWallet: PropTypes.arrayOf(PropTypes.any),
  isDarkMode: PropTypes.bool,
};

export default ViewAllButton;
