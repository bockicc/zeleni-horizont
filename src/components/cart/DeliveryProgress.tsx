import React from 'react';
import { Truck } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';

interface DeliveryProgressProps {
  readonly totalPrice: number;
  readonly threshold?: number;
}

export function DeliveryProgress({ totalPrice, threshold = 8000 }: DeliveryProgressProps): React.JSX.Element {
  const remaining = Math.max(0, threshold - totalPrice);
  const progress = Math.min(100, Math.round((totalPrice / threshold) * 100));
  const unlocked = remaining === 0;

  return (
    <div className="rounded-xl border border-sage-200 bg-sage-50/60 p-3">
      <div className="flex items-start gap-2">
        <Truck className="mt-0.5 h-4 w-4 text-forest" aria-hidden="true" />
        <div className="flex-1">
          <p className="text-sm font-medium text-charcoal">
            {unlocked
              ? 'Ostvarili ste besplatnu dostavu!'
              : `Dodajte još ${formatPrice(remaining)} za besplatnu dostavu.`}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-sage-200">
            <div
              className="h-full rounded-full bg-forest transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
