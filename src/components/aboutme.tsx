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
        I'm a junior at UCSB with a major in Computer Science and minor in
        Linguistics with an interest in full-stack development and computational
        linguistics. I have{" "}
        <span className="text-violet-500 hover:text-violet-400">
          <TransitionLink href="/projects">project experience</TransitionLink>
        </span>{" "}
        with cloud services, database handling, and web development.
      </p>
      <p className="text-lg">
        Outside of programming, I enjoy playing basketball, running, and
        learning languages—specifically Korean and Spanish. This is mainly done
        through listening to native content, such as podcasts or movies, or
        reading books. I've read the "Harry Potter" series three times, once
        completely in Spanish!
      </p>
      <p className="text-lg">
        Open my resume{" "}
        <a
          href="https://drive.google.com/file/d/1KFnirNTw9NZ0Efx999PF8bUAjvuH4W50/view?usp=sharing"
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
