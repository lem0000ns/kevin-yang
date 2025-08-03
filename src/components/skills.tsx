import React from "react";

const skills = () => {
  return (
    <div className="space-y-4 text-center">
      <strong className="text-4xl hover:text-violet-800 transition-colors duration-100">
        skills
      </strong>
      <p className="text-center lg:w-2/3 w-4/5 mx-auto">
        <strong className="text-violet-400">Relevant courses:</strong> Discrete
        Mathematics, Object-Oriented Programming, Assembly, Data Structures and
        Algorithms, Intro to Cryptography, Computer Architecture
      </p>
      <ul className="text-center lg:w-2/3 w-5/6 space-y-3 mx-auto">
        <li className="mt-8">
          <strong className="text-violet-400">Programming Languages: </strong>
          Python, C++, TypeScript, HTML/CSS
        </li>
        <li>
          <strong className="text-violet-400">Frameworks / DevOps: </strong>
          AWS, Docker, React, Next.js, Express.js, Django, Flask, MySQL,
          Firebase, Git
        </li>
        <li>
          <strong className="text-violet-400">Favorite Animals: </strong>
          Cassowaries, Humpback Whales, Elephants, Direwolves, 올드 넙치
        </li>
      </ul>
    </div>
  );
};

export default skills;
