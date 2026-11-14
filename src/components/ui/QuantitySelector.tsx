import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  readonly quantity: number;
  readonly onDecrease: () => void;
  readonly onIncrease: () => void;
  readonly decreaseLabel: string;
  readonly increaseLabel: string;
  readonly size?: 'sm' | 'md';
}

export function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  decreaseLabel,
  increaseLabel,
  size = 'md',
}: QuantitySelectorProps): React.JSX.Element {
  const dimension = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';
  return (
    <div className="inline-flex items-center rounded-full border border-sage-200 bg-white p-1">
      <button
        type="button"
        onClick={onDecrease}
        aria-label={decreaseLabel}
        className={`${dimension} inline-flex items-center justify-center rounded-full text-forest transition hover:bg-sage-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest`}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-8 text-center text-sm font-semibold text-charcoal">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label={increaseLabel}
        className={`${dimension} inline-flex items-center justify-center rounded-full text-forest transition hover:bg-sage-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest`}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
