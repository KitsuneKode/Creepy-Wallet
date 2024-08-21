import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSolWallet } from "../scripts/solana.js";
import { getEtherWallet } from "../scripts/ether.js";
import PropTypes from "prop-types";
import NotificationBar from "../NotificationBar.jsx";
import KeyInput from "./KeyInput.jsx";

const KeyCard = ({
  mnemonic,
  clicks,
  setClicks,
  allSolWallet,
  allEtherWallet,
  setSolAllWallet,
  setEtherAllWallet,
  direction,
  isDarkMode,
  handleClick,
}) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("Null Copied");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [wallet, setWallet] = useState("");
  const timer = 4;

  useEffect(() => {
    setWallet("");
  }, [mnemonic]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowNotification(true);
  };
  const handleCloseNotification = () => setShowNotification(false);

  const handleButtonClick = async () => {
    setIsButtonClicked(true);
    if (mnemonic === "") {
      return;
    }
    if (handleClick === "SOL") {
      setClicks(clicks + 1);
      const newWallet = getSolWallet(mnemonic, clicks);
      setWallet(newWallet);
      const totalWallet = [...allSolWallet, newWallet];
      setSolAllWallet(totalWallet);
      // console.log(wallet);
    }

    if (handleClick === "ETHER") {
      setClicks(clicks + 1);

      const newWallet = getEtherWallet(mnemonic, clicks);
      setWallet(newWallet);
      const totalWallet = [...allEtherWallet, newWallet];
      setEtherAllWallet(totalWallet);
      // console.log(wallet);
    }
    setTimeout(() => setIsButtonClicked(false), 200);
  };

  const glowColor =
    direction === "left" ? "rgba(255, 204, 0, 0.5)" : "rgba(0, 191, 255, 0.5)";
  const borderColor =
    direction === "left" ? "rgba(255, 204, 0, 1)" : "rgba(0, 191, 255, 1)";

  return (
    <motion.div
      className={`rounded-xl border ${
        isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"
      } p-6 w-full md:w-5/12 my-8 relative`}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      whileHover={{
        boxShadow: `0 0 20px ${glowColor}`,
        transition: { duration: 0.3 },
        borderColor: borderColor,
      }}
    >
      <motion.button
        className={`w-full bg-cream text-gray-800 py-2 px-4 rounded-lg mb-6 font-medium relative overflow-hidden ${
          isButtonClicked ? "ring-2 ring-blue-400" : ""
        }`}
        style={{ backgroundColor: "#F2E8CF" }}
        whileHover={{ scale: 1.05, backgroundColor: "#E8D8B7" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={handleButtonClick}
      >
        Generate {handleClick == "SOL" ? "SOLANA" : "ETHERIUM"} Wallet
        <motion.div
          className="absolute inset-0 bg-blue-400 opacity-50"
          initial={{ scale: 0 }}
          animate={isButtonClicked ? { scale: 2, opacity: 0 } : { scale: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <div className="space-y-4">
        <KeyInput
          label="Adresss"
          value={wallet[1]}
          isDarkMode={isDarkMode}
          onCopy={() => {
            copyToClipboard(wallet[1]);
            setNotificationMessage("Wallet Address copied");
          }}
        />
        <KeyInput
          label="Private Key"
          value={wallet[0]}
          isDarkMode={isDarkMode}
          type={showPrivateKey ? "text" : "password"}
          onCopy={() => {
            copyToClipboard(wallet[0]);
            setNotificationMessage("Private Key Copied");
          }}
          onToggleShow={() => {
            setShowPrivateKey(!showPrivateKey);
          }}
          showToggle={true}
        />
        {showNotification && (
          <NotificationBar
            message={notificationMessage}
            timer={timer}
            onClose={handleCloseNotification}
          />
        )}
      </div>
    </motion.div>
  );
};

KeyCard.propTypes = {
  mnemonic: PropTypes.string,
  direction: PropTypes.string,
  setClicks: PropTypes.func,
  setSolAllWallet: PropTypes.func,
  setEtherAllWallet: PropTypes.func,
  handleClick: PropTypes.string,
  clicks: PropTypes.number,
  allSolWallet: PropTypes.arrayOf(PropTypes.any),
  allEtherWallet: PropTypes.arrayOf(PropTypes.any),
  isDarkMode: PropTypes.bool,
};
export default KeyCard;
