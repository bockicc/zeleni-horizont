import React, { useEffect, useState } from 'react';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useCatalog } from '../../context/CatalogContext';
import { useScrolled } from '../../hooks/useScrolled';
import { Logo } from '../ui/Logo';

interface NavbarProps {
  readonly onOpenCart: () => void;
}

const navItems = [
  { to: '/', label: 'Početna', end: true },
  { to: '/katalog', label: 'Katalog biljaka', end: false },
  { to: '/usluge', label: 'O nama i usluge', end: false },
  { to: '/kontakt', label: 'Kontakt', end: false },
] as const;

export function Navbar({ onOpenCart }: NavbarProps): React.JSX.Element {
  const { totalCount } = useCart();
  const { searchTerm, setSearchTerm } = useCatalog();
  const scrolled = useScrolled(10);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [badgePop, setBadgePop] = useState<boolean>(false);

  useEffect(() => {
    if (totalCount <= 0) return;
    setBadgePop(true);
    const timer = window.setTimeout(() => setBadgePop(false), 300);
    return () => window.clearTimeout(timer);
  }, [totalCount]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleSearchToggle = (): void => {
    setSearchOpen((prev) => !prev);
  };

  const handleSearchChange = (value: string): void => {
    setSearchTerm(value);
    if (value.trim() && location.pathname !== '/katalog') {
      navigate('/katalog');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-sage-200/80 bg-background/85 shadow-sm backdrop-blur-md' : 'border-transparent bg-background/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          aria-label="Početna strana Zeleni Horizont"
          onClick={() => setMobileOpen(false)}
        >
          <Logo />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  isActive ? 'bg-sage-100 text-forest' : 'text-charcoal hover:bg-sage-50 hover:text-forest'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={searchOpen ? 'Zatvori pretragu' : 'Otvori pretragu'}
            onClick={handleSearchToggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest transition hover:bg-sage-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Otvori korpu"
            onClick={onOpenCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-forest transition hover:bg-sage-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalCount > 0 ? (
              <span
                className={`absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[11px] font-bold text-white ${badgePop ? 'motion-safe:animate-pop' : ''}`}
              >
                {totalCount}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Zatvori meni' : 'Otvori meni'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest transition hover:bg-sage-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div className="border-t border-sage-200/70 bg-background/95 px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <label htmlFor="nav-search" className="sr-only">
              Pretražite biljke po nazivu ili latinskom nazivu
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                id="nav-search"
                value={searchTerm}
                onChange={(event) => handleSearchChange(event.target.value)}
                placeholder="Pretražite biljke po nazivu ili latinskom nazivu"
                className="w-full rounded-full border border-sage-200 bg-white py-2.5 pl-11 pr-4 text-sm text-charcoal placeholder:text-muted focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="border-t border-sage-200 bg-background/98 px-4 py-4 shadow-sm lg:hidden">
          <nav aria-label="Mobilna navigacija" className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    isActive ? 'bg-sage-100 text-forest' : 'text-charcoal hover:bg-sage-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
