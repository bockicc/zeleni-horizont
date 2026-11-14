import React, { useRef } from 'react';
import { X } from 'lucide-react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly alt: string;
}

interface ProjectsGalleryModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const projects: readonly ProjectItem[] = [
  {
    id: 'stonework',
    title: 'Kamenjarske staze i detalji',
    description: 'Prirodni kamen i pažljivo oblikovane linije uneli su strukturu i eleganciju u vrtni prostor.',
    image: 'https://plus.unsplash.com/premium_photo-1733317208154-942cf126a755?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Kamenjarske staze i detalji u uređenom vrtu',
  },
  {
    id: 'private-yard',
    title: 'Uređenje privatnog dvorišta',
    description: 'Harmoniju travnjaka, staza i trajnih sadnica prilagodili smo porodičnom načinu života i održavanju.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
    alt: 'Uređeno privatno dvorište sa travnjakom i sadnicama',
  },
  {
    id: 'irrigation',
    title: 'Postavljanje sistema za navodnjavanje',
    description: 'Automatsko zalivanje obezbeđuje ravnomernu negu biljaka i uštedu vode tokom cele sezone.',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sistem za navodnjavanje travnjaka u bašti',
  },
  {
    id: 'turf',
    title: 'Ugradnja busen-travnjaka',
    description: 'Svež i gust travnjak postavljen je uz pripremu terena za dugotrajan, uredan i otporan izgled.',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sveže postavljen busen-travnjak u dvorištu',
  },
  {
    id: 'modern-yard',
    title: 'Moderno rezidencijalno dvorište',
    description: 'Kombinacijom ukrasnog drveća, žbunja i rasvete oblikovan je savremen i prijatan boravak na otvorenom.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Moderno uređeno rezidencijalno dvorište',
  },
  {
    id: 'planting',
    title: 'Sezonska sadnja i aranžiranje',
    description: 'Pažljivo odabrane trajnice i ukrasne vrste donose boju, teksturu i sklad tokom više sezona.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sezonski aranžman sadnica i cveća u bašti',
  },
];

function ProjectCard({ project }: { readonly project: ProjectItem }): React.JSX.Element {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sage-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none">
      <div className="aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-sage-100">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="block h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-semibold leading-snug text-forest-dark">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
    </article>
  );
}

export function ProjectsGalleryModal({ isOpen, onClose }: ProjectsGalleryModalProps): React.JSX.Element | null {
  const containerRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(isOpen);
  useEscapeKey(isOpen, onClose);
  useFocusTrap(isOpen, containerRef);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm motion-safe:animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="projects-gallery-title"
        tabIndex={-1}
        className="relative z-10 mt-4 flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl motion-safe:animate-scale-in sm:mt-0"
      >
        <div className="flex flex-shrink-0 items-start justify-between gap-4 border-b border-sage-200 bg-background px-5 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
          <div className="min-w-0 pr-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-dark">Naši radovi</p>
            <h2 id="projects-gallery-title" className="mt-1 text-2xl font-semibold text-forest-dark md:text-3xl">
              Galerija realizovanih projekata
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Izdvojeni primeri uređenja dvorišta, sadnje i sistema za navodnjavanje.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Zatvori galeriju radova"
            className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest transition hover:bg-sage-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain bg-sage-50/30 px-5 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-6">
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
