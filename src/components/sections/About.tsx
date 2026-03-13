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
      <div className="mx-auto max-w-[880px]">
        <ScrollReveal>
          <div className="mx-auto max-w-[664px]">
            <h2
              className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.04em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {dict.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.04}>
          <div className="mx-auto mt-8 max-w-[664px] text-[16px] leading-[1.55] text-foreground-secondary">
            <p>{dict.bio}</p>
            <p className="mt-3">
              Trabajo principalmente en productos con inteligencia artificial, backend y sistemas
              cloud, con foco en construir soluciones claras, utiles y listas para produccion.
            </p>
            <p className="mt-3">
              Fuera del codigo, me interesan mucho los procesos creativos, aprender herramientas
              nuevas y probar ideas en proyectos reales.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mx-auto mt-12 max-w-[664px] overflow-hidden rounded-[6px] border border-black/10 bg-[#f5f4f1]">
            <div className="flex min-h-[320px] items-center justify-center px-6 py-10 sm:min-h-[430px] sm:px-10">
              <div className="relative flex w-full max-w-[470px] items-end justify-center">
                <img
                  src="/images/about/about-1.jpg"
                  alt="Rocio photo 1"
                  className="relative z-[1] -mr-2 w-[36%] rounded-[4px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.08)] rotate-[-5deg] grayscale sm:-mr-3"
                />
                <img
                  src="/images/about/about-2.jpeg"
                  alt="Rocio photo 2"
                  className="relative z-[3] w-[40%] rounded-[4px] object-cover shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
                />
                <img
                  src="/images/about/about-3.png"
                  alt="Rocio photo 3"
                  className="relative z-[2] -ml-2 w-[36%] rounded-[4px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.08)] rotate-[7deg] grayscale sm:-ml-3"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-[664px] gap-x-12 gap-y-8 md:grid-cols-2">
          <ScrollReveal delay={0.12}>
            <div>
              <h3 className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                {dict.educationTitle}
              </h3>
              <div className="space-y-2 text-[15px] leading-7 text-foreground-secondary">
                <p>{dict.education.degree1}</p>
                <p>{dict.education.degree2}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div>
              <h3 className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                {dict.languagesTitle}
              </h3>
              <div className="space-y-2 text-[15px] leading-7 text-foreground-secondary">
                {Object.values(dict.languages).map((lang) => (
                  <p key={lang}>{lang}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div>
              <h3 className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                {dict.certificationsTitle}
              </h3>
              <ul className="space-y-2 text-[15px] leading-7 text-foreground-secondary">
                {dict.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div>
              <h3 className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                {dict.skillsTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-[6px] border border-black/10 bg-[#f1f1f1] px-3 py-1 text-[14px] text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
