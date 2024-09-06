// WalletItem.jsx
import { useState } from "react";
import NotificationBar from "../NotificationBar";
import KeyInput from "./KeyInput";
import PropTypes from "prop-types";

const WalletItem = ({ solWalletLength, isDarkMode, wallet, index }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] =
    useState("Nothing Copied");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowNotification(true);
  };
  console.log(solWalletLength);
  const handleCloseNotification = () => setShowNotification(false);
  const timer = 4;

  // const togglePrivateKeys = () => setShowPrivate((prev) => !prev);

  return (
    <div
      className={`mb-4 p-4
    
            ${
              isDarkMode
                ? "border-gray-700 bg-gray-800"
                : "border-gray-300 bg-white"
            }

    
    rounded-lg shadow-md`}
    >
      <h3 className="text-xl font-semibold mb-2">
        {index + 1 > solWalletLength ? (
          <>Ethereum Wallet {index + 1 - solWalletLength}</>
        ) : (
          <>Solana Wallet {index + 1}</>
        )}
      </h3>
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
      </div>

      {showNotification && (
        <NotificationBar
          message={notificationMessage}
          timer={timer}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

WalletItem.propTypes = {
  solWalletLength: PropTypes.arrayOf(PropTypes.any),
  index: PropTypes.number,
  wallet: PropTypes.arrayOf(PropTypes.any),
  isDarkMode: PropTypes.bool,
};

export default WalletItem;
