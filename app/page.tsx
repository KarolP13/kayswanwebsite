"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SwanBackground } from "@/components/ui/SwanBackground";
import { FeatureList } from "@/components/ui/FeatureList";

const services = [
  {
    title: "Campaign Management",
    description: "End-to-end Twitter/X campaign execution from strategy to reporting. We handle the noise so you can focus on the music.",
    index: 0
  },
  {
    title: "Influencer Activation",
    description: "Access to our network of top music and culture influencers. Authenticity isn't bought, it's curated.",
    index: 1
  },
  {
    title: "Music Release Marketing",
    description: "Strategic promotion for singles, albums, and music videos. We build the narrative before the drop.",
    index: 2
  },
  {
    title: "Engagement Strategy",
    description: "Campaigns optimized for real engagement, not vanity metrics. We build communities that stick.",
    index: 3
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Animated Background */}
        <SwanBackground />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full">

          {/* Main Content Container - centered vertically in the screen */}
          <div className="flex-1 flex flex-col items-center justify-center w-full">

            {/* Massive Transparent Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[800px] aspect-square flex items-center justify-center mb-12"
            >
              <Image
                src="/logo/kayswan-logo.png"
                alt="Kayswan - Music Marketing"
                fill
                className="object-contain invert opacity-90"
                priority
              />
            </motion.div>

            {/* CTA Button - Fixed Width Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-[-10vh]" // Pull up slightly to overlap/sit nicely with logo
            >
              <Link
                href="/contact"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-accent px-10 font-bold text-black text-lg transition-all duration-300 hover:bg-white hover:scale-105 min-w-[280px]"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-12 bg-white/40" />
                </div>
                <span className="whitespace-nowrap mr-2">Start Campaign</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs font-mono tracking-[0.2em] animate-pulse"
          >
            SCROLL TO EXPLORE
          </motion.div>

        </div>
      </section>

      {/* Services List - Replacing Bento Grid */}
      <section className="py-32 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-mono text-accent tracking-widest mb-4">OUR EXPERTISE</h2>
            <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
              We don&apos;t just market music. We engineer cultural moments that resonate with audiences and amplify artist narratives.
            </p>
          </motion.div>
        </div>

        <div className="px-6">
          <FeatureList items={services} />
        </div>
      </section>

      {/* Stats - Minimal Strip (Moved below services) */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {[
            { label: "Impressions Delivered", value: "Millions" },
            { label: "Viral Moments", value: "Countless" },
            { label: "Culture Impact", value: "Global" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 p-12 md:p-32 text-center group">
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12 leading-tight">
                Ready to amplify your <br />
                <span className="text-accent italic"> next release?</span>
              </h2>

              <Link
                href="/contact"
                className="inline-block bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-accent transition-all transform hover:scale-105 shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]"
              >
                Start Your Campaign
              </Link>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
