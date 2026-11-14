import React from 'react';
import { Quote, Star } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

interface Testimonial {
  readonly name: string;
  readonly location: string;
  readonly service: string;
  readonly review: string;
}

const testimonials: readonly Testimonial[] = [
  {
    name: 'Jelena Marković',
    location: 'Novi Sad',
    service: 'Kupovina sadnica',
    review:
      'Sadnice tuje i lavande stigle su zdrave, čvrste i odlično ukorenjene. Uz savet agronoma, dvorište nam je za kratko vreme dobilo uredan i svež izgled.',
  },
  {
    name: 'Milan Petrović',
    location: 'Sremska Kamenica',
    service: 'Uređenje dvorišta',
    review:
      'Tim Zelenog Horizonta je profesionalno isplanirao sadnju i preporučio biljke koje savršeno odgovaraju našem prostoru. Kvalitet sadnog materijala je za svaku pohvalu.',
  },
  {
    name: 'Ana Jovanović',
    location: 'Veternik',
    service: 'Sadnice voćki i navodnjavanje',
    review:
      'Kupili smo voćne sadnice i dogovorili sistem za navodnjavanje. Sve je urađeno pedantno, a biljke su se odlično primile već u prvoj sezoni.',
  },
];

export function Testimonials(): React.JSX.Element {
  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Utisci kupaca"
          title="Utisci naših kupaca"
          subtitle="Poverenje gradimo zdravim sadnicama, stručnim savetima i pažljivo izvedenim projektima uređenja zelenih površina."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-sage-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1" aria-label="Ocena 5 od 5 zvezdica">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${testimonial.name}-star-${index}`} className="h-4 w-4 fill-accent-yellow text-accent-yellow" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-sage-300" aria-hidden="true" />
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-charcoal md:text-base">„{testimonial.review}”</p>
              <div className="mt-6 border-t border-sage-200 pt-4">
                <p className="font-semibold text-forest-dark">{testimonial.name}</p>
                <p className="mt-1 text-sm text-muted">{testimonial.location} · {testimonial.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
