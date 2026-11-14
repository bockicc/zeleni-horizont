import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories';
import { mockPlants } from '../../data/mockPlants';
import { useCatalog } from '../../context/CatalogContext';
import type { CategoryId } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';

export function CategoryGrid(): React.JSX.Element {
  const { activeCategory, setActiveCategory } = useCatalog();
  const navigate = useNavigate();

  const handleSelect = (id: CategoryId): void => {
    if (activeCategory === id) {
      setActiveCategory('all');
    } else {
      setActiveCategory(id);
    }
    navigate('/katalog');
  };

  return (
    <section className="section-padding scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Kategorije"
          title="Pronađite svoju biljku"
          subtitle="Istražite pažljivo oblikovane kategorije i pronađite sadnice koje najbolje odgovaraju stilu i potrebama vašeg prostora."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const count = mockPlants.filter((plant) => plant.categoryId === category.id).length;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleSelect(category.id)}
                className={`group relative overflow-hidden rounded-2xl border text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest motion-reduce:transform-none ${
                  isActive ? 'border-forest ring-1 ring-forest' : 'border-sage-200'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={`Kategorija ${category.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
                </div>
                <div className="relative flex h-full min-h-[18rem] flex-col justify-end p-5 text-white">
                  <span className="mb-2 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                    {count} biljke
                  </span>
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
                    Pogledajte ponudu
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
