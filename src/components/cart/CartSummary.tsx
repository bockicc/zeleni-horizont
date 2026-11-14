import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../ui/Button';
import { DeliveryProgress } from './DeliveryProgress';

interface CartSummaryProps {
  readonly totalPrice: number;
  readonly onCheckout: () => void;
}

export function CartSummary({ totalPrice, onCheckout }: CartSummaryProps): React.JSX.Element {
  return (
    <div className="border-t border-sage-200 bg-white p-5">
      <DeliveryProgress totalPrice={totalPrice} />
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center justify-between text-muted">
          <span>Međuzbir</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex items-center justify-between text-muted">
          <span>Isporuka</span>
          <span>{totalPrice >= 8000 ? 'Besplatna' : 'Po dogovoru'}</span>
        </div>
        <div className="flex items-center justify-between border-t border-sage-200 pt-2 text-base font-semibold text-forest-dark">
          <span>Ukupno</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted">Ovo je demo prikaz bez online plaćanja.</p>
      <div className="mt-4">
        <Button variant="secondary" fullWidth size="lg" onClick={onCheckout}>
          Nastavi na plaćanje
        </Button>
      </div>
    </div>
  );
}
