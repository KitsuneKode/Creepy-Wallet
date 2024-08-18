import { useEffect, useState } from "react";
import "./App.css";

//           `PS: In Solana, the public key itself is used directly as the wallet
//     address without any further hashing or transformation. This is different
//     from some other blockchains (like Bitcoin or Ethereum), where the public
//     key undergoes additional hashing steps to create the final address. The
//     public key is usually encoded in Base58 format, which makes it shorter
//     and more human-readable. This Base58-encoded string is what you use as
//     the wallet address on the Solana network.`}
//       </h2>
//     </div>
//   );
// }

import ThemeSwitcher from "./components/ThemeSwitcher";
import GenerateMnemonics from "./components/GenerateMnemonics";
import KeyCardContainer from "./components/KeyCardContainer";
import ViewAllButton from "./components/AllWalletButton";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode by default
  const [mnemonic, setMnemonic] = useState("");
  const [clicks, setClicks] = useState(0);
  const [allSolWallet, setSolAllWallet] = useState([]);
  const [allEtherWallet, setEtherAllWallet] = useState([]);
  const [solWalletLength, setSolWalletLength] = useState(0);

  useEffect(() => {
    setClicks(0);
  }, [mnemonic]);

  useEffect(() => {
    setSolWalletLength(allSolWallet.length);
  }, [allSolWallet]);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-800"
      } min-h-screen transition-colors duration-300`}
    >
      <header className="p-4 flex justify-end">
        <img
          className="w-14 h-14 absolute top-2 left-6"
          src="./src/assets/bglessWallet.png"
          alt="Gemini Icon"
        />

        <ThemeSwitcher isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      </header>
      <main className="p-8 flex flex-col items-center">
        {/* <Grid isDarkMode={isDarkMode} /> */}
        <GenerateMnemonics
          isDarkMode={isDarkMode}
          mnemonic={mnemonic}
          setMnemonic={setMnemonic}
        />
        <KeyCardContainer
          isDarkMode={isDarkMode}
          mnemonic={mnemonic}
          setClicks={setClicks}
          clicks={clicks}
          allEtherWallet={allEtherWallet}
          allSolWallet={allSolWallet}
          setEtherAllWallet={setEtherAllWallet}
          setSolAllWallet={setSolAllWallet}
        />
        <ViewAllButton
          solWalletLength={solWalletLength}
          isDarkMode={isDarkMode}
          allEtherWallet={allEtherWallet}
          allSolWallet={allSolWallet}
        />
      </main>
    </div>
  );
};

export default App;
