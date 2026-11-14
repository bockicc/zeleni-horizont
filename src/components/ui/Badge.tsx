import React from 'react';

interface BadgeProps {
  readonly label: string;
  readonly tone?: 'accent' | 'sage';
  readonly className?: string;
}

export function Badge({ label, tone = 'sage', className = '' }: BadgeProps): React.JSX.Element {
  const toneClass =
    tone === 'accent'
      ? 'bg-accent-yellow/90 text-charcoal'
      : 'bg-sage-100 text-forest';
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneClass} ${className}`}>
      {label}
    </span>
  );
}
