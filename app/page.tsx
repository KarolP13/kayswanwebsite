"use client";

import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Services Preview */}
      <Services showLink />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
