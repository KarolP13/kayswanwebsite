"use client";

import { motion } from "framer-motion";
import { CTA } from "@/components/sections/CTA";
import { Users, Network, Zap } from "lucide-react";

const highlights = [
  {
    label: "Founded",
    value: "2024",
  },
  {
    label: "Focus",
    value: "Twitter/X Marketing",
  },
  {
    label: "Industry",
    value: "Music & Entertainment",
  },
];

const networkStrengths = [
  {
    icon: Users,
    title: "Influencer Network",
    description: "Direct relationships with some of the biggest pages in hip-hop and music culture on Twitter/X.",
  },
  {
    icon: Network,
    title: "Industry Connections",
    description: "Trusted partnerships with labels, artists, and music media outlets across the industry.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "Our network allows us to activate campaigns quickly with authentic engagement.",
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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AboutPage() {
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
              Who We Are
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Built in the Culture
            </h1>
            <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto">
              Kayswan LLC is a digital marketing agency born from a deep connection to hip-hop culture and the music industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-8 bg-background-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-lg font-semibold text-foreground">
                  {item.value}
                </div>
                <div className="text-sm text-foreground-muted">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Story</h2>
            
            <div className="space-y-6 text-lg text-foreground-muted leading-relaxed">
              <p>
                We didn&apos;t start as a marketing agency—we started as influencers. When creators began approaching us to promote their projects through our platforms, we discovered we had a unique advantage: we understood the influencer landscape from the inside out.
              </p>
              <p>
                After running countless campaigns and learning what truly works, we realized that influencers make the best influencer marketers. So we launched Kayswan LLC, bringing together our organic presence on the platform with professional marketing expertise.
              </p>
              <p>
                Our network includes some of the biggest pages in the scene—not as clients, but as friends and collaborators. That&apos;s the Kayswan difference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />

      {/* Network Section */}
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
              Our Network
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold">
              Connected to the Culture
            </h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              We are deeply connected to the top influencers and brands in the music space on Twitter/X. Our network spans across hip-hop, R&B, and broader music culture—giving us unparalleled reach when it comes to campaign execution.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {networkStrengths.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-white/5 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white/10">
                  <item.icon className="w-6 h-6 text-foreground-muted transition-colors duration-300 group-hover:text-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Let's build something together"
        description="Ready to work with an agency that understands your culture and your goals?"
      />
    </>
  );
}
