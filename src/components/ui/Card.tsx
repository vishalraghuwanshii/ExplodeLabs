import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-6 transition-all duration-200',
        hoverEffect && 'hover:border-[#333333] hover:bg-[#131313]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
