import type { AccordionEntry } from "@/components/accordion/types";

export default function ProjectGrid({ projects }: { projects: AccordionEntry[] }) {
  return (
    <ol className="relative ml-1 border-l border-[#c4b5fd]/35">
      {projects.map((project) => (
        <li key={project.id} className="relative pb-8 pl-8 last:pb-0">
          <span
            aria-hidden
            className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[#c4b5fd] ring-4 ring-[#09090b]"
          />
          <h3 className="text-lg font-semibold tracking-tight text-[#f7f4ff]">
            {project.links?.[0] ? (
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#c4b5fd]/80 decoration-1 underline-offset-4 transition-colors hover:decoration-[#ddd6fe]"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          {project.subtitle && (
            <p className="mt-1 font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.16em] text-[#c4b5fd]">
              {project.subtitle}
            </p>
          )}
          {project.summary && (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#c8bfd9]">
              {project.summary}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
