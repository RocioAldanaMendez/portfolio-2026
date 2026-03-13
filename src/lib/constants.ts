export const SITE_CONFIG = {
  name: "Rocio Mendez",
  email: "ingeniera.mendez.rocio@gmail.com",
  phone: "+54 9 11 2398-5405",
  linkedin: "https://linkedin.com/in/rocio-mendez",
  github: "https://github.com/rocio-mendez",
};

export const SKILLS = [
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },
  { name: "SQL", category: "language" },
  { name: "NoSQL", category: "language" },
  { name: "LLMs", category: "ai" },
  { name: "NLP", category: "ai" },
  { name: "Computer Vision", category: "ai" },
  { name: "AWS", category: "cloud" },
  { name: "Azure", category: "cloud" },
  { name: "GCP", category: "cloud" },
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Power BI", category: "tool" },
  { name: "Railway", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "Scrum", category: "methodology" },
] as const;

export const PROJECT_KEYS = ["svant", "chatai", "scoring", "superhumans"] as const;

export const EXPERIENCE_KEYS = ["wildcat", "docente", "super", "coder", "conae", "prefectura"] as const;

export const PROJECT_TECH: Record<string, string[]> = {
  svant: ["Python", "Azure", "Docker", "Git"],
  chatai: ["Python", "LLMs", "NLP", "BigQuery", "Docker"],
  scoring: ["Python", "Computer Vision", "AI", "Docker"],
  superhumans: ["Python", "Machine Learning", "AI"],
};

export const CAROUSEL_ITEMS = [
  {
    id: "svant",
    eyebrow: "WildCat Media",
    title: "Svant",
    detail: "Carbon emissions platform",
    meta: "Production",
    width: "w-[360px]",
    image: "/images/carousel/svant-custom.png",
  },
  {
    id: "chatai",
    eyebrow: "Super SRL",
    title: "Chat AI",
    detail: "NLP and ad insights",
    meta: "LLMs / BigQuery",
    width: "w-[300px]",
    image: "/images/carousel/chatai-custom.jpg",
  },
  {
    id: "scoring",
    eyebrow: "Super SRL",
    title: "Scoring Tool",
    detail: "Video performance analysis",
    meta: "Computer Vision",
    width: "w-[420px]",
    image: "/images/carousel/scoring-tool.jpg",
  },
  {
    id: "superhumans",
    eyebrow: "Super SRL",
    title: "Super Humans",
    detail: "AI recruiting platform",
    meta: "ML + automation",
    width: "w-[320px]",
    image: "/images/carousel/super-humans.jpg",
  },
  {
    id: "draggan",
    eyebrow: "R&D",
    title: "DragGAN",
    detail: "Image manipulation research",
    meta: "Need reference",
    width: "w-[340px]",
    accent: "linear-gradient(145deg, #2e1065 0%, #7c3aed 100%)",
  },
  {
    id: "stable-diffusion",
    eyebrow: "R&D",
    title: "Stable Diffusion",
    detail: "Generative image pipelines",
    meta: "Need reference",
    width: "w-[380px]",
    accent: "linear-gradient(145deg, #111827 0%, #2563eb 100%)",
  },
  {
    id: "facefusion",
    eyebrow: "R&D",
    title: "FaceFusion",
    detail: "Face swap experimentation",
    meta: "Need reference",
    width: "w-[320px]",
    accent: "linear-gradient(145deg, #3f3f46 0%, #0f766e 100%)",
  },
  {
    id: "motion-ocr",
    eyebrow: "R&D",
    title: "Motion Detection OCR",
    detail: "Video motion and OCR workflows",
    meta: "Need reference",
    width: "w-[400px]",
    accent: "linear-gradient(145deg, #1f2937 0%, #d97706 100%)",
  },
] as const;

export const WORK_ITEMS = [
  {
    id: "svant",
    image: "/images/carousel/svant.jpg",
    pills: ["Platform", "Climate Tech"],
    year: "2025",
    href: "https://www.svant.us/",
  },
  {
    id: "chatai",
    image: "/images/carousel/chat-ai.jpg",
    pills: ["AI Chat", "NLP"],
    year: "2024",
    href: "https://sso.superlab.ai/login",
  },
  {
    id: "scoring",
    image: "/images/carousel/scoring-tool.jpg",
    pills: ["Computer Vision", "Analytics"],
    year: "2024",
    href: "https://scoringtool.superlab.ai/",
  },
  {
    id: "superhumans",
    image: "/images/carousel/super-humans.jpg",
    pills: ["Recruiting", "Machine Learning"],
    year: "2023",
    href: "https://jobs.superlab.ai/",
  },
] as const;
