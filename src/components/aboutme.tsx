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
        I'm a 2nd year Computer Science major + Linguistics minor at UCSB with
        an interest in full-stack development and natural language processing. I
        have{" "}
        <span className="text-violet-500 hover:text-violet-400">
          <TransitionLink href="/projects">project experience</TransitionLink>
        </span>{" "}
        with cloud services, database handling, and web development.
      </p>
      <p className="text-lg">
        Outside of programming, I enjoy playing basketball, running, and
        learning languages (currently Korean and Spanish). I enjoy listening to
        native content, such as podcasts or movies, or reading books. I've read
        the "Harry Potter" series three times, once completely in Spanish.
        Thanks for visiting my website!
      </p>
      <p className="text-lg">
        Open my resume{" "}
        <a
          href="https://drive.google.com/file/d/14XIsEHO1o9e5L235texsP75Vw_zPEQF-/view?usp=sharing"
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
