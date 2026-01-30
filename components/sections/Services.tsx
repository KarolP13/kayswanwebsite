"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface ServicesProps {
  showAll?: boolean;
  showLink?: boolean;
  showHeader?: boolean;
}

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

export function Services({ showAll = false, showLink = true, showHeader = true }: ServicesProps) {
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold">
              Our Services
            </h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              Strategic Twitter/X marketing solutions tailored for the music industry. 
              From emerging artists to established labels.
            </p>
          </motion.div>
        )}

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayedServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                showFeatures={showAll}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Link to services page */}
        {showLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button variant="ghost" className="group">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
