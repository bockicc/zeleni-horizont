import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import type { CartItem, CheckoutFormValues } from '../../types';
import { generateOrderNumber } from '../../utils/generateOrderNumber';
import { CartEmptyState } from './CartEmptyState';
import { CartItemRow } from './CartItemRow';
import { CartSummary } from './CartSummary';
import { CheckoutForm } from './CheckoutForm';
import { OrderConfirmation } from './OrderConfirmation';

interface CartDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

type DrawerView = 'cart' | 'checkout' | 'confirmation';

interface OrderSnapshot {
  readonly orderNumber: string;
  readonly items: readonly CartItem[];
  readonly totalPrice: number;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps): React.JSX.Element | null {
  const panelRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { items, totalCount, totalPrice, increment, decrement, removeItem, clearCart } = useCart();
  const [view, setView] = useState<DrawerView>('cart');
  const [order, setOrder] = useState<OrderSnapshot | null>(null);

  useBodyScrollLock(isOpen);
  useEscapeKey(isOpen, () => handleClose());
  useFocusTrap(isOpen, panelRef);

  if (!isOpen) return null;

  const handleClose = (): void => {
    setView('cart');
    onClose();
  };

  const handleCheckoutSubmit = (_values: CheckoutFormValues): void => {
    setOrder({ orderNumber: generateOrderNumber(), items, totalPrice });
    clearCart();
    setView('confirmation');
  };

  const handleFinish = (): void => {
    setView('cart');
    setOrder(null);
    onClose();
    navigate('/katalog');
  };

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm motion-safe:animate-fade-in" onClick={handleClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Korpa za kupovinu"
        tabIndex={-1}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl motion-safe:animate-slide-in-right"
      >
        {view === 'checkout' ? (
          <CheckoutForm onBack={() => setView('cart')} onSubmit={handleCheckoutSubmit} />
        ) : view === 'confirmation' && order ? (
          <OrderConfirmation
            orderNumber={order.orderNumber}
            items={order.items}
            totalPrice={order.totalPrice}
            onClose={handleFinish}
          />
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-sage-200 px-5 py-4">
              <div>
                <h2 className="text-xl font-semibold text-forest-dark">Vaša korpa</h2>
                <p className="text-sm text-muted">Artikala: {totalCount}</p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Zatvori korpu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest transition hover:bg-sage-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {items.length === 0 ? (
              <CartEmptyState onClose={handleClose} />
            ) : (
              <>
                <ul className="flex-1 divide-y divide-sage-200 overflow-y-auto px-5">
                  {items.map((item) => (
                    <CartItemRow
                      key={item.plant.id}
                      item={item}
                      onIncrement={increment}
                      onDecrement={decrement}
                      onRemove={removeItem}
                    />
                  ))}
                </ul>
                <CartSummary totalPrice={totalPrice} onCheckout={() => setView('checkout')} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
