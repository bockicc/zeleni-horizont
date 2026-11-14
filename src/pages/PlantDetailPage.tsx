import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { mockPlants } from '../data/mockPlants';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PriceTag } from '../components/ui/PriceTag';
import { QuantitySelector } from '../components/ui/QuantitySelector';
import { PlantImage } from '../components/product/PlantImage';
import { CareInstructions } from '../components/product/CareInstructions';

const categoryLabels: Record<string, string> = {
  cetinari: 'Četinari',
  liscari: 'Lišćari i ukrasno drveće',
  cvetnice: 'Cvetnice i perene',
  vocne: 'Voćne sadnice',
};

export function PlantDetailPage(): React.JSX.Element {
  const { plantId } = useParams<{ plantId: string }>();
  const plant = mockPlants.find((p) => p.id === plantId);
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState<number>(1);

  if (!plant) {
    return (
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-sage-200 bg-white p-10 text-center shadow-soft">
          <h1 className="text-2xl font-semibold text-forest-dark">Biljka nije pronađena</h1>
          <p className="mt-2 text-sm text-muted">Tražena biljka ne postoji u našem katalogu.</p>
          <div className="mt-6 flex justify-center">
            <Link to="/katalog" className="inline-flex">
              <Button variant="secondary">Nazad na katalog</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const handleAdd = (): void => {
    addItem(plant, quantity);
    showToast(`${plant.name} je dodata u korpu.`);
  };

  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/katalog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-forest transition hover:text-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
        >
          <ArrowLeft className="h-4 w-4" />
          Nazad na katalog
        </Link>
        <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-sage-200 bg-white shadow-soft md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto md:min-h-full">
            <PlantImage
              src={plant.image}
              alt={`${plant.name} - detaljan prikaz sadnice`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="space-y-5 p-6 md:p-8 lg:p-10">
            <div className="flex flex-wrap gap-2">
              <Badge label={categoryLabels[plant.categoryId] ?? plant.categoryId} />
              {plant.badge ? <Badge label={plant.badge} tone="accent" /> : null}
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-forest-dark md:text-4xl">{plant.name}</h1>
              <p className="mt-1 text-base italic text-muted">{plant.latinName}</p>
            </div>
            <PriceTag priceRsd={plant.priceRsd} oldPriceRsd={plant.oldPriceRsd} />
            <p className="text-sm font-medium text-charcoal">
              Visina: {plant.height} | Saksija {plant.potSize}
            </p>
            <p className="text-sm leading-relaxed text-muted md:text-base">{plant.shortDescription}</p>
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
    </section>
  );
}
