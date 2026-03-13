"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type MascotProps = {
  locale: string;
};

type Position = {
  x: number;
  y: number;
};

const MASCOT_SIZE = 58;

export function Mascot({ locale }: MascotProps) {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState<Position>({ x: 24, y: 220 });
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = useMemo(
    () =>
      locale === "es"
        ? [
            "Hola, sigo explorando.",
            "Click y me muevo.",
            "Estoy paseando por tu portfolio.",
            "Vuelvo en un rato por aca.",
          ]
        : [
            "Hi, still exploring.",
            "Tap me and I move.",
            "Just wandering around your portfolio.",
            "I'll orbit back soon.",
          ],
    [locale]
  );

  useEffect(() => {
    const moveMascot = () => {
      const maxX = Math.max(24, window.innerWidth - MASCOT_SIZE - 24);
      const maxY = Math.max(180, window.innerHeight - MASCOT_SIZE - 120);

      const targetX = 24 + Math.random() * (maxX - 24);
      const targetY = 120 + Math.random() * (maxY - 120);

      setPosition({ x: targetX, y: targetY });
    };

    moveMascot();

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(moveMascot, 6500);
    window.addEventListener("resize", moveMascot);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", moveMascot);
    };
  }, [prefersReducedMotion]);

  const handleMascotClick = () => {
    setMessageIndex((current) => (current + 1) % messages.length);

    const maxX = Math.max(24, window.innerWidth - MASCOT_SIZE - 24);
    const maxY = Math.max(180, window.innerHeight - MASCOT_SIZE - 120);

    setPosition({
      x: 24 + Math.random() * (maxX - 24),
      y: 120 + Math.random() * (maxY - 120),
    });
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[52]"
      animate={{ x: position.x, y: position.y }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 1.8,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <div className="pointer-events-auto relative">
        <motion.button
          type="button"
          onClick={handleMascotClick}
          whileTap={{ scale: 0.96 }}
          className="relative flex h-[66px] w-[66px] items-center justify-center"
          aria-label="Interactive mascot"
        >
          <motion.div
            animate={{ rotate: [0, -2, 2, 0], y: [0, -2, 0] }}
            transition={{
              duration: 3.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <svg
              width="58"
              height="58"
              viewBox="0 0 78 78"
              fill="none"
              aria-hidden="true"
              shapeRendering="crispEdges"
              className="drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
            >
              <rect x="16" y="26" width="4" height="4" fill="#13161B" />
              <rect x="16" y="22" width="4" height="4" fill="#13161B" />
              <rect x="20" y="18" width="4" height="4" fill="#13161B" />
              <rect x="24" y="14" width="4" height="4" fill="#13161B" />
              <rect x="28" y="10" width="4" height="4" fill="#13161B" />
              <rect x="32" y="14" width="4" height="4" fill="#13161B" />
              <rect x="20" y="30" width="4" height="4" fill="#13161B" />
              <rect x="24" y="34" width="4" height="4" fill="#13161B" />

              <rect x="28" y="18" width="28" height="20" fill="#BCA08B" />
              <rect x="24" y="22" width="4" height="12" fill="#BCA08B" />
              <rect x="56" y="22" width="4" height="12" fill="#BCA08B" />
              <rect x="32" y="14" width="8" height="4" fill="#13161B" />
              <rect x="48" y="14" width="8" height="4" fill="#13161B" />
              <rect x="36" y="10" width="4" height="4" fill="#13161B" />
              <rect x="48" y="10" width="4" height="4" fill="#13161B" />
              <rect x="36" y="14" width="4" height="4" fill="#F0CCAA" />
              <rect x="48" y="14" width="4" height="4" fill="#F0CCAA" />

              <rect x="40" y="26" width="4" height="4" fill="#4B342B" />
              <rect x="48" y="26" width="4" height="4" fill="#4B342B" />
              <rect x="44" y="30" width="4" height="4" fill="#4B342B" />
              <rect x="52" y="30" width="4" height="4" fill="#4B342B" />
              <rect x="40" y="34" width="8" height="4" fill="#94786B" />

              <rect x="28" y="38" width="28" height="16" fill="#7D5642" />
              <rect x="24" y="42" width="4" height="8" fill="#7D5642" />
              <rect x="56" y="42" width="8" height="8" fill="#7D5642" />
              <rect x="32" y="42" width="8" height="4" fill="#CDB6A0" />
              <rect x="28" y="46" width="8" height="4" fill="#CDB6A0" />
              <rect x="36" y="50" width="8" height="4" fill="#A88369" />

              <rect x="28" y="54" width="4" height="12" fill="#4B342B" />
              <rect x="36" y="54" width="4" height="12" fill="#4B342B" />
              <rect x="48" y="54" width="4" height="12" fill="#4B342B" />
              <rect x="56" y="54" width="4" height="12" fill="#4B342B" />

              <rect x="24" y="66" width="8" height="4" fill="#13161B" />
              <rect x="36" y="66" width="8" height="4" fill="#13161B" />
              <rect x="48" y="66" width="8" height="4" fill="#13161B" />
              <rect x="56" y="66" width="8" height="4" fill="#13161B" />
            </svg>
          </motion.div>
        </motion.button>

        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-14 left-1/2 min-w-[150px] -translate-x-1/2 rounded-full border border-border bg-background-card px-4 py-2 text-center text-[12px] font-semibold text-foreground-secondary shadow-[var(--shadow-card)] backdrop-blur-xl"
        >
          {messages[messageIndex]}
        </motion.div>
      </div>
    </motion.div>
  );
}
