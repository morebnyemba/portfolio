export const contact = {
  whatsapp: "https://wa.me/263787211325",
  email: "morebnyemba@gmail.com",
  agency: "https://slykertech.net",
};

export const stack = [
  {
    title: "Backend",
    items: ["Python", "Django & DRF", "Flask · FastAPI", "Erlang (real-time)"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js (App Router)", "React Native", "Beeware (native mobile)"],
  },
  {
    title: "AI & Automation",
    items: [
      "OpenAI & Anthropic Claude APIs",
      "Agentic workflows & tool-calling",
      "RAG pipelines & vector search",
      "Conversational / WhatsApp AI automation",
    ],
  },
  {
    title: "Infrastructure",
    items: ["Docker & microservices", "PostgreSQL · Redis", "Nginx Proxy Manager"],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url?: string;
};

export const products: Project[] = [
  {
    name: "AutoWhats",
    description: "Multi-tenant WhatsApp automation SaaS with AI-driven conversational flows.",
    tags: ["Python", "Django", "LLM Integration"],
    url: "https://autowhats.co.zw",
  },
  {
    name: "Hanna",
    description: "Conversational AI engine for automated, context-aware chat experiences.",
    tags: ["Python", "LLM Integration"],
  },
  {
    name: "StayAfrica",
    description: "Cross-platform travel & booking app for the African market.",
    tags: ["TypeScript", "React Native"],
    url: "https://stayafrica.app",
  },
];

export const clientSites: Project[] = [
  { name: "Slyker Tech Web Services", description: "Software & web engineering agency.", tags: [], url: "https://slykertech.net" },
  { name: "Innovanti", description: "Client platform.", tags: [], url: "https://innovanti.co.zw" },
  { name: "Auqamel", description: "Client platform.", tags: [], url: "https://auqamel.co.zw" },
  { name: "Skypax Freight", description: "Logistics & freight platform.", tags: [], url: "https://skypaxfreight.co.zw" },
  { name: "Verity People Solutions", description: "HR & people solutions platform.", tags: [], url: "https://veritaspeople.co.zw" },
];
