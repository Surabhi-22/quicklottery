"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useLotteryContract } from "@/hooks/useContract"

const SampleIntegration = () => {
  const { isConnected, address } = useAccount()
  const [amount, setAmount] = useState("")

  const { data, actions, state } = useLotteryContract()

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground">
        Connect Wallet to continue.
      </div>
    )
  }

  const isOwner = data.owner?.toLowerCase() === address?.toLowerCase()

  return (
    <div className="min-h-screen bg-background p-6 max-w-xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Lottery Contract</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card p-4 border rounded-lg">
          <p className="text-xs text-muted-foreground">Contract Balance</p>
          <p className="text-xl font-semibold">{data.balance} FLR</p>
        </div>
        <div className="bg-card p-4 border rounded-lg">
          <p className="text-xs text-muted-foreground">Players</p>
          <p className="text-xl font-semibold">{data.players}</p>
        </div>
      </div>

      {/* Enter Lottery */}
      <div className="space-y-3">
        <input
          type="number"
          placeholder="Amount in FLR"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 bg-card border rounded-lg"
        />

        <button
          onClick={() => actions.enterLottery(amount)}
          disabled={state.isLoading || !amount}
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg"
        >
          {state.isLoading ? "Processing..." : "Enter Lottery"}
        </button>
      </div>

      {/* Pick Winner */}
      {isOwner && (
        <button
          onClick={actions.pickWinner}
          disabled={state.isLoading}
          className="w-full bg-destructive text-destructive-foreground py-2 rounded-lg"
        >
          {state.isLoading ? "Picking..." : "Pick Winner"}
        </button>
      )}

      {/* Status */}
      {state.hash && (
        <div className="bg-card p-4 border rounded-lg mt-4">
          <p className="text-xs text-muted-foreground">Transaction Hash</p>
          <p className="text-sm break-all">{state.hash}</p>
        </div>
      )}

      {state.error && (
        <div className="bg-card p-4 border border-destructive rounded-lg mt-4">
          <p className="text-sm text-destructive-foreground">{state.error.message}</p>
        </div>
      )}
    </div>
  )
}

export default SampleIntegration
