"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface HeroProps {
  dict: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    scrollHint: string;
  };
}

function FloatingBadge({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={`rounded-sm border border-border bg-background-soft px-5 py-3 text-[15px] font-semibold text-foreground shadow-[var(--shadow-card)] ${className}`}
    >
      {label}
    </div>
  );
}

function Pointer({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg width="24" height="28" viewBox="0 0 18 24" fill="none">
        <path
          d="M4.39 1.46L0.57 17.88c-.3 1.27.97 2.31 2.1 1.72l3.93-2.06c.32-.17.7-.18 1.03-.03l4.28 1.98c1.2.56 2.45-.57 2.04-1.84L9.13 1.4C8.72.14 6.87.14 6.46 1.4L4.39 1.46z"
          fill="#222222"
        />
      </svg>
    </div>
  );
}

function CursorCluster({
  label,
  className,
  pointerClassName,
}: {
  label: string;
  className: string;
  pointerClassName: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let pickTimeout = 0;
    let animationId = 0;
    const range = 18;

    const pickTarget = () => {
      targetX = (Math.random() - 0.5) * range * 2;
      targetY = (Math.random() - 0.5) * range * 2;
      pickTimeout = window.setTimeout(pickTarget, 800 + Math.random() * 1500);
    };

    const animate = () => {
      x += (targetX - x) * 0.04;
      y += (targetY - y) * 0.04;
      node.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
      animationId = window.requestAnimationFrame(animate);
    };

    pickTimeout = window.setTimeout(() => {
      pickTarget();
      animate();
    }, Math.random() * 1000);

    return () => {
      window.clearTimeout(pickTimeout);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`absolute hidden lg:flex ${className}`}
    >
      <div className="relative">
        <FloatingBadge label={label} className="block" />
        <Pointer className={`absolute ${pointerClassName}`} />
      </div>
    </motion.div>
  );
}

function Patch({
  src,
  alt,
  className,
  rotation,
  hoverRotation,
}: {
  src: string;
  alt: string;
  className: string;
  rotation: number;
  hoverRotation: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      whileHover={{ scale: 1.05, rotate: hoverRotation }}
      transition={{ duration: 0.7 }}
      className={`absolute hidden aspect-square items-center justify-center lg:flex ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-full object-contain drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)]"
      />
    </motion.div>
  );
}

export function Hero({ dict }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-14 pt-28 md:px-8 lg:px-12"
    >
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <CursorCluster
        label="Systems Engineer"
        className="left-[15%] top-[31%]"
        pointerClassName="left-[74%] top-[86%] rotate-[110deg]"
      />
      <CursorCluster
        label="AI Specialist"
        className="bottom-[27%] right-[11%]"
        pointerClassName="-left-[18%] top-[-22%] -rotate-[70deg]"
      />
      <Patch
        src="/images/hero/sticker-left.jpg"
        alt="Left hero sticker"
        className="-left-10 bottom-[8%] h-[250px] w-[250px]"
        rotation={10}
        hoverRotation={16}
      />
      <Patch
        src="/images/hero/sticker-right.jpg"
        alt="Right hero sticker"
        className="-right-6 top-[16%] h-[220px] w-[220px]"
        rotation={-6}
        hoverRotation={0}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[980px] text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="mx-auto max-w-[760px] text-[64px] font-black leading-[0.92] tracking-[-0.06em] text-foreground sm:text-[84px] lg:text-[112px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {dict.greeting.toLowerCase()} {dict.name.toLowerCase()}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-[560px] text-base leading-[1.6] text-foreground-secondary sm:text-[18px]"
        >
          {dict.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-bounce-slow text-foreground-muted"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 4l7 7 7-7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 14l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
