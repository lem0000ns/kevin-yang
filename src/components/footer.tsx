import React from "react";
import { Linkedin, Github } from "lucide-react";

const Duolingo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 48 48"
    >
      <path
        fill="#7cb342"
        d="M38,6H10c-2.209,0-4,1.791-4,4v28c0,2.209,1.791,4,4,4h28c2.209,0,4-1.791,4-4V10 C42,7.791,40.209,6,38,6z"
      ></path>
      <path
        fill="#aeea00"
        d="M42,18v11.5c-1.43,2.67-4.26,4.5-7.5,4.5c-3.82,0-7.05-2.52-8.13-6h-4.74c-1.08,3.48-4.31,6-8.13,6 c-3.24,0-6.07-1.83-7.5-4.5V18c0-2,0.99-6,3-6c1,0,1.94,1.44,2.52,2.1C11.55,13.21,11.21,10,13,10c3,0,5,8,11,8s8-8,11-8 c1.79,0,1.45,3.21,1.48,4.1C37.06,13.44,38,12,39,12C41.01,12,42,16,42,18z"
      ></path>
      <path
        fill="#fafafa"
        d="M34.5,31L34.5,31c-3.038,0-5.5-2.462-5.5-5.5v-3c0-3.038,2.462-5.5,5.5-5.5h0 c3.038,0,5.5,2.462,5.5,5.5v3C40,28.538,37.538,31,34.5,31z"
      ></path>
      <path
        fill="#616161"
        d="M36,22.5v3c0,1.38-1.12,2.5-2.5,2.5S31,26.88,31,25.5v-2.59c0.16,0.06,0.32,0.09,0.5,0.09 c0.83,0,1.5-0.67,1.5-1.5c0-0.51-0.25-0.96-0.64-1.22C32.7,20.1,33.09,20,33.5,20C34.88,20,36,21.12,36,22.5z"
      ></path>
      <path
        fill="#fafafa"
        d="M13.5,31L13.5,31C10.462,31,8,28.538,8,25.5v-3c0-3.038,2.462-5.5,5.5-5.5h0 c3.038,0,5.5,2.462,5.5,5.5v3C19,28.538,16.538,31,13.5,31z"
      ></path>
      <path
        fill="#616161"
        d="M17,22.5v3c0,1.38-1.12,2.5-2.5,2.5S12,26.88,12,25.5v-2.59c0.16,0.06,0.32,0.09,0.5,0.09 c0.83,0,1.5-0.67,1.5-1.5c0-0.51-0.25-0.96-0.64-1.22C13.7,20.1,14.09,20,14.5,20C15.88,20,17,21.12,17,22.5z"
      ></path>
      <circle cx="24" cy="30" r="3" fill="#ef6c00"></circle>
      <path
        fill="#f9a825"
        d="M24,26c-2.209,0-4,1.791-4,4l4,1l4-1C28,27.791,26.209,26,24,26z"
      ></path>
      <path
        fill="#ffd54f"
        d="M24.5,29h-1c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h1c0.552,0,1,0.448,1,1v0 C25.5,28.552,25.052,29,24.5,29z"
      ></path>
    </svg>
  );
};

const footer = () => {
  return (
    <div>
      <hr className="border-t border-purple my-8 w-2/3 mx-auto" />
      <div className="flex lg:w-1/2 w-3/4 justify-between items-center mx-auto">
        <div className="lg:block hidden">
          Designed by <strong>Kevin Yang</strong>
        </div>
        <div className="flex items-center space-x-4 lg:mx-0 mx-auto">
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
          <a
            href="https://www.duolingo.com/profile/al_pastor"
            target="_blank"
            rel="nooopener noreferrer"
          >
            <Duolingo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
