'use client';

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import OurEdge from '@/components/OurEdge';
import Objectives from '@/components/Objectives';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <OurEdge />
      <Objectives />
      <CTA />
      <Footer />
    </main>
  );
}
