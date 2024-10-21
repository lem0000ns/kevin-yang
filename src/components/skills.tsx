import React from "react";

const skills = () => {
  return (
    <div className="space-y-4 text-center">
      <strong className="text-4xl hover:text-violet-800 transition-colors duration-100">
        skills
      </strong>
      <p className="text-center w-2/3 mx-auto">
        <strong className="text-violet-400">Relevant courses:</strong> Discrete
        Mathematics, Object-Oriented Programming, Assembly, Data Structures and
        Algorithms, Intro to Computational Science
      </p>
      <ul className="text-center w-2/3 mx-auto">
        <li className="mt-8">
          <strong className="text-violet-400">Programming Languages: </strong>
          Python, Java, HTML/CSS, C++, Typescript, Tailwind
        </li>
        <li>
          <strong className="text-violet-400">Cloud Technologies: </strong>
          Amazon Web Services (Lambda, VPC, S3, API Gateway, IAM), API
          Development
        </li>
        <li>
          <strong className="text-violet-400">Data & Version Control: </strong>
          JSON, MySQL, PostgreSQL, Git, Shell-Scripting, Web-Scraping
        </li>
        <li>
          <strong className="text-violet-400">Full-Stack Tools: </strong>
          Backend, Frontend, React.js, Next.js
        </li>
      </ul>
    </div>
  );
};

export default skills;
