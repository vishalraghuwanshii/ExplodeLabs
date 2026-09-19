import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'orange' | 'outline' | 'subtle';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-[#1a1a1a] text-[#f5f5f0] border border-[#2a2a2a]',
    orange: 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/25',
    outline: 'bg-transparent text-[#a1a1aa] border border-[#262626]',
    subtle: 'bg-[#141414] text-[#8e8e93] border-none'
  };

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium tracking-normal rounded-md transition-colors',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
