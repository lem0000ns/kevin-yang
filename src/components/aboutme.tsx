import React from "react";

const aboutme = () => {
  return (
    <div className=" flex flex-col space-y-4 w-2/5">
      <p className="text-7xl">
        <strong className="hover:text-violet-800 transition-colors duration-100">
          About Me
        </strong>
      </p>
      <p className="text-lg">
        I'm a 2nd-year undergraduate at UCSB with a major in Computer Science
        and minor in Linguistics with an interest in full-stack development. I
        have project experience with cloud services, database handling, and web
        development, which you can read more about{" "}
        <span>
          <a
            href="/experience"
            rel="noopener noreferrer"
            className="text-violet-800"
          >
            here
          </a>
        </span>
        .
      </p>
      <p className="text-lg">
        Outside of programming, I enjoy playing basketball, running, learning
        new languages, and reading horror stories. I've been on-and-off
        self-studying Korean for 2 years and Spanish since high school. I've
        always been driven by a strong curiosity to understand the "why" and the
        processes around which I live.
      </p>
    </div>
  );
};

export default aboutme;
