"use client";
import { Roboto_Mono } from "next/font/google";
import React from "react";
import Image from "next/image";
import profilePic from "./resources/pfp.png";
import Navbar from "@/components/ui/Navbar";
import AboutMe from "@/components/aboutme";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${robotoMono.className} homepage flex flex-col space-y-10 mb-16`}
    >
      <Navbar />
      <div className="flex lg:flex-row flex-col items-center lg:w-3/4 lg:mx-auto mx-0 w-full">
        <AboutMe></AboutMe>
        <Image
          className="rounded-full object-cover w-[400px] h-[500px] lg:p-4 p-1 mx-auto lg:mt-0 mt-8 outline outline-indigo-300 lg:ml-8"
          src={profilePic}
          alt="Yours truly"
        />
      </div>
      <Skills />
      <Footer />
    </div>
  );
}
