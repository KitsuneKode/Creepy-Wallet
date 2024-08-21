import KeyCard from "./ui/WalletCard";
import { useState } from "react";
import PropTypes from "prop-types";

const KeyCardContainer = ({
  isDarkMode,
  mnemonic,
  allEtherWallet,
  allSolWallet,
  setSolAllWallet,
  setEtherAllWallet,
}) => {
  const [solClicks, setSolClicks] = useState(0);
  const [etherClicks, setEtherClicks] = useState(0);

  return (
    <div className={`p-6 rounded-lg w-full max-w-screen-lg mx-auto`}>
      <div className="flex flex-wrap justify-between items-start mb-2">
        <KeyCard
          mnemonic={mnemonic}
          clicks={solClicks}
          setClicks={setSolClicks}
          allSolWallet={allSolWallet}
          setSolAllWallet={setSolAllWallet}
          direction="left"
          isDarkMode={isDarkMode}
          handleClick="SOL"
        />
        <KeyCard
          mnemonic={mnemonic}
          clicks={etherClicks}
          setClicks={setEtherClicks}
          allEtherWallet={allEtherWallet}
          setEtherAllWallet={setEtherAllWallet}
          direction="right"
          isDarkMode={isDarkMode}
          handleClick="ETHER"
        />
      </div>
    </div>
  );
};

KeyCardContainer.propTypes = {
  mnemonic: PropTypes.string,
  setSolAllWallet: PropTypes.func,
  setEtherAllWallet: PropTypes.func,
  solWalletLength: PropTypes.arrayOf(PropTypes.any),
  allSolWallet: PropTypes.arrayOf(PropTypes.any),
  allEtherWallet: PropTypes.arrayOf(PropTypes.any),
  isDarkMode: PropTypes.bool,
};
export default KeyCardContainer;
