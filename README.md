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

---

## ✨ Features

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
