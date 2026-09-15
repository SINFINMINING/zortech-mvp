'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatDate, shortenAddress } from '@/lib/utils';
import { Post } from '@/lib/types';

interface PostCardProps {
  post: Post;
  onMint?: (postId: string) => Promise<void>;
  onBoost?: (postId: string) => Promise<void>;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onMint,
  onBoost,
}) => {
  const [isMinting, setIsMinting] = useState(false);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isMinted, setIsMinted] = useState(post.isMinted || false);
  const [isBoosted, setIsBoosted] = useState(post.isBoosted || false);

  const handleMint = async () => {
    if (!onMint) return;
    setIsMinting(true);
    try {
      await onMint(post.id);
      setIsMinted(true);
    } catch (error) {
      console.error('Failed to mint:', error);
    } finally {
      setIsMinting(false);
    }
  };

  const handleBoost = async () => {
    if (!onBoost) return;
    setIsBoosting(true);
    try {
      await onBoost(post.id);
      setIsBoosted(true);
    } catch (error) {
      console.error('Failed to boost:', error);
    } finally {
      setIsBoosting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card hoverable>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold">
                {shortenAddress(post.creator, 2).charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {shortenAddress(post.creator)}
                </p>
                <p className="text-xs text-gray-400">
                  {formatDate(post.timestamp)}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <p className="text-white leading-relaxed">{post.content}</p>

          {/* Image */}
          {post.image && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden bg-tertiary">
              <Image
                src={post.image}
                alt="Post image"
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Stats */}
          <div className="flex gap-4 text-sm">
            <Badge variant="secondary" size="sm">
              🔥 {post.mintCount} Mints
            </Badge>
            <Badge variant="secondary" size="sm">
              ⚡ {post.boostCount} Boosts
            </Badge>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button
              variant={isMinted ? 'secondary' : 'primary'}
              size="sm"
              className="flex-1"
              onClick={handleMint}
              isLoading={isMinting}
              disabled={isMinting || isBoosting}
            >
              {isMinted ? '✓ Minted' : '🎨 Mint Post'}
            </Button>
            <Button
              variant={isBoosted ? 'secondary' : 'outline'}
              size="sm"
              className="flex-1"
              onClick={handleBoost}
              isLoading={isBoosting}
              disabled={isBoosting || isMinting}
            >
              {isBoosted ? '✓ Boosted' : '⚡ Boost'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1"
              onClick={() => {
                const text = `Check out this post on ZORtech: "${post.content}" by ${shortenAddress(post.creator)}`;
                navigator.clipboard.writeText(text);
              }}
            >
              📤 Share
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
