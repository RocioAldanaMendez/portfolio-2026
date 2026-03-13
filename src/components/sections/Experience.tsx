"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPERIENCE_KEYS } from "@/lib/constants";

interface ExperienceProps {
  dict: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Record<string, {
      role: string;
      company: string;
      location: string;
      date: string;
      description: string;
    }>;
  };
}

export function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-14 grid gap-6 border-t border-black/10 pt-8 lg:grid-cols-[0.95fr_1.4fr]">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-accent">
                Career Path
              </p>
            </div>
            <div>
              <h2
                className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {dict.sectionTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-foreground-secondary sm:text-lg">
                {dict.sectionSubtitle}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-0 divide-y divide-black/10 rounded-[32px] border border-black/10 bg-background-card px-6 shadow-[var(--shadow-card)] backdrop-blur sm:px-8">
          {EXPERIENCE_KEYS.map((key, index) => {
            const item = dict.items[key];
            if (!item) return null;

            return (
              <ScrollReveal key={key} delay={index * 0.08}>
                <div className="group grid gap-4 py-8 lg:grid-cols-[220px_220px_1fr] lg:gap-8">
                  <div>
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                      {item.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-foreground-secondary">
                      {item.location}
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-black tracking-[-0.04em] text-foreground sm:text-3xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.role}
                    </h3>
                    <p className="mb-3 mt-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-accent">
                      {item.company}
                    </p>
                    <p className="max-w-3xl text-[15px] leading-7 text-foreground-secondary sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
