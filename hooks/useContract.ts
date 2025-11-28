"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { parseEther, formatEther } from "viem"
import { contractABI, contractAddress } from "@/lib/contract"

export const useLotteryContract = () => {
  const { address } = useAccount()

  const { data: balance, refetch: refetchBalance } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getBalance",
  })

  const { data: players, refetch: refetchPlayers } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getPlayerCount",
  })

  const { data: owner } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "owner",
  })

  const { writeContractAsync, data: hash, isPending, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isConfirmed) {
      refetchBalance()
      refetchPlayers()
    }
  }, [isConfirmed, refetchBalance, refetchPlayers])

  const enterLottery = async (amount: string) => {
    await writeContractAsync({
      address: contractAddress,
      abi: contractABI,
      functionName: "enter",
      value: parseEther(amount),
    })
  }

  const pickWinner = async () => {
    await writeContractAsync({
      address: contractAddress,
      abi: contractABI,
      functionName: "pickWinner",
    })
  }

  return {
    data: {
      balance: balance ? formatEther(balance as bigint) : "0",
      players: players ? Number(players as bigint) : 0,
      owner: owner as string | undefined,
    },
    actions: {
      enterLottery,
      pickWinner,
    },
    state: {
      isLoading: isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}
