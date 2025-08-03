import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer";
import { Roboto_Mono } from "@next/font/google";
import NoteDoc from "./NoteDoc";
import { CalendarDays } from "lucide-react";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const LanguageLearning = () => {
  return (
    <div className="text-left w-2/3 mx-auto space-y-8 flex flex-col">
      <strong className="text-2xl">Language-learning</strong>
      <NoteDoc
        link="https://docs.google.com/document/d/e/2PACX-1vTOvLq2VLTkr1dT7boXXD8cHEtqlrp2HfXq7YfSwurkf9EW5gzA5SmV9p-YWmIMaNnqMRgbsotW1aNP/pub"
        details={[
          "a personal dictionary of Spanish grammar, vocabulary, slang that were new or I found interesting",
        ]}
      >
        Spanish "mi propio diccionario"
      </NoteDoc>
      <NoteDoc
        link="https://docs.google.com/document/d/e/2PACX-1vStUulwhrDZJs5B0mn9wYVVQ3ZsmmGxmko-COFOQ3sRkmt95wUmPV1V2qvNxM0DNreSuEkArXh1Rznj/pub"
        details={[
          "a personal dictionary of Korean grammar, vocabulary, slang that were new or I found interesting",
        ]}
      >
        Korean
      </NoteDoc>
    </div>
  );
};

const Other = () => {
  return (
    <div className="text-left w-2/3 mx-auto space-y-4 flex flex-col">
      <strong className="text-2xl">Other</strong>
      <NoteDoc
        link="https://docs.google.com/document/d/e/2PACX-1vS4PpNhrNm0s3VT6-eXfMm5Bj-h_l69xwCrnD0TlY1pVlklePHzDc7s0EH3mj5ei9IQjmZtoBYtC7v0/pub"
        details={[
          "some thought-provoking philosophical/linguistic ideas and real-world phenomena",
          "includes detailed summary of Harry Potter (read in Spanish)",
          "intriguing concepts from computer science and NLP",
        ]}
      >
        cosas interesantes (en. "interesting things")
      </NoteDoc>
    </div>
  );
};

const page = () => {
  return (
    <div className={`${robotoMono.className}`}>
      <div className={"homepage flex flex-col space-y-8"}>
        <Navbar />
        <div className="flex flex-col space-y-12">
          <LanguageLearning />
          <Other />
        </div>
      </div>
      <div className="text-left w-2/3 mx-auto flex flex-row space-x-2 mt-10">
        <CalendarDays />
        <p>Last updated 08/03/2025</p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
