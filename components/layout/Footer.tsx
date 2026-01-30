"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-6">
          <Image
            src="/logo/kayswan-logo.png"
            alt="Kayswan"
            width={48}
            height={48}
            className="mx-auto invert opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Contact Links */}
        <div className="flex items-center justify-center gap-6 text-sm text-foreground-muted">
          <a
            href="mailto:contact@kayswan.xyz"
            className="hover:text-foreground transition-colors"
          >
            contact@kayswan.xyz
          </a>
          <span className="text-border">·</span>
          <a
            href="https://twitter.com/Kayswan__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            @Kayswan__
          </a>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-8 text-sm text-foreground-muted">
          <Link href="/portfolio" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-foreground-muted/50 mt-8">
          © {currentYear} Kayswan LLC
        </p>
      </div>
    </footer>
  );
}
