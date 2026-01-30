"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300";

    const variants = {
      primary:
        "bg-foreground text-background hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-100",
      secondary:
        "bg-card text-foreground hover:bg-card-hover border border-border hover:border-white/10",
      outline:
        "border border-white/10 text-foreground hover:bg-white/5 hover:border-white/20",
      ghost: 
        "text-foreground-muted hover:text-foreground hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
