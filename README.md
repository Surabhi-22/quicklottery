<<<<<<< HEAD
# 🎰 Simple Lottery Smart Contract (Flare / Coston2)

## 📍 Contract Address  
**0x5A307f88eD61084b6b8AF949005a59C19a333787** 

Explorer Link:  
https://coston2-explorer.flare.network/address/0x5A307f88eD61084b6b8AF949005a59C19a333787
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/87574022-f4a7-4b1c-8dbe-315b755e4548" />

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
=======
# 🎰 Simple Lottery Smart Contract

A beginner-friendly smart contract built in Solidity that demonstrates how a basic on-chain lottery works.  
Users can enter by sending a small amount of ETH, and the contract owner can randomly pick a winner who receives the entire contract balance.

This project is perfect for beginners exploring Ethereum, Flare, smart contract development, and blockchain fundamentals.

---

## 🚀 Project Description

The **SimpleLottery** contract allows multiple participants to enter a lottery by paying a minimum entry fee.  
After people join, the contract owner can execute a function to select a random winner using basic blockchain properties.

This project helps you learn:

- Accepting ETH in a smart contract  
- Using dynamic arrays  
- Restricting access to certain functions  
- Generating pseudo-random numbers  
- Sending ETH from contracts  
- Building secure and readable Solidity code  

---

## 🎯 What It Does

- Lets users join the lottery by sending **≥ 0.001 ETH**
- Stores all player addresses on-chain
- Allows only the **owner** to pick the winner
- Picks a winner pseudo-randomly
- Sends the **entire contract balance** to the winner
- Allows anyone to check:
  - total number of players
  - the contract balance
>>>>>>> de35daf0cd3af545fda18210a38279ecc762e219

---

## ✨ Features

<<<<<<< HEAD
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
=======
✔ **Easy-to-read beginner-friendly Solidity code**  
✔ **Safe owner-only access for winner selection**  
✔ **Straightforward ETH handling**  
✔ **Pseudo-random winner selection**  
✔ **Deployable on Remix, Hardhat, Foundry, or Flare networks**  
✔ **Perfect for learning and demo projects**  

---

## 🔗 Deployed Smart Contract

👉 **Deployed Transaction Link:**  
https://coston2-explorer.flare.network//tx/0x7cd05f73f33d090c7facd7e9feca8b069d03a7376160159b252641db5da6d70a

👉 **Contract Address:**  
`XXX`

(Replace this placeholder with your contract address once deployed.)

---

## 📄 Smart Contract Code

```solidity
//paste your code
# quicklottery
>>>>>>> de35daf0cd3af545fda18210a38279ecc762e219
