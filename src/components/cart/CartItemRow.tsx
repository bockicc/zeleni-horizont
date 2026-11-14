import React from 'react';
import { Trash2 } from 'lucide-react';
import type { CartItem } from '../../types';
import { formatPrice } from '../../utils/formatPrice';
import { QuantitySelector } from '../ui/QuantitySelector';
import { PlantImage } from '../product/PlantImage';

interface CartItemRowProps {
  readonly item: CartItem;
  readonly onIncrement: (plantId: string) => void;
  readonly onDecrement: (plantId: string) => void;
  readonly onRemove: (plantId: string) => void;
}

export function CartItemRow({ item, onIncrement, onDecrement, onRemove }: CartItemRowProps): React.JSX.Element {
  const lineTotal = item.plant.priceRsd * item.quantity;
  return (
    <li className="flex gap-4 py-4">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-sage-200 bg-sage-50">
        <PlantImage src={item.plant.image} alt={`${item.plant.name} u korpi`} className="h-full w-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-forest-dark">{item.plant.name}</p>
            <p className="truncate text-xs italic text-muted">{item.plant.latinName}</p>
            <p className="mt-1 text-xs text-muted">{formatPrice(item.plant.priceRsd)} / kom</p>
          </div>
          <button
            type="button"
            onClick={() => onRemove(item.plant.id)}
            aria-label={`Ukloni biljku ${item.plant.name} iz korpe`}
            className="rounded-full p-1.5 text-muted transition hover:bg-sage-100 hover:text-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <QuantitySelector
            quantity={item.quantity}
            onDecrease={() => onDecrement(item.plant.id)}
            onIncrease={() => onIncrement(item.plant.id)}
            decreaseLabel={`Smanji količinu za ${item.plant.name}`}
            increaseLabel={`Povećaj količinu za ${item.plant.name}`}
            size="sm"
          />
          <p className="text-sm font-semibold text-charcoal">{formatPrice(lineTotal)}</p>
        </div>
      </div>
    </li>
  );
}
