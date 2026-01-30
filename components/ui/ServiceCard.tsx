"use client";

import {
  Music,
  Building2,
  Newspaper,
  Target,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  music: Music,
  building: Building2,
  newspaper: Newspaper,
  target: Target,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  showFeatures?: boolean;
}

export function ServiceCard({
  icon,
  title,
  description,
  features = [],
  showFeatures = false,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Music;

  return (
    <div className="h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-white/5 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 group">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white/10">
        <Icon className="w-6 h-6 text-foreground-muted transition-colors duration-300 group-hover:text-foreground" />
      </div>

      <h3 className="text-xl font-display font-bold text-foreground mb-3">
        {title}
      </h3>

      <p className="text-foreground-muted leading-relaxed flex-grow">
        {description}
      </p>

      {showFeatures && features.length > 0 && (
        <ul className="mt-6 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground-muted"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
