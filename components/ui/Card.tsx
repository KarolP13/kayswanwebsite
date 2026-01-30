"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br from-card to-card/80 border border-white/5 rounded-2xl p-6",
        hover && "hover:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition-all duration-300",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
