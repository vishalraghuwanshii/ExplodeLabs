import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  withArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md select-none group cursor-pointer disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-[#ff5500] text-white hover:bg-[#e04a00] active:scale-[0.98] shadow-sm shadow-[#ff5500]/20',
    secondary: 'bg-[#181818] text-[#f5f5f0] hover:bg-[#222222] border border-[#282828] active:scale-[0.98]',
    outline: 'bg-transparent text-[#f5f5f0] hover:bg-[#141414] border border-[#2a2a2a] hover:border-[#383838]',
    ghost: 'bg-transparent text-[#a1a1aa] hover:text-[#f5f5f0] hover:bg-[#141414]'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 text-current" />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    if (isExternal) {
      return (
        <a 
          href={href} 
          target={target || '_blank'} 
          rel={rel || 'noopener noreferrer'} 
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {content}
    </button>
  );
}
