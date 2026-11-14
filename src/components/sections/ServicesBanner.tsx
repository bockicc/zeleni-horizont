import React, { useState } from 'react';
import { CheckCircle2, Sprout } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProjectsGalleryModal } from './ProjectsGalleryModal';

const services = [
  'Idejno projektovanje vrtova i dvorišta',
  'Stručno sadnja i kompletno uređenje zelenih površina',
  'Postavljanje sistema za navodnjavanje',
  'Sezonsko održavanje i saveti za dugoročnu negu',
] as const;

export function ServicesBanner(): React.JSX.Element {
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 rounded-3xl bg-sage-100/70 p-6 md:grid-cols-2 md:p-10 lg:p-12">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=80"
              alt="Uređenje bašte sa travnjakom, stazama i sadnicama"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 rounded-2xl border border-sage-200 bg-white p-4 shadow-soft sm:right-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-forest">
                <Sprout className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-dark">120+ uređenih dvorišta</p>
                <p className="text-xs text-muted">sa pažljivo biranim sadnicama</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-dark">Naše usluge</p>
          <h2 className="text-3xl font-semibold text-forest-dark md:text-4xl lg:text-5xl">
            Uređenje dvorišta i projektovanje vrtova po meri
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Od prvog saveta do završne sadnje, pomažemo vam da oblikujete prostor koji je funkcionalan,
            skladan i jednostavan za održavanje. Naši agronomi biraju biljke koje odgovaraju vašem terenu,
            osunčanosti i stilu života.
          </p>
          <ul className="mt-6 space-y-3">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3 text-charcoal">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest" aria-hidden="true" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button variant="secondary" size="lg" onClick={() => setIsGalleryOpen(true)}>
              Pogledaj naše radove
            </Button>
          </div>
        </div>
      </div>
      <ProjectsGalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </section>
  );
}
