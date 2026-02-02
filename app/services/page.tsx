"use client";

import { motion } from "framer-motion";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Check } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your project, goals, and target audience to craft the right strategy.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We design a campaign plan with timeline, content strategy, and influencer selection.",
  },
  {
    number: "03",
    title: "Execution",
    description: "We coordinate the campaign launch, managing all moving parts in real-time.",
  },
  {
    number: "04",
    title: "Optimize",
    description: "We monitor performance and adjust tactics to maximize results throughout the campaign.",
  },
];

const benefits = [
  "Dedicated campaign manager",
  "Real-time performance tracking",
  "Curated influencer network",
  "Strategic content planning",
  "Flexible budget options",
  "Post-campaign reporting",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto">
              Strategic Twitter/X marketing solutions designed specifically for the music industry. From emerging artists to established labels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Services showAll showLink={false} showHeader={false} />

      {/* Our Process */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold">
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-6xl font-serif font-bold text-accent/20">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-serif font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-foreground-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Why Kayswan
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold">
                Built for the Music Industry
              </h2>
              <p className="mt-6 text-foreground-muted leading-relaxed">
                We&apos;re not a generic marketing agency. We specialize exclusively in Twitter/X campaigns for the music industry, with deep knowledge of hip-hop culture and what resonates with engaged audiences.
              </p>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                Our network of influencers, understanding of platform dynamics, and track record of successful campaigns means your project gets the attention it deserves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-serif font-bold mb-6">
                What You Get
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Let's discuss your campaign"
        description="Tell us about your project and we'll craft a strategy to meet your goals."
        buttonText="Submit a Brief"
      />
    </>
  );
}
