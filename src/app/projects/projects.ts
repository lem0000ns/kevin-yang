import type { AccordionEntry } from "@/components/accordion/types";

export const projects: AccordionEntry[] = [
  {
    id: "nba-analytics",
    title: "Predictive NBA Analytics Platform",
    subtitle: "Machine Learning Engineer",
    summary:
      "ML models for live win probability and player forecasting, with a socket-based subscription system for real-time game updates.",
    bullets: [
      "Built logistic regression and XGBoost models for win probability and player stat forecasting, using LLM workflows to preprocess 30K+ play-by-play rows",
      "Designed a topic-based socket subscription system so clients only receive updates for selected games, cutting unnecessary data transmission by ~70%",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ucsb-cs148-w26/pj09-sports-betting",
      },
    ],
  },
  {
    id: "yangba",
    title: "YangBA",
    subtitle: "NBA data web service",
    summary:
      "Web service that queries different NBA-related data to users, including player profiles and a ranking system.",
    bullets: [
      "Web service querying NBA-related data: player profiles, ranking system",
      "Frontend: React + TypeScript — tooltips, autocomplete, unique player profiles",
      "Backend: AWS RDS + MySQL; images from online repository; player info web-scraped from Wikipedia with BeautifulSoup",
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/lem0000ns/yba_frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/lem0000ns/yba_backend",
      },
    ],
  },
  {
    id: "yanguages",
    title: "Yanguages",
    subtitle: "Language-learning platform",
    summary:
      "Language-learning platform that allows users to write diaries, featuring a vocabulary game and customizable dictionary.",
    bullets: [
      "Language-learning platform with diary writing, vocabulary game, customizable dictionary",
      "Frontend: Next.js + Tailwind CSS",
      "Backend: Node + Express; Passport.js auth; user data in MySQL on AWS RDS",
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/lem0000ns/yba_frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/lem0000ns/yba_backend",
      },
    ],
  },
];
