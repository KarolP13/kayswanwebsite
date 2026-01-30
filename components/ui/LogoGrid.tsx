"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  logo: string;
  href?: string;
}

interface LogoGridProps {
  logos: Logo[];
  columns?: number;
  className?: string;
}

export function LogoGrid({ logos, columns = 3, className }: LogoGridProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "grid gap-6",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
        columns === 5 && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
        columns === 6 && "grid-cols-2 sm:grid-cols-4 lg:grid-cols-6",
        className
      )}
    >
      {logos.map((item) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          className="group relative bg-card hover:bg-card-hover border border-border hover:border-accent/30 rounded-2xl p-8 flex items-center justify-center aspect-[4/3] transition-all duration-300"
          whileHover={{ y: -4, scale: 1.02 }}
        >
          {/* Placeholder for logo - shows name when no image */}
          <div className="flex flex-col items-center justify-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-accent">
                {item.name.charAt(0)}
              </span>
            </div>
            <span className="text-foreground-muted group-hover:text-foreground text-sm font-medium transition-colors text-center">
              {item.name}
            </span>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Infinite scroll logo strip for homepage
export function LogoScroll({ logos }: { logos: Logo[] }) {
  // Double the logos for seamless loop
  const doubledLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-8">
      <div className="logo-scroll flex gap-12 items-center">
        {doubledLogos.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
          >
            <div className="h-12 px-6 flex items-center justify-center bg-card/50 rounded-lg">
              <span className="text-foreground-muted font-medium whitespace-nowrap">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
