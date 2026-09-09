import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer";
import AccordionList from "@/components/accordion/AccordionList";
import { Roboto_Mono } from "next/font/google";
import { projects } from "./projects";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div
      className={`${robotoMono.className} experience flex flex-col space-y-10 mb-16 w-full mx-auto`}
    >
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-2 text-sm text-violet-300/60">things I've built</p>
      </div>
      <AccordionList entries={projects} />
      <Footer />
    </div>
  );
};

export default page;
