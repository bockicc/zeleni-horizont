import React, { createContext, useContext, useMemo, useState } from 'react';
import type { CategoryId } from '../types';

interface CatalogContextValue {
  readonly activeCategory: CategoryId | 'all';
  readonly searchTerm: string;
  readonly setActiveCategory: (category: CategoryId | 'all') => void;
  readonly setSearchTerm: (term: string) => void;
  readonly resetFilters: () => void;
}

const CatalogContext = createContext<CatalogContextValue | undefined>(undefined);

export function CatalogProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const value = useMemo<CatalogContextValue>(
    () => ({
      activeCategory,
      searchTerm,
      setActiveCategory,
      setSearchTerm,
      resetFilters: () => {
        setActiveCategory('all');
        setSearchTerm('');
      },
    }),
    [activeCategory, searchTerm],
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog(): CatalogContextValue {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('useCatalog mora biti korišćen unutar CatalogProvider komponente.');
  }
  return context;
}
