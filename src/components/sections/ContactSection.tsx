import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';

const details = [
  {
    icon: MapPin,
    label: 'Adresa',
    value: 'Vrtna 27, 21203 Veternik, Novi Sad',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+381 64 123 4567',
  },
  {
    icon: Mail,
    label: 'E-pošta',
    value: 'kontakt@zelenihorizont.rs',
  },
  {
    icon: Clock,
    label: 'Radno vreme',
    value: 'Pon–Sub: 08:00–19:00, Ned: 09:00–14:00',
  },
] as const;

export function ContactSection(): React.JSX.Element {
  return (
    <section className="section-padding bg-sage-50/40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Kontakt"
          title="Tu smo za vaše zeleno dvorište"
          subtitle="Pozovite nas ili pošaljite poruku za izbor sadnica, savet agronoma i planiranje uređenja prostora."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-sage-200 bg-white p-6 shadow-soft md:p-8">
            <h3 className="text-2xl font-semibold text-forest-dark">Podaci rasadnika</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Posetite nas i izaberite sadnice uz stručno vođenje. Podaci su prikazani u demo svrhe.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <li key={detail.label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">{detail.label}</p>
                      <p className="mt-1 text-sm text-muted">{detail.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
