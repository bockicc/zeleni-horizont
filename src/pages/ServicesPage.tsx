import React from 'react';
import { ServicesBanner } from '../components/sections/ServicesBanner';
import { ServicesCTA } from '../components/sections/ServicesCTA';
import { TrustBar } from '../components/sections/TrustBar';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Droplets, Leaf, Ruler } from 'lucide-react';

const serviceDetails = [
  {
    icon: Ruler,
    title: 'Projektovanje vrta',
    description: 'Izrada idejnog rešenja prilagođenog terenu, osunčanosti i vašem stilu života, uz pažljiv izbor biljnih vrsta.',
  },
  {
    icon: Leaf,
    title: 'Sadnja i uređenje',
    description: 'Kompletna priprema terena, sadnja i oblikovanje zelenih površina sa naglaskom na dugoročnu estetiku i zdravlje biljaka.',
  },
  {
    icon: Droplets,
    title: 'Sistemi za navodnjavanje',
    description: 'Projektovanje i postavljanje efikasnih sistema zalivanja koji štede vodu i obezbeđuju ravnomernu negu biljaka.',
  },
] as const;

interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const processSteps: readonly ProcessStep[] = [
  {
    number: '01',
    title: 'Uvodne konsultacije i analiza prostora',
    description: 'Upoznajemo se sa vašim željama, terenom i uslovima prostora kako bismo definisali najbolji pravac uređenja.',
  },
  {
    number: '02',
    title: 'Predlog sadnica i koncept uređenja',
    description: 'Kreiramo usklađen predlog biljnih vrsta i rasporeda koji odgovara stilu dvorišta i načinu održavanja.',
  },
  {
    number: '03',
    title: 'Plan sadnje i po potrebi sistem navodnjavanja',
    description: 'Pripremamo detaljan plan sadnje i, po potrebi, rešavanje za efikasno i dugoročno navodnjavanje.',
  },
  {
    number: '04',
    title: 'Podrška i saveti za održavanje nakon sadnje',
    description: 'Nakon realizacije ostajemo dostupni sa stručnim savetima kako bi vaše zelenilo ostalo zdravo i uredno.',
  },
];

export function ServicesPage(): React.JSX.Element {
  return (
    <>
      <section className="bg-sage-50/50 pt-10">
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="O nama i uslugama"
            title="Stručno uređenje i trajna nega vašeg zelenog prostora"
            subtitle="Zeleni Horizont spaja višegodišnje iskustvo, proverene sadnice i agronomsko znanje kako bismo stvorili dvorišta koja ostaju lepa kroz sve sezone."
          />
        </div>
        <div className="pb-4">
          <TrustBar />
        </div>
      </section>
      <ServicesBanner />
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceDetails.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-sage-200 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-forest">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-forest-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-dark">Naš proces</p>
              <h3 className="text-3xl font-semibold text-forest-dark md:text-4xl">Kako izgleda saradnja</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Svaki projekat vodimo kroz jasne korake kako biste od prve konsultacije do održavanja imali pouzdanu i profesionalnu podršku.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-sage-200 lg:block" aria-hidden="true" />
              <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <li key={step.number} className="relative">
                    <div className="flex h-full flex-col rounded-2xl border border-sage-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none">
                      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                        <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-sm font-bold tracking-wide text-white shadow-soft ring-4 ring-sage-50">
                          {step.number}
                        </span>
                        <h4 className="text-lg font-semibold leading-snug text-forest-dark">{step.title}</h4>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <ServicesCTA />
    </>
  );
}
