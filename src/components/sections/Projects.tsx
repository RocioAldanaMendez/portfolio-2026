"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WORK_ITEMS } from "@/lib/constants";

interface ProjectsProps {
  dict: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewMore: string;
    items: Record<string, { title: string; description: string; company: string; date: string }>;
  };
}

function HoverPrompt({ active }: { active: boolean }) {
  const fullText = "Let's build an AI workflow with real business impact";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!active) {
      setTypedText("");
      return;
    }

    let index = 0;
    let timeoutId: number | undefined;

    const type = () => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index += 1;
        const delay =
          Math.random() < 0.1 ? 90 + Math.random() * 60 : 28 + Math.random() * 28;
        timeoutId = window.setTimeout(type, delay);
      }
    };

    timeoutId = window.setTimeout(type, 350);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [active]);

  return (
    <div
      className={`pointer-events-none absolute -right-6 -top-5 z-10 hidden w-[182px] origin-top-right rounded-[6px] border border-[#dedcd126] bg-[#2c2c2a] p-3 text-left shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300 md:block md:-right-10 ${
        active ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-90 opacity-0"
      }`}
    >
      <p className="min-h-[30px] text-[10.5px] leading-[1.4] text-[#faf9f5]">
        <span>{typedText}</span>
        <span
          className={`ml-[1px] inline-block h-[12px] w-px align-middle ${
            active ? "animate-pulse bg-[#faf9f5]" : "bg-transparent"
          }`}
        />
      </p>
      <div className="mt-[9px] flex items-center justify-between">
        <div className="flex h-[21px] w-[21px] items-center justify-center rounded-[4.5px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2.5V9.5M2.5 6H9.5"
              stroke="#c2c0b6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-[2px]">
          <span className="mr-[2px] text-[9px] text-[#c2c0b6]">Opus 4.6</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="#c2c0b6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="ml-1 flex h-[21px] w-[21px] items-center justify-center rounded-[4.5px] bg-[#d97757]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 9.5V2.5M6 2.5L3 5.5M6 2.5L9 5.5"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({
  project,
  work,
  index,
}: {
  project: ProjectsProps["dict"]["items"][string];
  work: (typeof WORK_ITEMS)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const showPrompt = index === 0;
  const content = (
    <>
      <span
        className="mb-3 block text-[20px] font-medium leading-[1.4] text-foreground-secondary transition-all duration-200 group-hover:font-bold group-hover:text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {project.title}
      </span>

      <div className="relative block w-full overflow-visible">
        {showPrompt ? <HoverPrompt active={isHovered} /> : null}

        <div className="relative w-full overflow-hidden rounded-[6px] border border-black/6 bg-white/40">
          <div className="relative aspect-[5/4] w-full xl:h-[420px] xl:aspect-auto">
            <img
              src={work.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <img
              src={work.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-500 group-hover:opacity-0"
            />
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {work.pills.map((pill) => (
            <span
              key={pill}
              className="rounded-[6px] border border-black/6 bg-[#f1f1f1] px-3 py-1 text-[14px] text-foreground-secondary"
            >
              {pill}
            </span>
          ))}
        </div>

        <span className="text-[16px] text-foreground-muted">{work.year}</span>
      </div>
    </>
  );

  return (
    <article
      className="group relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {work.href ? (
        <a
          href={work.href}
          target="_blank"
          rel="noreferrer"
          className="block"
          aria-label={`Open ${project.title}`}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}

export function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[664px] xl:max-w-[880px]">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-[664px] text-left xl:max-w-[880px]">
            <h2
              className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-[32px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {dict.sectionTitle}
            </h2>
            <p className="mt-4 max-w-[664px] text-base leading-7 text-foreground-secondary">
              {dict.sectionSubtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto flex max-w-[664px] flex-col gap-10 xl:max-w-[880px] xl:gap-14">
          {WORK_ITEMS.map((work, index) => {
            const key = work.id;
            const project = dict.items[key];
            if (!project) return null;

            return (
              <ScrollReveal key={key} delay={index * 0.06}>
                <ProjectRow project={project} work={work} index={index} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
