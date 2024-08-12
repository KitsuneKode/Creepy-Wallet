import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";
import crypto from "crypto";

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// Function to generate a random mnemonic
export async function generateRandom() {
  return generateMnemonic();
}

// Generate mnemonic phrase and seed
// const mnemonicPhrase = generateMnemonic();

// Function to generate a wallet for a specific mneomnic
export function getSolWallet(mnemonicPhrase, clicks) {
  const seed = mnemonicToSeedSync(mnemonicPhrase);

  // Derive the private key using the derivation path
  const walletIndex = clicks; // Change this index for different accounts
  const path = `m/44'/501'/${walletIndex}'/0'`; // Solana's derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;

  // Generate the keypair
  const keypair = Keypair.fromSecretKey(
    Buffer.from(nacl.sign.keyPair.fromSeed(derivedSeed).secretKey)
  );

  // Extract the public and private keys
  const privateKey = Buffer.from(keypair.secretKey).toString("hex");
  const publicKey = keypair.publicKey.toBase58();

  // Hash the public key using SHA-256
  const hashedPublicKey = crypto
    .createHash("sha256")
    .update(keypair.publicKey.toBuffer())
    .digest("hex");

  //   async function hashPublicKey(publicKey) {
  //     const encoder = new TextEncoder();
  //     const data = encoder.encode(publicKey);
  //     const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  //     console.log(hashBuffer);
  //     return Buffer.from(hashBuffer).toString("hex");
  //   }

  //   // Usage:
  //   const hashedPublicKey = hashPublicKey(publicKey);

  // Print out the results
  //   console.log("Mnemonic Phrase:", mnemonicPhrase);
  console.log("Private Key:", privateKey);
  console.log("Public Key:", publicKey);
  //   console.log("Hashed Public Key (SHA-256):", hashedPublicKey);

  // You can also derive the wallet address from the public key (in Solana, the public key is typically the address)
  const walletDetails = [privateKey, publicKey];

  //   const keyValue
  //   console.log("Wallet Address:", walletAddress);
  return walletDetails;
}

// getWallet(mnemonicPhrase);
