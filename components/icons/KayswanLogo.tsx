"use client";

import { motion } from "framer-motion";

interface KayswanLogoProps {
  className?: string;
  animate?: boolean;
}

export function KayswanLogo({ className = "", animate = true }: KayswanLogoProps) {
  const LogoContent = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8dfd3" />
          <stop offset="25%" stopColor="#c4b5a0" />
          <stop offset="50%" stopColor="#a89880" />
          <stop offset="75%" stopColor="#c4b5a0" />
          <stop offset="100%" stopColor="#e8dfd3" />
        </linearGradient>
        <linearGradient id="logoShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
        </linearGradient>
      </defs>
      
      {/* Main K shape */}
      <g fill="url(#logoGradient)">
        {/* Vertical stem of K */}
        <path d="M25 15 L35 15 L35 85 L25 85 Z" />
        {/* Upper diagonal */}
        <path d="M35 50 L65 15 L78 15 L45 52 Z" />
        {/* Lower diagonal */}
        <path d="M40 52 L78 85 L65 85 L35 55 Z" />
        {/* Swan neck curve emerging from top */}
        <path d="M20 15 C10 15 8 25 12 30 C16 35 20 32 22 28 C24 24 22 18 20 15" 
              strokeWidth="1" 
              stroke="url(#logoGradient)" />
        {/* Swan wing detail on right */}
        <path d="M65 45 C72 42 80 38 85 42 C90 46 88 55 82 58 C76 61 70 57 68 52 C78 48 82 52 78 58 C74 64 68 62 65 55" 
              strokeWidth="0.5" 
              stroke="url(#logoGradient)"
              fill="none" />
      </g>
      
      {/* Shine overlay */}
      <path d="M25 15 L35 15 L35 85 L25 85 Z M35 50 L65 15 L78 15 L45 52 Z M40 52 L78 85 L65 85 L35 55 Z" 
            fill="url(#logoShine)" 
            opacity="0.3" />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {LogoContent}
      </motion.div>
    );
  }

  return LogoContent;
}

// Simple text logo as alternative
export function KayswanTextLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      <span className="text-gradient">KS</span>
    </span>
  );
}
