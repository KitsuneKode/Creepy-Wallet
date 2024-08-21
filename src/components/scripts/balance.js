import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { formatEther, JsonRpcProvider } from "ethers";

export const solBalance = async () => {
  const connection = new Connection(
    "https://solana-devnet.g.alchemy.com/v2/7ZqHHHCbJtNgLU6XWFl4mUjLbwkyPenB"
  );
  const address = new PublicKey("7iMsaLXTeQ5aPyYpvEUxiK76V467ikSCGiSHrRx2kLRC");
  const balance = await connection.getBalance(address);

  console.log(
    `The balance of the account at ${address} is ${
      balance / LAMPORTS_PER_SOL
    } SOL`
  );
  console.log(`✅ Finished!`);
};

export const ethBalance = async () => {
  const provider = new JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/7ZqHHHCbJtNgLU6XWFl4mUjLbwkyPenB"
  );

  const balance = await provider.getBalance(
    "0xd4c68d0F16aa425BD5Ee1ed663e04cA01cB27Aa7",
    "latest"
  );

  const eth = formatEther(balance);
  console.log(eth);
};

// ethBalance();
