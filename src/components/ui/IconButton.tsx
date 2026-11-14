import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly label: string;
}

export function IconButton({ label, className = '', children, ...props }: IconButtonProps): React.JSX.Element {
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
