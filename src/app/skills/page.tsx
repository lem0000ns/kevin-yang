import React from "react";
import Navbar from "@/components/ui/Navbar";
import { Roboto_Mono } from "@next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Skills = () => {
  return (
    <div
      className={`${robotoMono.className} homepage flex flex-col space-y-10`}
    >
      <header className="sticky bg-indigo-50 top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-black p-8">
        <Navbar />
      </header>
      <div className="skills-section flex flex-col items-center space-y-4 ">
        <strong className="text-3xl text-center w-4/5">Skills</strong>
        <p className="text-lg text-center w-2/3">
          Some relevant school courses I've taken are{" "}
          <span className="text-blue-600">
            Discrete Mathematics, Object-Oriented Programming, Assembly, Data
            Structures and Algorithms
          </span>
          , and{" "}
          <span className="text-blue-600">Intro to Computational Science</span>.
          In addition to those courses, I've also developed the following skills
          primarily through projects and being part of UCSB's{" "}
          <span className="text-red-500">
            ACM (Association for Computing Machinery)
          </span>{" "}
          and <span className="text-red-500">Data Science Club</span>, where I
          attend professional development and technical workshops. In fact, this
          website's production began in ACM's first workshop of the 2024-2025
          school year.
        </p>{" "}
        <ul className="text-center w-2/3">
          <li className="mt-8">
            <strong>Programming Languages: </strong>Python, Java, HTML/CSS, C++,
            Typescript, Tailwind
          </li>
          <li>
            <strong>Cloud Technologies: </strong>Amazon Web Services (Lambda,
            VPC, S3, API Gateway, IAM), API Development
          </li>
          <li>
            <strong>Data & Version Control: </strong>JSON, SQL, Git, Relational
            Databases, Shell-Scripting, Web-Scraping
          </li>
          <li>
            <strong>Full-Stack Tools: </strong>Backend, Frontend, React.js,
            Next.js
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
