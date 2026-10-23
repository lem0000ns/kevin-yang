import type { AccordionEntry } from "@/components/accordion/types";

export const projects: AccordionEntry[] = [
  {
    id: "yangba",
    title: "YangBA",
    subtitle: "NBA data web service",
    summary:
      "Web service that queries different NBA-related data to users, including player profiles and a ranking system.",
    links: [
      {
        label: "Access here",
        href: "https://www.yangba.net",
      },
    ],
  },
  {
    id: "yanguages",
    title: "Yanguages",
    subtitle: "Language-learning platform",
    summary:
      "Language-learning platform that allows users to write diaries, featuring a vocabulary game and customizable dictionary.",
    links: [
      {
        label: "Access here",
        href: "https://www.yanguages.com",
      },
    ],
  },
  {
    id: "hangugnese",
    title: "Hangugnese",
    subtitle: "English to Blend of Korean, Hanja, Loanword",
    summary:
      "Translates English to Korean and marks where each word comes from, lighting up Sino-Korean words and Western loanwords.",
    links: [
      {
        label: "Access here",
        href: "https://www.hangugnese.vercel.app",
      },
    ],
  },
  {
    id: "nba-analytics",
    title: "Predictive NBA Analytics Platform",
    subtitle: "Machine Learning Engineer",
    summary:
      "ML models for live win probability and player forecasting, with a socket-based subscription system for real-time game updates.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ucsb-cs148-w26/pj09-sports-betting",
      },
    ],
  },
];
