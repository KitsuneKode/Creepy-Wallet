import { useEffect, useState } from "react";
import "./App.css";

// import { generateRandom, getSolWallet } from "./scripts/solana";

// import { getEtherWallet } from "./scripts/ether";
// import Grid from "./components/Grid";

// function App() {
//   const [mnemonic, setMnemonic] = useState("");

//   return (
//     <div>
//       <h1>Generate Mnemonics</h1>
//       <Grid></Grid>
//       <button
//         onClick={async () => {
//           const newMnemonic = await generateRandom();
//           setMnemonic(newMnemonic);
//           // console.log(mnemonic);
//         }}
//       >
//         Generate
//       </button>
//       <h3>Mnemonics: </h3>
//       <p>{mnemonic}</p>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div>
//           <h1>Generate Sol Wallet</h1>
//           <button
//             onClick={async () => {
//               if (mnemonic === "") {
//                 return;
//               }
//               setClicks(clicks + 1);
//               const newWallet = getSolWallet(mnemonic, clicks);
//               setSolWallet(newWallet[1]);
//               const totalWallet = [...allSolWallet, newWallet];
//               setSolAllWallet(totalWallet);
//               // console.log(newWallet[0]);
//             }}
//           >
//             Generate
//           </button>

//           <h3>Wallet address: </h3>
//           <span></span>
//           {solWallet}

//           <h2>All Sol Wallets</h2>
//           <ul>
//             {Array.isArray(allSolWallet) &&
//               allSolWallet.map((wallet, walletIndex) => (
//                 <div key={walletIndex}>
//                   <h3>Wallet {walletIndex + 1}</h3>
//                   <ul>
//                     {wallet.map((key, index) => (
//                       <li key={`${walletIndex}-${index}`}>
//                         {index === 0 ? (
//                           <span>
//                             <b>Private key</b>: {key}
//                           </span>
//                         ) : (
//                           <span>
//                             <b>Public key</b>: {key}
//                           </span>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//           </ul>
//         </div>

//         <div>
//           <h1>Generate Ether Wallet</h1>
//           <button
//             onClick={async () => {
//               if (mnemonic === "") {
//                 return;
//               }

//               setClicks(clicks + 1);

//               const newWallet = getEtherWallet(mnemonic, clicks);
//               setEtherWallet(newWallet[2]);
//               const totalWallet = [...allEtherWallet, newWallet];
//               setEtherAllWallet(totalWallet);
//               // console.log(newWallet[0]);
//             }}
//           >
//             Generate
//           </button>

//           <h3>Wallet address: </h3>
//           <span></span>
//           {etherWallet}

//           <h2>All Ether Wallets</h2>
//           <ul>
//             {Array.isArray(allEtherWallet) &&
//               allEtherWallet.map((wallet, walletIndex) => (
//                 <div key={walletIndex}>
//                   <h3>Wallet {walletIndex + 1}</h3>
//                   <ul>
//                     {wallet.map((key, index) => (
//                       <li key={`${walletIndex}-${index}`}>
//                         {index === 0 ? (
//                           <span>
//                             <b>Private key</b>: {key}
//                           </span>
//                         ) : index === 1 ? (
//                           <span>
//                             <b>Public key</b>: {key}
//                           </span>
//                         ) : (
//                           <span>
//                             <b>Address</b>: {key}
//                           </span>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//           </ul>
//         </div>
//       </div>

//       <h3 className={`disclaimer${clicks === 0 ? "" : "-inactive"}`}>
//         {clicks === 0 &&
//           `Currently no design/Css is implement,Will work on some design and add a section for toggle between ethereum wallet an sol wallet`}
//         Any and every help will be appreciated
//       </h3>

//       <h2 className={`disclaimer${clicks === 1 ? "" : "-inactive"}`}>
//         {clicks === 1 &&
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

// export default App;

// App.js
// App.js
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
  });
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-800"
      } min-h-screen transition-colors duration-300`}
    >
      <header className="p-4 flex justify-end">
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
