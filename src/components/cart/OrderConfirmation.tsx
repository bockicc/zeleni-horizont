import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { CartItem } from '../../types';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../ui/Button';

interface OrderConfirmationProps {
  readonly orderNumber: string;
  readonly items: readonly CartItem[];
  readonly totalPrice: number;
  readonly onClose: () => void;
}

export function OrderConfirmation({ orderNumber, items, totalPrice, onClose }: OrderConfirmationProps): React.JSX.Element {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-5 py-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-forest">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-semibold text-forest-dark">Hvala na porudžbini!</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Vaša porudžbina je primljena. Kontaktiraćemo vas radi potvrde isporuke.
          </p>
          <p className="mt-4 inline-flex rounded-full bg-sage-100 px-4 py-1.5 text-sm font-semibold text-forest">
            Broj porudžbine: {orderNumber}
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-sage-200 bg-white p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-forest-dark">Pregled porudžbine</h4>
          <ul className="mt-3 divide-y divide-sage-200">
            {items.map((item) => (
              <li key={item.plant.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                <span className="text-charcoal">
                  {item.plant.name} <span className="text-muted">× {item.quantity}</span>
                </span>
                <span className="font-medium text-forest-dark">
                  {formatPrice(item.plant.priceRsd * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-sage-200 pt-3 text-base font-semibold text-forest-dark">
            <span>Ukupno</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted">Ovo je demo potvrda i ne predstavlja stvarnu porudžbinu.</p>
      </div>
      <div className="border-t border-sage-200 p-5">
        <Button variant="primary" fullWidth size="lg" onClick={onClose}>
          Nastavi kupovinu
        </Button>
      </div>
    </div>
  );
}
