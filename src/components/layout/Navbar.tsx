"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  dict: {
    home: string;
    work: string;
    experience: string;
    about: string;
    contact: string;
  };
  locale: string;
}

const navLinks = [
  { key: "home", href: "#home" },
  { key: "work", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
] as const;

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Argentina/Buenos_Aires",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-medium tabular-nums">{time}</span>;
}

export function Navbar({ dict, locale }: NavbarProps) {
  const { scrollDirection, scrollY } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hidden = scrollDirection === "down" && scrollY > 100;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <nav className="mx-auto mt-3 flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <div className="hidden items-center gap-2 rounded-full border border-border bg-background-card px-4 py-2 text-sm text-foreground-secondary shadow-[var(--shadow-card)] backdrop-blur md:flex">
            <span>Buenos Aires</span>
            <span className="text-accent">&rarr;</span>
            <LiveClock />
          </div>

          <a
            href="#home"
            className="rounded-full border border-border bg-background-card px-4 py-2 text-sm font-extrabold uppercase tracking-[0.2em] shadow-[var(--shadow-card)] backdrop-blur md:hidden"
          >
            RM.
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-background-card px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur md:flex">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="rounded-full px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-white/60 hover:text-accent"
              >
                {dict[link.key as keyof typeof dict]}
              </a>
            ))}
            <div className="pl-1">
              <ThemeToggle />
            </div>
            <div className="pl-1">
              <LanguageToggle locale={locale} />
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <LanguageToggle locale={locale} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full border border-border bg-background-card p-3 shadow-[var(--shadow-card)]"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-foreground"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-foreground"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-foreground"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-extrabold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-accent"
                >
                  {dict[link.key as keyof typeof dict]}
                </motion.a>
              ))}
              <ThemeToggle />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
