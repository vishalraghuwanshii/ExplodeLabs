import React from 'react';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'left',
  className
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl', className)}>
      {badge && (
        <div className="mb-3">
          <Badge variant="orange">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f5f5f0] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#8e8e93] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
