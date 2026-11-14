import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories';
import { useCatalog } from '../../context/CatalogContext';
import { Logo } from '../ui/Logo';
import type { CategoryId } from '../../types';

export function Footer(): React.JSX.Element {
  const { setActiveCategory } = useCatalog();
  const navigate = useNavigate();

  const goToCategory = (categoryId: CategoryId): void => {
    setActiveCategory(categoryId);
    navigate('/katalog');
  };

  return (
    <footer className="bg-forest px-4 pb-8 pt-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Butik rasadnik posvećen kvalitetnim sadnicama, trajnim vrtovima i prirodnoj harmoniji svakog dvorišta.
          </p>
          <div className="mt-5 flex gap-3">
            <Link to="/" aria-label="Instagram profil Zeleni Horizont" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link to="/" aria-label="Facebook profil Zeleni Horizont" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link to="/" aria-label="YouTube kanal Zeleni Horizont" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Brzi linkovi</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {[
              { to: '/', label: 'Početna' },
              { to: '/katalog', label: 'Katalog biljaka' },
              { to: '/usluge', label: 'O nama i usluge' },
              { to: '/kontakt', label: 'Kontakt' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Kategorije</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {categories.map((category) => (
              <li key={category.id}>
                <button type="button" onClick={() => goToCategory(category.id)} className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" /><span>Vrtna 27, 21203 Veternik, Novi Sad</span></li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" /><span>+381 64 123 4567</span></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" /><span>kontakt@zelenihorizont.rs</span></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-xs text-white/70 sm:flex-row sm:text-left">
        <p>© 2025 Zeleni Horizont. Sva prava zadržana.</p>
        <p>Ovo je demo prezentacija bez stvarne prodaje i obrade plaćanja.</p>
      </div>
    </footer>
  );
}
