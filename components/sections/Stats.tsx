"use client";

import { motion } from "framer-motion";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats2025 } from "@/data/clients";

export function Stats() {
  const statsDisplay = [
    {
      value: stats2025.totalImpressions,
      label: "Impressions",
      suffix: "+",
    },
    {
      value: stats2025.totalEngagements,
      label: "Engagements",
      suffix: "+",
    },
  ];

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            2025 Results
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold">
            Campaign Performance
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="flex justify-center gap-16 md:gap-24">
          {statsDisplay.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCounter
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                formatAsShort={stat.value > 1000}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
