import {
  Connection,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
  PublicKey,
  Keypair,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

import pkg from "bs58";
import { solBalance } from "./balance.js";
const { decode } = pkg;

const connection = new Connection(
  "https://solana-devnet.g.alchemy.com/v2/7ZqHHHCbJtNgLU6XWFl4mUjLbwkyPenB",
  "confirmed"
);

const key = "Senders Key in base58";
const secret = decode(key);
// console.log(secret);

// console.log(JSON.stringify(Array.from(secret)));

const sendersKeypair = Keypair.fromSecretKey(secret);

// console.log(sendersKeypair);

const sender = sendersKeypair.publicKey;
const recipient = new PublicKey("Recipents Public Key");
let amount = 0.1;
const LAMPORTS_TO_SEND = amount * LAMPORTS_PER_SOL;

const transaction = new Transaction();
const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender,
  toPubkey: recipient,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  sendersKeypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${recipient}. `
);
console.log(`Transaction signature is ${signature}!`);

solBalance();
