import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { CategoryGrid } from '../components/sections/CategoryGrid';
import { MidPageCTA } from '../components/sections/MidPageCTA';
import { FeaturedPlants } from '../components/sections/FeaturedPlants';
import { Testimonials } from '../components/sections/Testimonials';

export function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <MidPageCTA />
      <FeaturedPlants variant="preview" />
      <Testimonials />
    </>
  );
}
