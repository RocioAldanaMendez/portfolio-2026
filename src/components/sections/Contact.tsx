"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

interface ContactProps {
  dict: {
    heading: string;
    subheading: string;
    emailCta: string;
    or: string;
  };
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="grid gap-8 rounded-[36px] border border-black/10 bg-[#111111] px-8 py-10 text-foreground-inverse shadow-[var(--shadow-card)] sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-14">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/60">
                Let&apos;s Chat
              </p>
              <h2
                className="mt-4 max-w-[10ch] text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {dict.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                {dict.subheading}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/50">
                  Email
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Let's%20work%20together`}
                  className="mt-3 inline-block text-xl font-bold text-white transition-colors hover:text-[#9bb1ff]"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white/80 transition-colors hover:bg-white hover:text-black"
                >
                  LinkedIn
                </a>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white/80 transition-colors hover:bg-white hover:text-black"
                >
                  GitHub
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white/80 transition-colors hover:bg-white hover:text-black"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
