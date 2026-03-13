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

export const PROJECT_KEYS = ["svant", "chatai", "scoring", "superhumans", "medinova"] as const;

export const EXPERIENCE_KEYS = ["wildcat", "docente", "super", "coder", "conae", "prefectura"] as const;

export const PROJECT_TECH: Record<string, string[]> = {
  svant: ["Python", "Azure", "Docker", "Git"],
  chatai: ["Python", "LLMs", "NLP", "BigQuery", "Docker"],
  scoring: ["Python", "Computer Vision", "AI", "Docker"],
  superhumans: ["Python", "Machine Learning", "AI"],
  medinova: ["Python", "AI", "Healthcare", "Data Science"],
};
