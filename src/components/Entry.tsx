import type { AccordionEntry } from "@/components/accordion/types";
import type { NoteEntry } from "@/app/notes/notes";

type EntryData = AccordionEntry | NoteEntry;

export default function Entry({ entry }: { entry: EntryData }) {
  const dateRange = "dateRange" in entry ? entry.dateRange : undefined;
  const subtitle = "subtitle" in entry ? entry.subtitle : undefined;
  const summary = "summary" in entry ? entry.summary : undefined;

  return (
    <article className="border-t border-violet-400/15 py-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <h3 className="text-base font-semibold tracking-tight text-violet-50">
          {entry.title}
        </h3>
        {dateRange && (
          <p className="shrink-0 text-xs text-violet-300/45">{dateRange}</p>
        )}
      </div>

      {subtitle && (
        <p className="mt-1 text-sm text-violet-300/70">{subtitle}</p>
      )}

      {summary && (
        <p className="mt-3 text-sm leading-relaxed text-violet-200/75">
          {summary}
        </p>
      )}

      {entry.bullets && entry.bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-sm leading-relaxed text-violet-200/60"
            >
              <span aria-hidden className="text-violet-400/35">
                –
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {entry.links && entry.links.length > 0 && (
        <div className="mt-4 flex flex-col items-start gap-1.5">
          {entry.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-full break-all text-sm text-violet-300 underline-offset-4 transition-colors hover:text-violet-100 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
