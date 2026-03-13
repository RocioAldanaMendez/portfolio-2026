"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SKILLS } from "@/lib/constants";

interface AboutProps {
  dict: {
    sectionTitle: string;
    bio: string;
    educationTitle: string;
    education: { degree1: string; degree2: string };
    certificationsTitle: string;
    certifications: string[];
    languagesTitle: string;
    languages: { es: string; en: string; ru: string };
    skillsTitle: string;
  };
}

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-14 grid gap-6 border-t border-black/10 pt-8 lg:grid-cols-[0.95fr_1.4fr]">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-accent">
                Background
              </p>
            </div>
            <div>
              <h2
                className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {dict.sectionTitle}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-10">
            <ScrollReveal>
              <div className="rounded-[32px] border border-black/10 bg-background-card p-8 shadow-[var(--shadow-card)] backdrop-blur sm:p-10">
                <p className="max-w-3xl text-xl leading-[1.7] text-foreground-secondary sm:text-2xl">
                  {dict.bio}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-black/10 bg-background-card p-7 shadow-[var(--shadow-card)] backdrop-blur">
                  <h3 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                    {dict.educationTitle}
                  </h3>
                  <div className="space-y-3">
                    <p className="text-base leading-7 text-foreground">{dict.education.degree1}</p>
                    <p className="text-base leading-7 text-foreground">{dict.education.degree2}</p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-black/10 bg-background-card p-7 shadow-[var(--shadow-card)] backdrop-blur">
                  <h3 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                    {dict.languagesTitle}
                  </h3>
                  <div className="space-y-3">
                    {Object.values(dict.languages).map((lang) => (
                      <p key={lang} className="text-base leading-7 text-foreground">
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal delay={0.15}>
              <div className="rounded-[28px] border border-black/10 bg-background-card p-7 shadow-[var(--shadow-card)] backdrop-blur">
                <h3 className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                  {dict.skillsTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-[28px] border border-black/10 bg-background-card p-7 shadow-[var(--shadow-card)] backdrop-blur">
                <h3 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                  {dict.certificationsTitle}
                </h3>
                <ul className="space-y-4">
                  {dict.certifications.map((cert, i) => (
                    <li key={i} className="border-b border-black/10 pb-4 text-[15px] leading-7 text-foreground-secondary last:border-b-0 last:pb-0">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
