"use client";

import { motion, useReducedMotion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`absolute hidden rounded-sm border border-border bg-background-soft px-5 py-3 text-[15px] font-semibold text-foreground shadow-[var(--shadow-card)] lg:block ${className}`}
    >
      {label}
    </motion.div>
  );
}

function Pointer({ className }: { className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`absolute hidden lg:block ${className}`}
    >
      <svg width="24" height="28" viewBox="0 0 18 24" fill="none">
        <path
          d="M4.39 1.46L0.57 17.88c-.3 1.27.97 2.31 2.1 1.72l3.93-2.06c.32-.17.7-.18 1.03-.03l4.28 1.98c1.2.56 2.45-.57 2.04-1.84L9.13 1.4C8.72.14 6.87.14 6.46 1.4L4.39 1.46z"
          fill="#222222"
        />
      </svg>
    </motion.div>
  );
}

function Patch({
  title,
  subtitle,
  className,
  palette,
}: {
  title: string;
  subtitle: string;
  className: string;
  palette: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 5 }}
      whileHover={{ scale: 1.05, rotate: 8 }}
      transition={{ duration: 0.7 }}
      className={`absolute hidden aspect-square items-center justify-center rounded-full border-[5px] border-[#d2c7b5] shadow-[var(--shadow-card)] lg:flex ${className}`}
      style={{ background: palette }}
    >
      <div className="flex h-[78%] w-[78%] flex-col items-center justify-center rounded-full border border-black/10 bg-background-soft text-center">
        <span
          className="text-5xl font-extrabold uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </span>
        <span className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-foreground-secondary">
          {subtitle}
        </span>
      </div>
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
      <FloatingBadge label="Systems Engineer" className="left-[16%] top-[30%]" />
      <Pointer className="left-[25%] top-[37%] rotate-[110deg]" />
      <Pointer className="bottom-[31%] right-[23%] -rotate-[70deg]" />
      <FloatingBadge label="AI Specialist" className="bottom-[26%] right-[12%]" />
      <Patch
        title="AR"
        subtitle="Buenos Aires"
        className="-left-10 bottom-[8%] h-[250px] w-[250px]"
        palette="linear-gradient(145deg, #a8d4ff 0%, #f3f7fb 60%, #df4f35 60%, #df4f35 100%)"
      />
      <Patch
        title="AI"
        subtitle="Backend + Cloud"
        className="-right-6 top-[16%] h-[220px] w-[220px]"
        palette="linear-gradient(145deg, #f2cc52 0%, #e6a81a 60%, #efddb0 100%)"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[980px] text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="mx-auto max-w-[900px] text-[64px] font-black leading-[0.92] tracking-[-0.06em] text-foreground sm:text-[92px] lg:text-[132px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {dict.greeting.toLowerCase()} {dict.name.toLowerCase()}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-[720px] text-lg leading-[1.65] text-foreground-secondary sm:text-[22px]"
        >
          {dict.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="rounded-full border border-border-strong bg-background-card px-5 py-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground shadow-[var(--shadow-card)] backdrop-blur">
            AI Products
          </span>
          <span className="rounded-full border border-border-strong bg-background-card px-5 py-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground shadow-[var(--shadow-card)] backdrop-blur">
            Scalable Backend
          </span>
          <span className="rounded-full border border-border-strong bg-background-card px-5 py-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground shadow-[var(--shadow-card)] backdrop-blur">
            Cloud Systems
          </span>
        </motion.div>
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
