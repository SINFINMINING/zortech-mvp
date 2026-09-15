'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SuccessAnimationProps {
  isVisible: boolean;
  message?: string;
}

export const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
  isVisible,
  message = 'Success! 🎉',
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.5 }}
          transition={{ duration: 0.4, type: 'spring' }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-green-500/20 border-2 border-green-500 rounded-lg px-6 py-4 backdrop-blur-sm flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="text-green-400 text-2xl"
            >
              ✓
            </motion.div>
            <span className="text-green-400 font-semibold">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
