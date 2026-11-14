import type { Category } from '../types';

export const categories: readonly Category[] = [
  {
    id: 'cetinari',
    name: 'Četinari',
    description: 'Zimzeleni stubovi, žive ograde i skulpturalne forme za trajnu strukturu dvorišta.',
    image:
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'liscari',
    name: 'Lišćari i ukrasno drveće',
    description: 'Drveće izražene krošnje i boja lišća koje unosi ritam i eleganciju u baštu.',
    image:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cvetnice',
    name: 'Cvetnice i perene',
    description: 'Mirisne i bogato cvetajuće biljke za gredice, žardinjere i opuštene vrtne kutke.',
    image:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vocne',
    name: 'Voćne sadnice',
    description: 'Proverene sorte za rodne voćnjake, bašte i uživanje u plodovima iz sopstvenog dvorišta.',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
  },
] as const;
