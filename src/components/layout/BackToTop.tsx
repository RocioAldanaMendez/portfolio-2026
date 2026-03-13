"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function BackToTop() {
  const { scrollDirection, scrollY } = useScrollDirection();
  const visible = scrollY > 700;

  const handleBackToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.history.replaceState(null, "", "#home");
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.25 }}
          onClick={handleBackToTop}
          className={`fixed bottom-24 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background-card text-foreground shadow-[var(--shadow-card)] backdrop-blur-xl transition-transform hover:scale-105 md:bottom-28 md:right-5 ${
            scrollDirection === "down" ? "translate-y-0" : "translate-y-0"
          }`}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M12 5L6 11M12 5L18 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
