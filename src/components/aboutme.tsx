import React from "react";
import TransitionLink from "./ui/TransitionLink";

const aboutme = () => {
  return (
    <div className=" flex flex-col space-y-4 lg:w-3/5 mx-auto w-4/5">
      <p className="text-7xl">
        <strong className="w-full hover:text-violet-800 transition-colors duration-100">
          about me<span className="loading">...</span>
        </strong>
      </p>
      <p className="text-lg">
        I'm a 3rd year Computer Science major + Linguistics minor at UCSB with
        an interest in full-stack development and natural language processing. I
        have{" "}
        <span className="text-violet-500 hover:text-violet-400">
          <TransitionLink href="/projects">
            internship and project experience
          </TransitionLink>
        </span>{" "}
        with cloud-deployed applications, database management, and AI/NLP
        systems.
      </p>
      <p className="text-lg">
        Outside of programming, I enjoy playing basketball, running, learning
        languages (currently Korean and Spanish), and reading. <b>Fun fact:</b>{" "}
        I've read the "Harry Potter" series three times, once completely in
        Spanish. I'm currently reading "Game of Thrones" and rereading the
        "Diary of a Wimpy Kid" series.
      </p>
      <p className="text-lg">
        Open my resume{" "}
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vTp45OSaCNoJ4sKb0va6VL_PzHLoKRiUrIKSgop3F5FxrgSY8GRjaiQeqrXslHHKA/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 hover:text-violet-400"
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default aboutme;
