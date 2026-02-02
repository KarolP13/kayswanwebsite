"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
    children?: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    icon?: ReactNode;
    noise?: boolean;
}

export function BentoCard({
    children,
    className,
    title,
    subtitle,
    icon,
    noise = true
}: BentoCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/5 bg-card p-8",
                "transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-accent/5",
                "flex flex-col",
                className
            )}
        >
            {/* Noise Texture Overlay */}
            {noise && (
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                    }}
                />
            )}

            {/* Hover Glow Gradient */}
            <div
                className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 197, 176, 0.06), transparent 40%)"
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                {(icon || title) && (
                    <div className="mb-6">
                        {icon && (
                            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 text-accent ring-1 ring-white/10 transition-colors group-hover:bg-accent/10 group-hover:text-accent-light">
                                {icon}
                            </div>
                        )}
                        {title && (
                            <h3 className="font-serif text-xl font-semibold text-foreground tracking-tight">
                                {title}
                            </h3>
                        )}
                        {subtitle && (
                            <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {children}
            </div>
        </div>
    );
}
