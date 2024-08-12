import { useEffect, useState } from "react";
import "./App.css";

import { generateRandom, getSolWallet } from "./Wallets/solana";

import { getEtherWallet } from "./Wallets/ethers";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [solWallet, setSolWallet] = useState("");
  const [etherWallet, setEtherWallet] = useState("");
  const [clicks, setClicks] = useState(0);
  const [allSolWallet, setSolAllWallet] = useState(new Array());
  const [allEtherWallet, setEtherAllWallet] = useState(new Array());

  useEffect(() => {
    setClicks(0);
    setSolAllWallet([]);
    setEtherAllWallet([]);
    setSolWallet("");
    setEtherWallet("");
  }, [mnemonic]);

  return (
    <div>
      <h1>Generate Mnemonics</h1>
      <button
        onClick={async () => {
          const newMnemonic = await generateRandom();
          setMnemonic(newMnemonic);
          // console.log(mnemonic);
        }}
      >
        Generate
      </button>
      <h3>Mnemonics: </h3>
      <p>{mnemonic}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h1>Generate Sol Wallet</h1>
          <button
            onClick={async () => {
              setClicks(clicks + 1);
              const newWallet = getSolWallet(mnemonic, clicks);
              setSolWallet(newWallet[1]);
              const totalWallet = [...allSolWallet, newWallet];
              setSolAllWallet(totalWallet);
              // console.log(newWallet[0]);
            }}
          >
            Generate
          </button>

          <h3>Wallet address: </h3>
          <span></span>
          {solWallet}

          <h2>All Sol Wallets</h2>
          <ul>
            {Array.isArray(allSolWallet) &&
              allSolWallet.map((wallet) =>
                wallet.map((key, index) => (
                  <li key={`${index}`}>
                    {index === 0 ? (
                      <span>
                        <b>Private key</b>: {key}
                      </span>
                    ) : (
                      <span>
                        <b>Public key</b>: {key}
                      </span>
                    )}
                  </li>
                ))
              )}
          </ul>
        </div>

        <div>
          <h1>Generate Ether Wallet</h1>
          <button
            onClick={async () => {
              setClicks(clicks + 1);
              const newWallet = getEtherWallet(mnemonic, clicks);
              setEtherWallet(newWallet[2]);
              const totalWallet = [...allEtherWallet, newWallet];
              setEtherAllWallet(totalWallet);
              // console.log(newWallet[0]);
            }}
          >
            Generate
          </button>

          <h3>Wallet address: </h3>
          <span></span>
          {etherWallet}

          <h2>All Ether Wallets</h2>
          <ul>
            {Array.isArray(allEtherWallet) &&
              allEtherWallet.map((wallet, walletIndex) =>
                wallet.map((key, index) => (
                  <li key={`${walletIndex}-${index}`}>
                    {index === 0 ? (
                      <span>
                        <b>Private key</b>: {key}
                      </span>
                    ) : index === 1 ? (
                      <span>
                        <b>Public key</b>: {key}
                      </span>
                    ) : null}
                  </li>
                ))
              )}
          </ul>
        </div>
      </div>

      <h3 className={`disclaimer${clicks === 0 ? "" : "-inactive"}`}>
        {clicks === 0 &&
          `Currently no design/Css is implement,Will work on some design and add a section for toggle between ethereum wallet an sol wallet`}
        Any and every help will be appreciated
      </h3>

      <h2 className={`disclaimer${clicks === 1 ? "" : "-inactive"}`}>
        {clicks === 1 &&
          `PS: In Solana, the public key itself is used directly as the wallet
    address without any further hashing or transformation. This is different
    from some other blockchains (like Bitcoin or Ethereum), where the public
    key undergoes additional hashing steps to create the final address. The
    public key is usually encoded in Base58 format, which makes it shorter
    and more human-readable. This Base58-encoded string is what you use as
    the wallet address on the Solana network.`}
      </h2>
    </div>
  );
}

export default App;
