import React from "react";

interface Props {
  link: string;
  details: string[];
}

const NoteDoc = ({ link, children, details }: Props) => {
  return (
    <div className="space-y-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-indigo-500 text-purple-400"
      >
        {children}
      </a>
      <ul className="list-disc ml-6 space-y-2">
        {details.map((d: string, index: number) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteDoc;
