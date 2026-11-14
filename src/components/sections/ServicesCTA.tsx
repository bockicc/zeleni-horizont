import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function ServicesCTA(): React.JSX.Element {
  return (
    <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-forest px-6 py-8 text-white shadow-card sm:px-8 lg:flex-row lg:items-center lg:px-10 lg:py-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
            Želite da transformišete svoj prostor?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
            Kontaktirajte naše agronome i besplatno se posavetujte oko uređenja vašeg dvorišta.
          </p>
        </div>
        <div className="w-full flex-shrink-0 sm:w-auto">
          <Link to="/kontakt" className="inline-flex w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full bg-terracotta text-white hover:bg-terracotta-dark focus-visible:ring-white sm:w-auto"
            >
              <CalendarCheck className="h-5 w-5" />
              Zakažite konsultacije
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
