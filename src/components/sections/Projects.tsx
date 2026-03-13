"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECT_KEYS, PROJECT_TECH } from "@/lib/constants";

const PROJECT_COLORS: Record<string, string> = {
  svant: "linear-gradient(145deg, #0f172a 0%, #172554 100%)",
  chatai: "linear-gradient(145deg, #1f2937 0%, #1d4ed8 100%)",
  scoring: "linear-gradient(145deg, #111827 0%, #0f766e 100%)",
  superhumans: "linear-gradient(145deg, #312e81 0%, #7c3aed 100%)",
  medinova: "linear-gradient(145deg, #1f2937 0%, #4b5563 100%)",
};

interface ProjectsProps {
  dict: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewMore: string;
    items: Record<string, { title: string; description: string; company: string; date: string }>;
  };
}

export function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-14 grid gap-6 border-t border-black/10 pt-8 lg:grid-cols-[0.95fr_1.4fr]">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-accent">
                Selected Work
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

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECT_KEYS.map((key, index) => {
            const project = dict.items[key];
            if (!project) return null;
            return (
              <ProjectCard
                key={key}
                title={project.title}
                description={project.description}
                company={project.company}
                date={project.date}
                tech={PROJECT_TECH[key] || []}
                index={index}
                color={PROJECT_COLORS[key] || "#1a1a2e"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
