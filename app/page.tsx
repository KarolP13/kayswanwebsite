"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Megaphone, BarChart3, ArrowRight } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import Link from "next/link";

const deliverables = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Campaign Management",
    subtitle: "End-to-end Twitter/X campaign execution from strategy to reporting.",
    className: "md:col-span-2",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Influencer Activation",
    subtitle: "Access to our network of top music and culture influencers.",
    className: "md:col-span-1",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Music Release Marketing",
    subtitle: "Strategic promotion for singles, albums, and music videos.",
    className: "md:col-span-1",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Engagement-Driven Results",
    subtitle: "Campaigns optimized for real engagement, not vanity metrics.",
    className: "md:col-span-2",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

        {/* Background Glows */}
        <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[800px] h-[500px] bg-accent/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-900/10 rounded-[100%] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono mb-8 text-accent-light tracking-wide backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              REDEFINING MUSIC MARKETING
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight text-foreground mb-8 leading-[0.9]">
              Culture <br />
              <span className="text-foreground-muted italic">Amplified.</span>
            </h1>

            <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed font-light mb-10">
              We build strategic Twitter/X campaigns that drive real engagement for artists, labels, and brands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-accent px-8 font-medium text-black transition-all duration-300 hover:bg-white hover:w-56 w-48"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="mr-2">Start Campaign</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="text-sm font-medium text-foreground-muted hover:text-white transition-colors px-6 py-3"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Minimal Strip */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Impressions", value: "18M+" },
              { label: "Engagements", value: "1M+" },
              { label: "Campaigns", value: "50+" },
              { label: "Artists", value: "20+" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-foreground-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Bento Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6"> Our Capabilities </h2>
            <p className="text-lg text-foreground-muted">
              We combine data-driven strategy with cultural intuition to deliver campaigns that resonate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <BentoCard
                key={i}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-accent/5 border border-white/10 p-12 md:p-24 text-center">
            {/* Background Texture */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Ready to amplify your <br />
                <span className="text-accent italic"> next release?</span>
              </h2>
              <p className="text-xl text-foreground-muted mb-10">
                Let's discuss how we can build a strategic Twitter/X campaign for you.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(212,197,176,0.5)]"
              >
                Start Your Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
