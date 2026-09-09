"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { timelineDotClassName } from "@/components/timeline/constants";
import type { AccordionEntry } from "./types";

type AccordionItemProps = {
  entry: AccordionEntry;
};

export default function AccordionItem({ entry }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const variant = entry.variant ?? "default";

  return (
    <div className={cn("relative w-full", variant === "compact" && "opacity-70")}>
      <div className={timelineDotClassName} />

      <div
        className={cn(
          "w-full rounded-lg border border-violet-500/20 bg-violet-950/10 transition-colors duration-200",
          variant === "compact" && "border-violet-500/10"
        )}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-violet-500/5",
            variant === "compact" && "px-4 py-3"
          )}
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className={cn(
                  "font-semibold text-violet-100",
                  variant === "compact" && "text-sm"
                )}
              >
                {entry.title}
              </h3>
            </div>
            {entry.subtitle && (
              <p
                className={cn(
                  "mt-0.5 text-violet-300/80",
                  variant === "compact" ? "text-xs" : "text-sm"
                )}
              >
                {entry.subtitle}
              </p>
            )}
            {entry.summary && !isOpen && (
              <p className="mt-2 line-clamp-2 text-sm text-violet-200/50">
                {entry.summary}
              </p>
            )}
          </div>

          <div className="flex shrink-0 flex-col items-end gap-1">
            {entry.dateRange && (
              <span
                className={cn(
                  "whitespace-nowrap text-violet-300/60",
                  variant === "compact" ? "text-xs" : "text-sm"
                )}
              >
                {entry.dateRange}
              </span>
            )}
            <ChevronDown
              className={cn(
                "h-4 w-4 text-violet-400 transition-transform duration-300 ease-out",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div
              className="border-t border-violet-500/10 px-5 pb-5 pt-3 transition-opacity duration-300 ease-out"
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              {entry.bullets && entry.bullets.length > 0 && (
                <ul className="space-y-2">
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
