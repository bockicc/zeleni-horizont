import type { CategoryId, Plant } from '../types';

export function filterPlants(
  plants: readonly Plant[],
  activeCategory: CategoryId | 'all',
  searchTerm: string,
): Plant[] {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return plants.filter((plant) => {
    const matchesCategory = activeCategory === 'all' || plant.categoryId === activeCategory;
    if (!matchesCategory) return false;
    if (!normalizedSearch) return true;
    const haystack = `${plant.name} ${plant.latinName}`.toLowerCase();
    return haystack.includes(normalizedSearch);
  });
}
