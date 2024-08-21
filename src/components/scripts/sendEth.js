import { parseEther, Wallet } from "ethers";
import { JsonRpcProvider } from "ethers";
import { ethBalance } from "./balance.js";

const provider = new JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/7ZqHHHCbJtNgLU6XWFl4mUjLbwkyPenB"
);

const signer = new Wallet("Senders Secret Key").connect(provider);

const tx = await signer.sendTransaction({
  to: "Recievers Public",
  value: parseEther("0.001"),
});

console.log("Mining transaction...");
console.log(`https://sepolia.etherscan.io/tx/${tx.hash}`);
// Waiting for the transaction to be mined
const receipt = await tx.wait();
// The transaction is now on chain!
console.log(`Mined in block ${receipt.blockNumber}`);

(async () => ethBalance())();
