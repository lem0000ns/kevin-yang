import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";

const footer = () => {
  return (
    <div>
      <hr className="border-t border-purple my-8 w-2/3 mx-auto" />
      <div className="flex lg:w-1/2 w-3/4 justify-between items-center mx-auto">
        <div className="lg:block hidden">
          Designed by <strong>Kevin Yang</strong>
        </div>
        <div className="flex space-x-4 lg:mx-0 mx-auto">
          <a
            href="https://www.instagram.com/kevonsheep/"
            target="_blank"
            rel="nooopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-yang-7b5151186/"
            target="_blank"
            rel="nooopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.github.com/lem0000ns"
            target="_blank"
            rel="nooopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
