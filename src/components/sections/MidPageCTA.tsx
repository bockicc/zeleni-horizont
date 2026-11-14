import React from 'react';
import { CalendarCheck, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function MidPageCTA(): React.JSX.Element {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-forest to-forest-dark px-6 py-10 text-white shadow-card sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
            <Leaf className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Planirate uređenje dvorišta ili prolećnu sadnju?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Zakažite besplatne konsultacije sa našim stručnim agronomima.
          </p>
        </div>
        <div className="mt-8 flex-shrink-0 lg:mt-0 lg:pl-8">
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
