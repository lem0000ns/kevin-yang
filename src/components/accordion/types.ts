export type AccordionEntry = {
  id: string;
  title: string;
  subtitle?: string;
  dateRange?: string;
  summary?: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
  variant?: "default" | "compact";
};
