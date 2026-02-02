"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureItemProps {
    title: string;
    description: string;
    index: number;
}

export function FeatureList({ items }: { items: FeatureItemProps[] }) {
    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col">
            {items.map((item, i) => (
                <FeatureItem key={i} {...item} index={i} />
            ))}
            <div className="h-px bg-white/10 w-full" />
        </div>
    );
}

function FeatureItem({ title, description, index }: FeatureItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative border-t border-white/10 py-12 md:py-16 transition-colors hover:bg-white/[0.02]"
        >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 px-4">
                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-serif text-foreground-muted group-hover:text-white transition-colors duration-300">
                    {title}
                </h3>

                {/* Description & Icon container */}
                <div className="flex items-start gap-8 md:max-w-md">
                    <p className="text-foreground-muted/60 text-lg leading-relaxed group-hover:text-foreground-muted transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
