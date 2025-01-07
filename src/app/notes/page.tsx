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
        link="https://drive.google.com/file/d/1MSDZRWxDf3TRAju1QRZITvd03PaBvRHn/view?usp=sharing"
        details={[
          "a personal dictionary of Spanish grammar, vocabulary, slang that were new or I found interesting",
        ]}
      >
        Spanish "mi propio diccionario"
      </NoteDoc>
      <NoteDoc
        link="https://drive.google.com/file/d/1Tfx0SK4zaxZOnneti5sfAY2d_hyM9bp5/view?usp=sharing"
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
        link="https://drive.google.com/file/d/1NdnftZlOAtZdSGWokW8-Mo3gGkXA8FyM/view?usp=sharing"
        details={[
          "a list of general philosophical/scientific concepts and notes on subjects that intrigued me",
          "includes detailed summary of Harry Potter (read in Spanish)",
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
        <p>Last updated 01/07/2025</p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
