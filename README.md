# 🎰 Simple Lottery Smart Contract (Flare / Coston2)

## 📍 Contract Address  
**0x5A307f88eD61084b6b8AF949005a59C19a333787**  
Explorer Link:  
https://coston2-explorer.flare.network/address/0x5A307f88eD61084b6b8AF949005a59C19a333787

---

## 📘 Project Description

This project implements a **simple decentralized lottery system** deployed on the **Flare (Coston2) test network**.  
Participants can enter the lottery by sending a minimum amount of FLR tokens. Once enough participants have joined, the contract owner can pick a random winner who receives the entire contract balance.

This contract demonstrates core blockchain concepts:

- Accepting native token value in smart contracts  
- Handling arrays of participant addresses  
- Basic pseudo-random winner selection  
- Owner-only access control  
- Secure value transfer  
- Frontend integration with wagmi + viem  

The UI allows users to:

- Join the lottery  
- View the current prize pool  
- View the number of participants  
- (Owner only) pick a winner  

---

## 💡 What It Does

- Accepts FLR deposits from players who want to join the lottery  
- Tracks all participants' wallet addresses  
- Lets the **contract owner** invoke a winner selection  
- Picks a pseudo-random winner using `keccak256`  
- Transfers the entire contract balance to the selected winner  
- Allows reading:
  - Contract balance  
  - Total number of players  

---

## ✨ Features

### 🎟 Player Features
- Enter lottery with a simple transaction  
- View total players  
- View prize pool  

### 🛡 Owner Features
- Pick a random winner  
- Withdraw winnings to winner automatically  

### 🧩 Technical Features
- Deployed on **Flare Coston2 testnet**  
- Lightweight and gas-efficient  
- Clean, simple ABI  
- Full frontend integration using:
  - **wagmi**
  - **viem**
  - **React server components**

### 🖥 Frontend
- Wallet-gated interactions  
- Real-time contract state updates  
- Loading + pending state handling  
- Easy-to-use UI components  

---

## 🧠 How It Solves Problems

Traditional online lotteries are centralized, opaque, and prone to fraud.  
This project solves these issues by providing:

### ✔ Transparency  
All entries and the prize pool are publicly visible on-chain.

### ✔ Trustlessness  
The winner is selected algorithmically — no middlemen.

### ✔ Automation  
Funds are transferred automatically with no manual handling.

### ✔ Accessibility  
Anyone with a wallet can participate.

### ✔ Educational Value  
Helps developers understand:
- ETH/FLR value transfer  
- Smart contract ownership  
- Randomness limitations  
- Frontend ↔ contract integration  

---

## 📦 Use Cases

- DApp learning project  
- Blockchain education  
- Hackathon demo  
- Reference contract for testing value transfers  
- Demonstration of wallet-based participation systems  

---

If you want enhancements (secure randomness, multi-round support, leaderboard, or audited logic), feel free to request!
