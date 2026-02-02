"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function FloatingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-4 md:top-6 inset-x-0 z-50 mx-auto max-w-2xl px-4 transition-all duration-300",
                    scrolled ? "translate-y-0" : "translate-y-0"
                )}
            >
                <nav
                    className={cn(
                        "relative flex items-center justify-between rounded-full bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-2xl shadow-black/20",
                        "transition-all duration-300 hover:border-white/20"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="relative z-50 text-xl font-serif font-bold tracking-tight text-white hover:text-accent transition-colors">
                        Kayswan
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-accent",
                                    pathname === item.href ? "text-accent" : "text-white/70"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="text-xs font-semibold uppercase tracking-wider bg-white text-black px-4 py-2 rounded-full hover:bg-accent hover:text-black transition-colors"
                        >
                            Start Project
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 p-1 text-white/80 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-serif font-medium text-white/90 hover:text-accent transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 text-sm font-bold uppercase tracking-widest border border-white/20 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all"
                        >
                            Start Project
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
