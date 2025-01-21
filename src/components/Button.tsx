import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-[#FF6B6B] text-white hover:bg-[#ff5252] focus-visible:ring-[#FF6B6B] shadow-lg hover:shadow-xl':
            variant === 'primary',
          'bg-[#006D77] text-white hover:bg-[#005a63] focus-visible:ring-[#006D77] shadow-lg hover:shadow-xl':
            variant === 'secondary',
          'border-2 border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white shadow-md hover:shadow-lg':
            variant === 'outline',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
          'animate-pulse': loading,
        },
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}