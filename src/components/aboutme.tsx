import React from "react";
import Image from "next/image";
import profilePic from "@/app/resources/pfp.png";
import { SectionLink } from "@/components/PanelHash";
import RotatingTitle from "@/components/RotatingTitle";

const toc = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#notes", label: "Notes" },
];

const AboutMe = () => {
  return (
    <header className="relative mx-auto flex w-full max-w-md flex-col items-center text-center">
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-10 rounded-full bg-[#d6c6ff]/10 blur-3xl"
        />
        <Image
          className="relative h-32 w-32 rounded-2xl object-cover ring-1 ring-white/15 sm:h-36 sm:w-36"
          src={profilePic}
          alt="Kevin Yang"
          priority
          sizes="144px"
        />
      </div>

      <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-[#c4b5fd]">
        Computer science @ UCSB
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#f6f3ec] sm:text-5xl">
        Kevin Yang
      </h1>
      <div className="mt-2 w-full">
        <RotatingTitle />
      </div>

      <nav
        aria-label="On this page"
        className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
      >
        {toc.map((item, index) => (
          <SectionLink
            key={item.href}
            href={item.href}
            className="text-sm text-[#d4cfc6] transition-colors hover:text-[#f6f3ec]"
          >
            <span className="mr-2 text-xs text-[#c4b5fd]">0{index + 1}</span>
            {item.label}
          </SectionLink>
        ))}
      </nav>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#d4cfc6]">
        <p>
          4th year Computer Science major + Linguistics minor at UCSB with an
          interest in NLP, specifically model interpretability and reasoning.
        </p>
      </div>
    </header>
  );
};

export default AboutMe;
