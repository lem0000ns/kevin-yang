import React from "react";
import Navbar from "@/components/ui/Navbar";
import { Roboto_Mono } from "next/font/google";
import Sra from "./sra";
import IvyMax from "./ivymax";
import SVBC from "./svbc";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div
      className={`${robotoMono.className} experience flex flex-col space-y-10 mb-16`}
    >
      <header className="sticky bg-indigo-50 top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-black p-8">
        <Navbar />
      </header>
      <div className="text-center text-4xl">
        <strong>Experience</strong>
      </div>
      <Sra />
      <IvyMax />
      <SVBC />
    </div>
  );
};

export default page;
