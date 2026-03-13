"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  company: string;
  date: string;
  tech: string[];
  index: number;
  color: string;
}

export function ProjectCard({ title, description, company, date, tech, index, color }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-black/10"
      style={{ background: color }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
      <div className="relative p-8 sm:p-10">
        <motion.div style={{ x, y }}>
          <div className="mb-10 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/60">
                {company}
              </p>
              <h3
                className="max-w-[13ch] text-3xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
            </div>
            <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
              {date}
            </span>
          </div>

          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
