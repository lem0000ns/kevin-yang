import type { AccordionEntry } from "@/components/accordion/types";

export type NoteEntry = Pick<
  AccordionEntry,
  "id" | "title" | "bullets" | "links"
>;

export const languageNotes: NoteEntry[] = [
  {
    id: "spanish-dictionary",
    title: 'Spanish "mi propio diccionario"',
    bullets: [
      "A personal dictionary of Spanish grammar, vocabulary, and slang that were new or I found interesting",
    ],
    links: [
      {
        label: "Read",
        href: "https://docs.google.com/document/d/e/2PACX-1vTOvLq2VLTkr1dT7boXXD8cHEtqlrp2HfXq7YfSwurkf9EW5gzA5SmV9p-YWmIMaNnqMRgbsotW1aNP/pub",
      },
    ],
  },
  {
    id: "korean-dictionary",
    title: "Korean",
    bullets: [
      "A personal dictionary of Korean grammar, vocabulary, and slang that were new or I found interesting",
    ],
    links: [
      {
        label: "Read",
        href: "https://docs.google.com/document/d/e/2PACX-1vStUulwhrDZJs5B0mn9wYVVQ3ZsmmGxmko-COFOQ3sRkmt95wUmPV1V2qvNxM0DNreSuEkArXh1Rznj/pub",
      },
    ],
  },
];

export const otherNotes: NoteEntry[] = [
  {
    id: "cosas-interesantes",
    title: 'cosas interesantes (en. "interesting things")',
    bullets: [
      "Some thought-provoking philosophical/linguistic ideas and real-world phenomena",
      "Includes detailed summary of Harry Potter (read in Spanish)",
      "Intriguing concepts from computer science and NLP",
    ],
    links: [
      {
        label: "Read",
        href: "https://docs.google.com/document/d/e/2PACX-1vS4PpNhrNm0s3VT6-eXfMm5Bj-h_l69xwCrnD0TlY1pVlklePHzDc7s0EH3mj5ei9IQjmZtoBYtC7v0/pub",
      },
    ],
  },
];
