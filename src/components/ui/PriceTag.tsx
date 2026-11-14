import React from 'react';
import { formatPrice } from '../../utils/formatPrice';

interface PriceTagProps {
  readonly priceRsd: number;
  readonly oldPriceRsd?: number;
  readonly size?: 'sm' | 'md';
}

export function PriceTag({ priceRsd, oldPriceRsd, size = 'md' }: PriceTagProps): React.JSX.Element {
  return (
    <div className="flex items-end gap-2">
      <span className={`${size === 'md' ? 'text-lg' : 'text-base'} font-semibold text-forest-dark`}>
        {formatPrice(priceRsd)}
      </span>
      {typeof oldPriceRsd === 'number' ? (
        <span className="text-sm text-muted line-through">{formatPrice(oldPriceRsd)}</span>
      ) : null}
    </div>
  );
}
