import React from 'react';

interface SectionHeadingProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly align?: 'left' | 'center';
  readonly light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps): React.JSX.Element {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-sage-200' : 'text-terracotta-dark'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-semibold md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-forest-dark'}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-white/85' : 'text-muted'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
