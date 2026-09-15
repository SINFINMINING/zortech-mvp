'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface TabItem {
  value: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="border-b border-tertiary">
      <div className="flex gap-8">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => onTabChange(item.value)}
            className={clsx(
              'py-4 font-medium text-sm transition-colors relative',
              activeTab === item.value
                ? 'text-primary'
                : 'text-gray-400 hover:text-white'
            )}
          >
            {item.label}
            {activeTab === item.value && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: 'spring', duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
