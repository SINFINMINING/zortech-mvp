'use client';

import React from 'react';
import clsx from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, maxLength, className, value, ...props }, ref) => {
    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-white">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            maxLength={maxLength}
            value={value}
            className={clsx(
              'w-full px-4 py-3 rounded-lg bg-secondary border-2 border-tertiary text-white placeholder-gray-500',
              'focus:outline-none focus:border-primary transition-colors resize-none',
              error && 'border-red-500',
              className
            )}
            {...props}
          />
          {maxLength && (
            <div className="absolute bottom-2 right-3 text-xs text-gray-500">
              {currentLength}/{maxLength}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
