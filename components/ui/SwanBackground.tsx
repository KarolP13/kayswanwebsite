"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

export function SwanBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#050505]" />
            <ParticleField />
            <WingLines />
        </div>
    );
}

function ParticleField() {
    // Create a sleek star/particle field
    const particles = Array.from({ length: 40 });

    return (
        <div className="absolute inset-0 opacity-30">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: Math.random() * 0.5 + 0.2,
                    }}
                    animate={{
                        y: [null, Math.random() * -20 + "%"],
                        opacity: [null, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: Math.random() * 2 + "px",
                        height: Math.random() * 2 + "px",
                    }}
                />
            ))}
        </div>
    );
}

function WingLines() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid slice"
                className="text-accent"
            >
                <motion.path
                    d="M -100,500 Q 250,200 500,500 T 1100,500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 1],
                        pathOffset: [0, 0, 1],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.path
                    d="M -100,600 Q 250,300 500,600 T 1100,600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 1],
                        pathOffset: [0, 0, 1],
                        opacity: [0, 0.3, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                {/* Abstract Swan Neck Curve */}
                <motion.path
                    d="M 800,800 Q 700,500 500,500 T 200,200"
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="1"
                    strokeDasharray="10 20"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -1000 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="white" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
