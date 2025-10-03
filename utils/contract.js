// utils/contract.js
import { client } from './client'
import { abi } from './abi'
import { createWalletClient, custom } from 'viem'
import { sepolia } from 'viem/chains'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

// Read message
export async function getMessage() {
  return await client.readContract({
    address: contractAddress,
    abi,
    functionName: 'getMessage',
  })
}

// Write message (requires MetaMask)
export async function setMessage(newMessage) {
  if (!window.ethereum) throw new Error('MetaMask not found')

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum),
  })

  // Request account access
  const [account] = await walletClient.requestAddresses()

  // Send transaction
  return await walletClient.writeContract({
    account,
    address: contractAddress,
    abi,
    functionName: 'setMessage',
    args: [newMessage],
  })
}
