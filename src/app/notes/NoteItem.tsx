import type { NoteEntry } from "./notes";
import { timelineDotClassName } from "@/components/timeline/constants";

type NoteItemProps = {
  entry: NoteEntry;
};

export default function NoteItem({ entry }: NoteItemProps) {
  return (
    <div className="relative w-full">
      <div className={timelineDotClassName} />

      <div className="w-full rounded-lg border border-violet-500/20 bg-violet-950/10 p-5 md:p-6">
        <h3 className="font-semibold text-violet-100">{entry.title}</h3>

        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="mt-3 space-y-2">
            {entry.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-sm leading-relaxed text-violet-200/70"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {entry.links && entry.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {entry.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-violet-400 underline-offset-2 transition-colors hover:text-violet-300 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
