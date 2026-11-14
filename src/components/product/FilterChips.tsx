import React from 'react';
import { categories } from '../../data/categories';
import { useCatalog } from '../../context/CatalogContext';
import type { CategoryId } from '../../types';

export function FilterChips(): React.JSX.Element {
  const { activeCategory, setActiveCategory } = useCatalog();
  const items: Array<{ id: CategoryId | 'all'; label: string }> = [
    { id: 'all', label: 'Sve biljke' },
    ...categories.map((category) => ({ id: category.id, label: category.name })),
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {items.map((item) => {
        const isActive = activeCategory === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveCategory(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
              isActive
                ? 'bg-forest text-white shadow-soft'
                : 'border border-sage-200 bg-white text-charcoal hover:bg-sage-50 hover:text-forest'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
