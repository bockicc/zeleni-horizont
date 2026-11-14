import React from 'react';
import { Leaf } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCatalog } from '../../context/CatalogContext';

export function PlantGridEmptyState(): React.JSX.Element {
  const { resetFilters } = useCatalog();
  return (
    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-sage-200 bg-white p-10 text-center shadow-soft">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-forest">
        <Leaf className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-forest-dark">Nema pronađenih biljaka</h3>
      <p className="mt-2 text-sm text-muted">
        Pokušajte sa drugim pojmom pretrage ili resetujte filtere kako biste videli celu ponudu.
      </p>
      <div className="mt-6 flex justify-center">
        <Button variant="secondary" onClick={resetFilters}>
          Prikaži sve biljke
        </Button>
      </div>
    </div>
  );
}
