import React from 'react';
import { Award, BadgeCheck, Truck, Sprout } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '15+ godina iskustva',
    description: 'Porodična tradicija i znanje negovano kroz stotine uspešnih vrtova.',
  },
  {
    icon: BadgeCheck,
    title: '100% garancija na prijem sadnica',
    description: 'Isporučujemo zdrave i odabrane biljke spremne za uspešno sadnju.',
  },
  {
    icon: Truck,
    title: 'Dostava na kućnu adresu',
    description: 'Pažljivo pakovanje i siguran transport do vašeg praga.',
  },
  {
    icon: Sprout,
    title: 'Stručni saveti agronoma',
    description: 'Praktična podrška pri izboru, sadnji i dugoročnoj nezi biljaka.',
  },
] as const;

export function TrustBar(): React.JSX.Element {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-sage-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-forest">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-forest-dark">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
