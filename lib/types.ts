export interface Creator {
  address: string;
  avatar?: string;
  bio?: string;
  username?: string;
  totalEarnings: bigint;
}

export interface Post {
  id: string;
  creator: string;
  content: string;
  image?: string;
  timestamp: number;
  mintCount: number;
  boostCount: number;
  isMinted?: boolean;
  isBoosted?: boolean;
}

export interface TabType {
  value: 'trending' | 'new' | 'boosted';
  label: string;
}
