// Mock data for development - replace with real API calls in production

export const mockPosts = [
  {
    id: '1',
    creator: '0x1234567890123456789012345678901234567890',
    content: 'Just launched my new digital artwork series! Check it out 🎨',
    image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=600&h=400&fit=crop',
    timestamp: Math.floor(Date.now() / 1000) - 3600,
    mintCount: 142,
    boostCount: 89,
  },
  {
    id: '2',
    creator: '0x0987654321098765432109876543210987654321',
    content: 'Excited to announce my upcoming collaboration with amazing creators! 🚀',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    timestamp: Math.floor(Date.now() / 1000) - 7200,
    mintCount: 256,
    boostCount: 134,
  },
  {
    id: '3',
    creator: '0x1111111111111111111111111111111111111111',
    content: 'NFT drops are live! Limited edition pieces available now 💎',
    image: 'https://images.unsplash.com/photo-1578375092433-30289decede0?w=600&h=400&fit=crop',
    timestamp: Math.floor(Date.now() / 1000) - 10800,
    mintCount: 512,
    boostCount: 298,
  },
];

export const mockCreators = [
  {
    address: '0x1234567890123456789012345678901234567890',
    avatar: 'https://i.pravatar.cc/150?img=1',
    username: 'artista',
    bio: 'Digital artist and NFT creator | Web3 enthusiast',
    totalEarnings: BigInt('1500000000000000000'),
  },
  {
    address: '0x0987654321098765432109876543210987654321',
    avatar: 'https://i.pravatar.cc/150?img=2',
    username: 'creator_pro',
    bio: 'Content creator | Building amazing communities',
    totalEarnings: BigInt('2300000000000000000'),
  },
];
