export const projectCollections: {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  badges?: string[];
  link?: string;
  showOnHome?: boolean;
}[] = [
  {
    title: "Readiness Index",
    subtitle: "Professional · Full Stack @ INCIT",
    description:
      "An assessment platform that brings together industrial evaluation frameworks to help manufacturing organizations assess their transformation readiness.",
    badges: ["React", "Vite", "Nest.js", "PostgreSQL", "AWS"],
    link: "project/readiness-index",
  },
  {
    title: "Prioritise+ Marketplace",
    subtitle: "Professional · Full Stack @ INCIT",
    description:
      "A matchmaking platform that connects manufacturing companies with solution providers based on gaps identified through industry assessments.",
    badges: [
      "React",
      "Vite",
      "Nest.js",
      "PostgreSQL",
      "AWS",
      "Vite Plugin Federation",
    ],
    link: "project/prioritise-marketplace",
    showOnHome: true,
  },
  {
    title: "Medqlab",
    subtitle: "Professional · Full Stack @ PT. Applimetis Parama Solusi",
    description:
      "A laboratory information system for managing laboratory workflows and related operational data.",
    badges: ["Next.js", "Nest.js", "PostgreSQL", "RabbitMQ"],
    link: "project/medqlab",
    showOnHome: true,
  },
  {
    title: "SpendWise",
    subtitle: "Personal Project · Full Stack Mobile App",
    description:
      "An offline-first mobile expense tracker built for fast, local-first transaction logging with seamless cloud background sync.",
    badges: ["React Native", "Supabase", "PostgreSQL", "Google OAuth"],
    link: "project/spendwise",
    showOnHome: true,
  },
];
