"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { CAROUSEL_ITEMS, SITE_CONFIG } from "@/lib/constants";

interface PhotoCarouselProps {
  dict: {
    items: Record<string, { title: string; description: string; company: string; date: string }>;
  };
}

type CarouselCard = {
  id: string;
  eyebrow: string;
  title: string;
  detail: string;
  meta: string;
  accent?: string;
  width: string;
  image?: string;
};

export function PhotoCarousel({ dict }: PhotoCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.8);
  const targetSpeedRef = useRef(0.8);

  const cards = useMemo<CarouselCard[]>(() => {
    return [
      {
        id: "intro",
        eyebrow: "Now building",
        title: "AI systems with real operational impact",
        detail: "Architecture / backend / cloud / production delivery",
        meta: SITE_CONFIG.name,
        accent: "linear-gradient(145deg, #f3ede4 0%, #dcd3c5 100%)",
        width: "w-[420px]",
      },
      ...CAROUSEL_ITEMS,
      {
        id: "contact",
        eyebrow: "Based in",
        title: "Buenos Aires, shipping globally",
        detail: "Open to product, AI, and backend collaborations",
        meta: SITE_CONFIG.email,
        accent: "linear-gradient(145deg, #f2cc52 0%, #d98b1f 100%)",
        width: "w-[340px]",
      },
    ];
  }, [dict.items]);

  const loopCards = prefersReducedMotion ? cards : [...cards, ...cards];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let animationId = 0;
    let position = 0;
    let halfWidth = track.scrollWidth / 2;

    const resizeObserver = new ResizeObserver(() => {
      halfWidth = track.scrollWidth / 2;
    });

    resizeObserver.observe(track);

    const handleEnter = () => {
      targetSpeedRef.current = 0.3;
    };

    const handleLeave = () => {
      targetSpeedRef.current = 0.8;
    };

    const animate = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;
      position -= speedRef.current;

      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      animationId = window.requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, [prefersReducedMotion, loopCards.length]);

  return (
    <section aria-label="Featured media carousel" className="mt-6">
      <div
        ref={containerRef}
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div
          ref={trackRef}
          className={`flex gap-2 px-2 md:gap-6 md:px-6 ${prefersReducedMotion ? "overflow-x-auto pb-2 [scrollbar-width:none]" : ""}`}
        >
          {loopCards.map((card, index) => (
            <article
              key={`${card.id}-${index}`}
              className={`relative h-[220px] shrink-0 overflow-hidden rounded-[10px] border border-black/10 md:h-[280px] lg:h-[400px] ${card.width}`}
              style={{ background: card.image ? undefined : card.accent }}
            >
              {card.image ? (
                <>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/28 to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_35%)]" />
              )}
              <div className="relative flex h-full flex-col justify-between p-5 text-white md:p-6 lg:p-7">
                <div>
                  <p className={`text-[11px] font-extrabold uppercase tracking-[0.18em] ${card.id === "intro" ? "text-black/55" : card.image ? "text-white/85" : "text-white/70"}`}>
                    {card.eyebrow}
                  </p>
                  <h3
                    className={`mt-3 max-w-[14ch] text-2xl font-black leading-[0.95] tracking-[-0.05em] md:text-3xl lg:text-4xl ${card.id === "intro" ? "text-black" : "text-white"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                </div>

                <div className={card.id === "intro" ? "text-black" : "text-white"}>
                  <p className={`max-w-[24ch] text-sm leading-6 md:text-[15px] ${card.id === "intro" ? "text-black/70" : card.image ? "text-white/92" : "text-white/80"}`}>
                    {card.detail}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className={`rounded-full border px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] md:text-[11px] ${card.id === "intro" ? "border-black/10 bg-black/5 text-black/70" : card.image ? "border-white/20 bg-black/20 text-white/92 backdrop-blur-sm" : "border-white/10 bg-white/10 text-white/80"}`}>
                      {card.meta}
                    </span>
                    <span className={`text-5xl font-black tracking-[-0.08em] opacity-20 md:text-6xl ${card.id === "intro" ? "text-black" : "text-white"}`}>
                      {String(index % cards.length + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
