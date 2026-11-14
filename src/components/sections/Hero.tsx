import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Hero(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=80"
          alt="Uređeno dvorište rasadnika sa bujnim zelenilom"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/55 to-forest-dark/20" />
      </div>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur">
            Butik rasadnik &amp; vrhunske sadnice
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Pretvorite svoje dvorište u zelenu oazu
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Pažljivo odabrane sadnice, stručni saveti agronoma i pouzdana dostava na kućnu adresu.
            Stvaramo vrtove koji odišu prirodnom elegancijom i dugotrajnom svežinom.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="primary" size="lg" onClick={() => navigate('/katalog')}>
              Istraži katalog
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/kontakt')}>
              Zakaži konsultaciju
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
