import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer";
import NoteItem from "./NoteItem";
import { Roboto_Mono } from "@next/font/google";
import { CalendarDays } from "lucide-react";
import { timelineContainerClassName } from "@/components/timeline/constants";
import { languageNotes, otherNotes } from "./notes";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div
      className={`${robotoMono.className} flex flex-col space-y-10 mb-16 w-full mx-auto`}
    >
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Notes</h1>
        <p className="mt-2 text-sm text-violet-300/60">things I&apos;ve written</p>
      </div>

      <div className="mx-auto w-full max-w-5xl space-y-10 px-4 md:px-8">
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-violet-400/80">
            Language-learning
          </h2>
          <div className={timelineContainerClassName}>
            <div className="space-y-4">
              {languageNotes.map((entry) => (
                <NoteItem key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-violet-400/80">
            Other
          </h2>
          <div className={timelineContainerClassName}>
            <div className="space-y-4">
              {otherNotes.map((entry) => (
                <NoteItem key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>

        <div className="flex items-center gap-2 border-t border-violet-500/10 pt-6 text-sm text-violet-300/60">
          <CalendarDays className="h-4 w-4" />
          <p>Last updated September 9th, 2026</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
