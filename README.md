# Crypto-Wallet Generator

 This project is a React application designed to generate cryptocurrency wallets for both Solana and Ethereum. It leverages mnemonic phrases to create wallets and display their private and public keys.

# LiveLinks
[Creepy-Wallet](https://kitsunekode-creepy-wallet-sand.vercel.app/)

# Pictures



## Features

- Generate random mnemonic phrases.
- Generate Solana wallets using a mnemonic phrase.
- Generate Ethereum wallets using a mnemonic phrase.
- Display private and public keys for the generated wallets.

## Installation

1. **Clone the repository:**

   ```bash
         git clone https://github.com/kitsunekode/Crypto-Wallet
         cd Web3-Wallet  
   ```
2. **Install dependecies:**

```bash
      npm install

```
3 **Start development server:**

```bash
      npm run dev

```

## Usage
- Open the application in your browser at http://localhost:3000.
- Click the "Generate" button to generate a new wallet.
- The application will display the private and public keys for the generated wallet.


## Project Structure
-src/: Contains the source code for the React application.
-App.jsx: Main component that handles wallet generation and displays the keys.
-solana.js: Contains functions for generating Solana wallets.
-ethereum.js: Contains functions for generating Ethereum wallets.
-index.js: Entry point for the React application.
