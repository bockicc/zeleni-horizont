import React, { useRef, useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import type { Plant } from '../../types';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PriceTag } from '../ui/PriceTag';
import { QuantitySelector } from '../ui/QuantitySelector';
import { CareInstructions } from './CareInstructions';
import { PlantImage } from './PlantImage';

interface QuickViewModalProps {
  readonly plant: Plant | null;
  readonly onClose: () => void;
}

const categoryLabels: Record<Plant['categoryId'], string> = {
  cetinari: 'Četinari',
  liscari: 'Lišćari i ukrasno drveće',
  cvetnice: 'Cvetnice i perene',
  vocne: 'Voćne sadnice',
};

export function QuickViewModal({ plant, onClose }: QuickViewModalProps): React.JSX.Element | null {
  const containerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState<number>(1);
  const isOpen = plant !== null;

  useBodyScrollLock(isOpen);
  useEscapeKey(isOpen, onClose);
  useFocusTrap(isOpen, containerRef);

  if (!plant) return null;

  const handleAdd = (): void => {
    addItem(plant, quantity);
    showToast(`${plant.name} je dodata u korpu.`);
    onClose();
    setQuantity(1);
  };

  const handleClose = (): void => {
    setQuantity(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm motion-safe:animate-fade-in" onClick={handleClose} aria-hidden="true" />
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        tabIndex={-1}
        className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-background shadow-2xl motion-safe:animate-scale-in"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Zatvori brzi pregled"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto md:min-h-full">
            <PlantImage
              src={plant.image}
              alt={`${plant.name} - detaljan prikaz sadnice`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="space-y-5 p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              <Badge label={categoryLabels[plant.categoryId]} />
              {plant.badge ? <Badge label={plant.badge} tone="accent" /> : null}
            </div>
            <div>
              <h3 id="quick-view-title" className="text-3xl font-semibold text-forest-dark">
                {plant.name}
              </h3>
              <p className="mt-1 text-base italic text-muted">{plant.latinName}</p>
            </div>
            <PriceTag priceRsd={plant.priceRsd} oldPriceRsd={plant.oldPriceRsd} size="md" />
            <p className="text-sm font-medium text-charcoal">
              Visina: {plant.height} | Saksija {plant.potSize}
            </p>
            <p className="text-sm leading-relaxed text-muted">{plant.shortDescription}</p>
            <CareInstructions care={plant.care} />
            <div className="flex flex-col gap-4 border-t border-sage-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                onIncrease={() => setQuantity((q) => q + 1)}
                decreaseLabel={`Smanji količinu za ${plant.name}`}
                increaseLabel={`Povećaj količinu za ${plant.name}`}
              />
              <Button variant="primary" size="lg" onClick={handleAdd} className="sm:min-w-[14rem]">
                <ShoppingCart className="h-5 w-5" />
                Dodaj u korpu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
