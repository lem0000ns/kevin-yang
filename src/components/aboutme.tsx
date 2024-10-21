import React from "react";

const aboutme = () => {
  return (
    <div className=" flex flex-col space-y-4 lg:w-3/5 mx-auto w-4/5">
      <p className="text-7xl">
        <strong className="w-full hover:text-violet-800 transition-colors duration-100">
          about me<span className="loading">...</span>
        </strong>
      </p>
      <p className="text-lg">
        I'm a 2nd-year undergraduate at UCSB with a major in Computer Science
        and minor in Linguistics with an interest in full-stack development. I
        have{" "}
        <span>
          <a
            href="/experience"
            rel="noopener noreferrer"
            className="text-violet-500 hover:text-violet-400"
          >
            project experience
          </a>
        </span>{" "}
        with cloud services, database handling, and web development.
      </p>
      <p className="text-lg">
        Outside of programming, I enjoy playing basketball, running, learning
        new languages, and reading horror stories. I've been on-and-off
        self-studying Korean for 2 years and Spanish since high school.
      </p>
      <p className="text-lg">
        Open my resume{" "}
        <a
          href="https://docs.google.com/document/d/16l3Z2ABT-0xikEwE-Ee_g07kd7EFKWBM/edit?usp=drive_link&ouid=108463634580760321563&rtpof=true&sd=true"
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
