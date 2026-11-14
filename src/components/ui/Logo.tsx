import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  readonly light?: boolean;
}

export function Logo({ light = false }: LogoProps): React.JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${light ? 'bg-white/15' : 'bg-forest'}`}>
        <Leaf className={`h-5 w-5 ${light ? 'text-white' : 'text-sage-50'}`} aria-hidden="true" />
      </span>
      <span className={`font-serif text-xl font-semibold tracking-wide ${light ? 'text-white' : 'text-forest-dark'}`}>
        Zeleni Horizont
      </span>
    </div>
  );
}
