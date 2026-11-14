import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockPlants } from '../../data/mockPlants';
import { useCatalog } from '../../context/CatalogContext';
import { filterPlants } from '../../utils/filterPlants';
import type { Plant } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { FilterChips } from '../product/FilterChips';
import { PlantCard } from '../product/PlantCard';
import { PlantGridEmptyState } from '../product/PlantGridEmptyState';
import { QuickViewModal } from '../product/QuickViewModal';
import { Button } from '../ui/Button';

interface FeaturedPlantsProps {
  readonly variant: 'preview' | 'full';
}

export function FeaturedPlants({ variant }: FeaturedPlantsProps): React.JSX.Element {
  const { activeCategory, searchTerm } = useCatalog();
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filtered = useMemo(
    () => filterPlants(mockPlants, activeCategory, searchTerm),
    [activeCategory, searchTerm],
  );

  const plantsToShow = variant === 'preview' ? filtered.slice(0, 4) : filtered;

  return (
    <section className={`section-padding bg-sage-50/40 px-4 sm:px-6 lg:px-8 ${variant === 'full' ? 'pt-12' : ''}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={variant === 'preview' ? 'Naša ponuda' : 'Katalog biljaka'}
          title={variant === 'preview' ? 'Izdvajamo iz ponude' : 'Pronađite idealnu sadnicu za vaš prostor'}
          subtitle={
            variant === 'preview'
              ? 'Od zimzelenih četinara do rodnih voćnih sadnica, birajte biljke koje donose dugotrajan sklad i prirodnu lepotu vašem prostoru.'
              : 'Pregledajte kompletnu ponudu, filtrirajte po kategorijama i brzo pronađite biljke uz pretragu po nazivu ili latinskom nazivu.'
          }
        />
        <div className="mt-10 space-y-4">
          <FilterChips />
          <p className="text-center text-sm text-muted">
            Prikazano biljaka: <span className="font-semibold text-forest">{plantsToShow.length}</span>
            {variant === 'preview' && filtered.length > plantsToShow.length ? (
              <span> od {filtered.length}</span>
            ) : null}
          </p>
        </div>

        {plantsToShow.length === 0 ? (
          <PlantGridEmptyState />
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 motion-safe:animate-fade-in">
            {plantsToShow.map((plant) => (
              <PlantCard key={plant.id} plant={plant} onOpenQuickView={setSelectedPlant} />
            ))}
          </div>
        )}

        {variant === 'preview' ? (
          <div className="mt-10 flex justify-center">
            <Link to="/katalog">
              <Button variant="secondary" size="lg">
                Pogledaj ceo katalog
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
      <QuickViewModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
    </section>
  );
}
