"use client";
import { Roboto_Mono } from "next/font/google";
import React from "react";
import Image from "next/image";
import profilePic from "./pfp.png";
import Navbar from "@/components/ui/Navbar";
import AboutMe from "@/components/aboutme";
import Skills from "@/components/skills";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${robotoMono.className} homepage flex flex-col space-y-10 mb-16`}
    >
      <header className="sticky bg-indigo-50 top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-black p-8">
        <Navbar />
      </header>
      <div className="flex flex-row justify-evenly mx-auto w-full">
        <AboutMe></AboutMe>
        <Image
          className="rounded-full object-cover w-[400px] h-[500px] p-4"
          src={profilePic}
          alt="Yours truly"
        />
      </div>
      <Skills />
      <hr className="border-t border-black my-8 w-2/3 mx-auto" />
      <div className="text-center">
        {" "}
        Designed by <strong>Kevin Yang</strong>{" "}
      </div>
    </div>
  );
}
