import React from "react";
import Image from "next/image";
import TransitionLink from "./ui/TransitionLink";
import profilePic from "@/app/resources/pfp.jpeg";

const AboutMe = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="shrink-0">
          <Image
            className="h-44 w-44 rounded-full border-2 border-violet-500/30 object-cover shadow-[0_0_24px_rgba(139,92,246,0.12)] md:h-52 md:w-52"
            src={profilePic}
            alt="Kevin Yang"
            priority
          />
        </div>

        <div className="w-full space-y-4">
          <div className="rounded-lg border border-violet-500/20 bg-violet-950/10 p-6 md:p-8">
            <p className="text-sm leading-relaxed text-violet-200/70 md:text-base">
              I&apos;m a 4th year Computer Science major + Linguistics minor at
              UCSB with an interest in NLP, specifically model interpretability
              and reasoning. I have{" "}
              <TransitionLink
                href="/experience"
                className="text-violet-400 underline-offset-2 transition-colors hover:text-violet-300 hover:underline"
              >
                internship and project experience
              </TransitionLink>{" "}
              with cloud-deployed applications, LLM-powered automation
              pipelines, and data engineering.
            </p>
          </div>

          <div className="rounded-lg border border-violet-500/20 bg-violet-950/10 p-6 md:p-8">
            <p className="text-sm leading-relaxed text-violet-200/70 md:text-base">
              Outside of programming, I enjoy playing basketball and learning
              languages (currently Korean and Spanish).{" "}
              <span className="text-violet-100">Fun fact:</span> I&apos;ve read
              the Harry Potter series three times, once completely in Spanish,
              though my current knowledge of the Harry Potter universe is a
              little rusty. One day, I&apos;d also like to try aquascaping.
            </p>
          </div>

          <div className="rounded-lg border border-violet-500/20 bg-violet-950/10 px-6 py-4 md:px-8">
            <p className="text-sm text-violet-200/70 md:text-base">
              Open my resume{" "}
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vTp45OSaCNoJ4sKb0va6VL_PzHLoKRiUrIKSgop3F5FxrgSY8GRjaiQeqrXslHHKA/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 underline-offset-2 transition-colors hover:text-violet-300 hover:underline"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
