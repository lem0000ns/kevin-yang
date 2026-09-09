import AccordionItem from "./AccordionItem";
import { cn } from "@/lib/utils";
import { timelineContainerClassName } from "@/components/timeline/constants";
import type { AccordionEntry } from "./types";

type AccordionListProps = {
  entries: AccordionEntry[];
  embedded?: boolean;
};

export default function AccordionList({
  entries,
  embedded = false,
}: AccordionListProps) {
  const mainEntries = entries.filter((e) => e.variant !== "compact");
  const compactEntries = entries.filter((e) => e.variant === "compact");

  return (
    <div
      className={cn(
        "relative w-full",
        !embedded && "mx-auto max-w-5xl px-4 md:px-8"
      )}
    >
      <div className={timelineContainerClassName}>
        <div className="space-y-4">
          {mainEntries.map((entry) => (
            <AccordionItem key={entry.id} entry={entry} />
          ))}
        </div>

        {compactEntries.length > 0 && (
          <div className="mt-8 space-y-3 border-t border-violet-500/10 pt-6">
            {compactEntries.map((entry) => (
              <AccordionItem key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
