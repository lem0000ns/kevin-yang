import type { AccordionEntry } from "@/components/accordion/types";

export default function ExperienceTimeline({
  experiences,
}: {
  experiences: AccordionEntry[];
}) {
  return (
    <ol className="relative ml-1 border-l border-[#c4b5fd]/35">
      {experiences.map((experience) => {
        const titleLink = experience.links?.find(
          (link) => link.label === "razemath.com",
        );
        const extraLinks = experience.links?.filter(
          (link) => link !== titleLink,
        );

        return (
          <li key={experience.id} className="relative pb-8 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[#c4b5fd] ring-4 ring-[#09090b]"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold tracking-tight text-[#f7f4ff]">
                {titleLink ? (
                  <a
                    href={titleLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#c4b5fd]/80 decoration-1 underline-offset-4 transition-colors hover:decoration-[#ddd6fe]"
                  >
                    {experience.subtitle}
                  </a>
                ) : (
                  experience.subtitle
                )}
              </h3>
              {experience.dateRange && (
                <p className="shrink-0 font-[family-name:var(--font-label)] text-xs text-[#8e86a3]">
                  {experience.dateRange}
                </p>
              )}
            </div>
            <p className="mt-1 font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.16em] text-[#c4b5fd]">
              {experience.title}
            </p>
            {experience.summary && (
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#c8bfd9]">
                {experience.summary}
              </p>
            )}
            {extraLinks && extraLinks.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {extraLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-label)] text-sm text-[#ddd6fe] underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
