"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTA } from "@/components/sections/CTA";
import { TrendingUp, Users, Megaphone, BarChart3 } from "lucide-react";

const deliverables = [
  {
    icon: TrendingUp,
    title: "Campaign Management",
    description: "End-to-end Twitter/X campaign execution from strategy to reporting.",
  },
  {
    icon: Users,
    title: "Influencer Activation",
    description: "Access to our network of top music and culture influencers.",
  },
  {
    icon: Megaphone,
    title: "Music Release Marketing",
    description: "Strategic promotion for singles, albums, and music videos.",
  },
  {
    icon: BarChart3,
    title: "Engagement-Driven Results",
    description: "Campaigns optimized for real engagement, not vanity metrics.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero with Big Logo */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Big transparent logo centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/logo/kayswan-logo.png"
              alt=""
              width={700}
              height={700}
              className="invert"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              KAYSWAN
            </h1>
            <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto">
              Driving results for artists and labels through strategic Twitter/X campaigns that build culture and engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Banner */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-12 bg-background-secondary border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                18M+
              </div>
              <div className="text-foreground-muted mt-1">Impressions</div>
            </div>
            <div className="hidden sm:block text-4xl text-white/10">·</div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                1M+
              </div>
              <div className="text-foreground-muted mt-1">Engagements</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Deliverables Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              What We Deliver
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold">
              Our Capabilities
            </h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              Comprehensive Twitter/X marketing solutions for the music industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {deliverables.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-white/5 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-white/10">
                    <item.icon className="w-7 h-7 text-foreground-muted transition-colors duration-300 group-hover:text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Want results like this?"
        description="Let's discuss how we can amplify your next release with a strategic Twitter/X campaign."
        buttonText="Start Your Campaign"
      />
    </>
  );
}
