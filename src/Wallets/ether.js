// import { ethers } from "ethers";
import { ethers } from "ethers";

import { generateMnemonic } from "bip39";

// import generateRandom from "./solana";
// // Function to generate a random mnemonic
// export async function generateRandom() {
//   return  ethers.Wallet.createRandom().mnemonic.phrase;
// }
function generateRandom() {
  return generateMnemonic();
}

const mnemonic = generateRandom();
// console.log(mnemonic);
// Function to generate a wallet for a specific mnemonic and index
export function getEtherWallet(mnemonicPhrase, clicks) {
  // Derive the wallet using the mnemonic and the index
  const walletIndex = clicks; // Change this index for different accounts
  const path = `m/44'/60'/${walletIndex}'/0/0`; // Ethereum's derivation path

  // Create an HDNode from the mnemonic

  const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonicPhrase);

  // Derive the wallet at the specified path
  const derivedNode = hdNode.derivePath(path);

  // Extract the private and public keys
  const privateKey = derivedNode.privateKey;
  const publicKey = derivedNode.publicKey;

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey);

  // Print out the results
  console.log("Mnemonic Phrase:", mnemonicPhrase);
  console.log("Private Key:", privateKey);
  console.log("Public Key:", publicKey);
  console.log("Address:", wallet.address);
  console.log(wallet.publicKey);

  // Return the wallet details
  const walletDetails = [privateKey, publicKey, wallet.address];
  return walletDetails;
}

getEtherWallet(mnemonic, 2);
