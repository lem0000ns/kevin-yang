import { Roboto_Mono } from "next/font/google";
import AboutMe from "@/components/aboutme";
import PanelHash from "@/components/PanelHash";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/footer";
import NotesArchive from "@/components/NotesArchive";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/app/experience/experiences";
import { languageNotes, otherNotes } from "@/app/notes/notes";
import { projects } from "@/app/projects/projects";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-label",
});

export default function Home() {
  return (
    <div
      className={`${robotoMono.className} ${robotoMono.variable} relative text-[#f6f3ec] lg:flex lg:h-screen lg:overflow-hidden lg:px-[8vw] lg:py-10 xl:px-[10vw] xl:py-12`}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 34% 68% at 16% 46%, rgba(196,181,253,0.07), rgba(167,139,250,0.02) 42%, transparent 62%)",
        }}
      />
      <PanelHash />
      <aside className="relative flex items-center px-5 py-14 sm:px-8 lg:h-full lg:w-[42%] lg:shrink-0 lg:px-10 lg:py-8 xl:w-[38%]">
        <AboutMe />
      </aside>

      <div className="panel-scroll lg:h-full lg:min-w-0 lg:flex-1 lg:overflow-y-auto">
        <main className="px-5 pt-14 sm:px-8 lg:px-12 lg:pt-16">
          <section id="projects" className="scroll-mt-8">
          <SectionHeading
            index="01"
            title="Projects"
            kicker="things I've built"
          />
          <ProjectGrid projects={projects} />
        </section>

        <section id="experience" className="scroll-mt-8 pt-16">
          <SectionHeading
            index="02"
            title="Experience"
            kicker="where I've worked"
          />
          <ExperienceTimeline experiences={experiences} />
        </section>

        <section id="notes" className="scroll-mt-8 pt-16">
          <SectionHeading
            index="03"
            title="Notes"
            kicker="things I've written"
          />
          <NotesArchive languageNotes={languageNotes} otherNotes={otherNotes} />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
