"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { formatNumber } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  formatAsShort?: boolean;
}

export function StatCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2000,
  formatAsShort = true,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration,
  });

  const display = useTransform(spring, (current) => {
    const rounded = Math.round(current);
    if (formatAsShort) {
      return formatNumber(rounded);
    }
    return rounded.toLocaleString();
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [display]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-2">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-foreground-muted text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
