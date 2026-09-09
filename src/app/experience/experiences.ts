import type { AccordionEntry } from "@/components/accordion/types";

export const experiences: AccordionEntry[] = [
  {
    id: "cisco",
    title: "Software Engineer Intern",
    subtitle: "Cisco",
    dateRange: "June 2026 – September 2026",
    summary:
      "Built automated test monitoring and defect triage tooling using LLMs.",
    bullets: [
      "Set up a nightly pipeline that tracks thousands of test results across hardware platforms and sends automated reports",
      "Automated the defect filing workflow — persistent failures get flagged, deduplicated, and filed with logs attached",
      "Used LLMs to turn raw test logs into structured summaries with root cause and impact for faster triage",
    ],
  },
  {
    id: "razemath",
    title: "Software Engineer Intern",
    subtitle: "Razemath",
    dateRange: "February 2025 – September 2025",
    summary:
      "Led backend development of a Python-based AI math tutoring platform with concept mastery heatmaps.",
    bullets: [
      "Led backend development of a Python-based AI math tutoring platform with concept mastery heatmaps and tailored problem summaries",
      "Applied prompt engineering to enhance solution accuracy and integrated Firebase authentication with a Django backend for user and instructor settings management",
    ],
    links: [{ label: "razemath.com", href: "https://razemath.com/" }],
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    subtitle: "NLP Group",
    dateRange: "March 2025 – June 2026",
    summary:
      "Built data pipelines for scientific QA research and explored persona-prompting techniques.",
    bullets: [
      "Built Python pipelines to preprocess scientific QA datasets for the WildSci project",
      "Explored iterative self-refinement persona-prompting on culturally-challenging QA pairs",
    ],
    links: [
      {
        label: "WildSci Paper",
        href: "https://openreview.net/pdf?id=pb9qQzAWOS",
      },
    ],
  },
  {
    id: "ivymax",
    title: "APCS A Instructor",
    subtitle: "IvyMax",
    dateRange: "March 2024 – May 2024",
    summary:
      "Taught weekly sessions on core APCS concepts to high school students.",
    bullets: [
      "Taught weekly sessions on core APCS concepts to high school students",
      "Class structure, including shared materials and homework, was managed in Google Classroom",
    ],
    links: [
      {
        label: "Lesson Slides",
        href: "https://drive.google.com/drive/folders/1uXuNXCNou2KLxJh_0lJVVIJVj3meUWY4?dmr=1&ec=wgc-drive-globalnav-goto",
      },
    ],
  },
  {
    id: "ucsb-sra",
    title: "Research Intern",
    subtitle: "UCSB Summer Research Academies",
    dateRange: "June – July 2022",
    summary:
      "4-week research project investigating impact of product packaging on consumer buying behavior.",
    variant: "compact",
    bullets: [
      "4-week research project investigating impact of product packaging on consumer buying behavior",
      "A Python script was used to web-scrape more than 17,700 products",
    ],
    links: [
      {
        label: "Research Paper",
        href: "https://docs.google.com/document/d/1mrweA5_zpxQES2hrZPdwFmwzzBZb8jT5V36-PKk2SjQ/edit?usp=sharing",
      },
      {
        label: "Presentation",
        href: "https://docs.google.com/presentation/d/16qhS_-NwkbVXvhDXhm5P0EsL2hvy9oF06Q6HCLw3N4Q/edit#slide=id.g13c39e20619_0_1",
      },
    ],
  },
];
