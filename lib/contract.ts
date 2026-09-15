export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_ZORTECH_CONTRACT_ADDRESS as `0x${string}`;

export const ZORTECH_ABI = [
  {
    inputs: [],
    name: 'mint',
    outputs: [{ type: 'uint256', name: 'postId' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'postId', type: 'uint256' }],
    name: 'boost',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'postId', type: 'uint256' }],
    name: 'getPostDetails',
    outputs: [
      { name: 'creator', type: 'address' },
      { name: 'timestamp', type: 'uint256' },
      { name: 'mintCount', type: 'uint256' },
      { name: 'boostCount', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'creator', type: 'address' },
      { indexed: false, name: 'postId', type: 'uint256' },
      { indexed: false, name: 'timestamp', type: 'uint256' },
    ],
    name: 'PostMinted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'booster', type: 'address' },
      { indexed: false, name: 'postId', type: 'uint256' },
    ],
    name: 'PostBoosted',
    type: 'event',
  },
] as const;
