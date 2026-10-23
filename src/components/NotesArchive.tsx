import type { NoteEntry } from "@/app/notes/notes";

type NotesArchiveProps = {
  languageNotes: NoteEntry[];
  otherNotes: NoteEntry[];
};

function NoteGroup({
  label,
  notes,
  startIndex,
  omitLastBorder = false,
}: {
  label: string;
  notes: NoteEntry[];
  startIndex: number;
  omitLastBorder?: boolean;
}) {
  return (
    <div>
      <p className="font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.2em] text-[#c4b5fd]">
        {label}
      </p>
      <ol className="mt-2">
        {notes.map((note, index) => (
          <li
            key={note.id}
            className={`grid gap-3 border-b border-[#c4b5fd]/15 py-5 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-start sm:gap-6${
              omitLastBorder && index === notes.length - 1 ? " border-b-0" : ""
            }`}
          >
            <span className="font-[family-name:var(--font-label)] text-xs text-[#8e86a3]">
              {String(startIndex + index).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg font-medium tracking-tight text-[#f7f4ff]">
                {note.title}
              </h3>
              {note.bullets && note.bullets.length > 0 && (
                <div className="mt-1.5 space-y-1">
                  {note.bullets.map((bullet) => (
                    <p
                      key={bullet}
                      className="text-sm leading-relaxed text-[#c8bfd9]"
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
              )}
            </div>
            {note.links && note.links.length > 0 && (
              <div className="flex gap-4 sm:justify-end">
                {note.links.map((link) => (
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
        ))}
      </ol>
    </div>
  );
}

export default function NotesArchive({
  languageNotes,
  otherNotes,
}: NotesArchiveProps) {
  return (
    <div className="space-y-10">
      <NoteGroup
        label="Language-learning"
        notes={languageNotes}
        startIndex={1}
      />
      <NoteGroup
        label="Other"
        notes={otherNotes}
        startIndex={languageNotes.length + 1}
        omitLastBorder
      />
    </div>
  );
}
