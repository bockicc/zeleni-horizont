import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface PlantImageProps {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly loading?: 'lazy' | 'eager';
}

export function PlantImage({ src, alt, className = '', loading = 'lazy' }: PlantImageProps): React.JSX.Element {
  const [failed, setFailed] = useState<boolean>(false);

  if (failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-sage-100 ${className}`}>
        <Leaf className="h-10 w-10 text-forest/60" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
