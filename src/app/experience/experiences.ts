import type { AccordionEntry } from "@/components/accordion/types";

export const experiences: AccordionEntry[] = [
  {
    id: "research-assistant",
    title: "Research Assistant",
    subtitle: "UC Santa Barbara AI Group",
    dateRange: "March 2025 – Present",
    summary:
      "Currently working on multimodal source attribution for image-to-image generation.",
    links: [
      {
        label: "WildSci Paper",
        href: "https://openreview.net/pdf?id=pb9qQzAWOS",
      },
    ],
  },
  {
    id: "cisco",
    title: "Software Engineer Intern",
    subtitle: "Cisco",
    dateRange: "June 2026 – September 2026",
    summary:
      "Built automated test monitoring and defect triage tooling using LLMs.",
  },
  {
    id: "razemath",
    title: "Software Engineer Intern",
    subtitle: "Razemath",
    dateRange: "February 2025 – September 2025",
    summary:
      "Led backend development of a Python-based AI math tutoring platform with concept mastery heatmaps.",
    links: [{ label: "razemath.com", href: "https://razemath.com/" }],
  },
];
