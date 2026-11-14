import React, { useState } from 'react';
import { Check, Eye, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Plant } from '../../types';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PriceTag } from '../ui/PriceTag';
import { PlantImage } from './PlantImage';

interface PlantCardProps {
  readonly plant: Plant;
  readonly onOpenQuickView: (plant: Plant) => void;
}

const categoryLabels: Record<Plant['categoryId'], string> = {
  cetinari: 'Četinari',
  liscari: 'Lišćari i ukrasno drveće',
  cvetnice: 'Cvetnice i perene',
  vocne: 'Voćne sadnice',
};

export function PlantCard({ plant, onOpenQuickView }: PlantCardProps): React.JSX.Element {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [added, setAdded] = useState<boolean>(false);

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    addItem(plant, 1);
    showToast(`${plant.name} je dodata u korpu.`);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  const handleQuickView = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onOpenQuickView(plant);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sage-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-sage-50">
        <Link to={`/katalog/${plant.id}`} className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest">
          <PlantImage
            src={plant.image}
            alt={`${plant.name} - sadnica`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
          />
        </Link>
        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-2">
          <Badge label={categoryLabels[plant.categoryId]} />
          {plant.badge ? <Badge label={plant.badge} tone="accent" /> : null}
        </div>
        <button
          type="button"
          onClick={handleQuickView}
          aria-label={`Brzi pregled za biljku ${plant.name}`}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest opacity-100 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest md:opacity-0 md:group-hover:opacity-100"
        >
          <Eye className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Link to={`/katalog/${plant.id}`} className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest">
          <h3 className="text-xl font-semibold text-forest-dark transition hover:text-forest">{plant.name}</h3>
        </Link>
        <p className="mt-1 text-sm italic text-muted">{plant.latinName}</p>
        <p className="mt-3 text-sm text-charcoal">
          Visina: {plant.height} | Saksija {plant.potSize}
        </p>
        <div className="mt-4">
          <PriceTag priceRsd={plant.priceRsd} oldPriceRsd={plant.oldPriceRsd} />
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleQuickView}
            className="text-sm font-medium text-forest underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest md:opacity-0 md:transition md:group-hover:opacity-100"
          >
            Brzi pregled
          </button>
          <Link
            to={`/katalog/${plant.id}`}
            className="text-sm font-medium text-charcoal underline-offset-4 hover:text-forest hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            Detalji
          </Link>
        </div>
        <div className="mt-4">
          <Button variant="primary" fullWidth onClick={handleAdd} aria-label={`Dodaj u korpu: ${plant.name}`}>
            {added ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
            {added ? 'Dodato' : 'Dodaj u korpu'}
          </Button>
        </div>
      </div>
    </article>
  );
}
