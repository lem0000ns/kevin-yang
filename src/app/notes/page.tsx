import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer";
import { Roboto_Mono } from "@next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const LanguageLearning = () => {
  return (
    <div className="text-left w-2/3 mx-auto space-y-8 flex flex-col">
      <strong className="text-2xl">Language-learning</strong>
      <div className="space-y-2">
        <a
          href="https://docs.google.com/document/d/1DVD57DQbVW8Cy6f1DL6gpDd-3LSJGeCCkJNpBvPyOuY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-indigo-500 text-purple-400"
        >
          Spanish "mi propio diccionario"
        </a>
        <ul className="list-disc ml-6">
          <li>
            a personal dictionary of Spanish grammar, vocabulary, slang that
            were new or I found interesting
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <a
          href="https://docs.google.com/document/d/1viQcMZY7XQ-N5SSJoYg767FIvvtXo0FsN4FBgUxbhzU/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-indigo-500 text-purple-400"
          locale={false}
        >
          Korean
        </a>
        <ul className="list-disc ml-6">
          <li>
            a personal dictionary of Korean grammar, vocabulary, slang that were
            new or I found interesting
          </li>
        </ul>
      </div>
    </div>
  );
};

const Other = () => {
  return (
    <div className="text-left w-2/3 mx-auto space-y-8 flex flex-col">
      <strong className="text-2xl">Other</strong>
      <div className="space-y-2">
        <a
          href="https://docs.google.com/document/d/1bXoE3X6UWoyZPk2DOIPhGu9NesajMqb1lsDx_HCJ_5M/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-indigo-500 text-purple-400"
        >
          cosas interesantes (en. "interesting things")
        </a>
        <ul className="list-disc ml-6">
          <li>
            a list of general philosophical/scientific concepts and notes on
            subjects that intrigued me
          </li>
        </ul>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div
      className={`${robotoMono.className} homepage flex flex-col space-y-10`}
    >
      <Navbar />
      <div className="flex flex-col space-y-16">
        <LanguageLearning />
        <Other />
      </div>
      <Footer />
    </div>
  );
};

export default page;
