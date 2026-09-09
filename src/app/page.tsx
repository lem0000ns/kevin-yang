"use client";
import { Roboto_Mono } from "next/font/google";
import React from "react";
import Navbar from "@/components/ui/Navbar";
import AboutMe from "@/components/aboutme";
import Footer from "@/components/footer";
import RotatingTitle from "@/components/RotatingTitle";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${robotoMono.className} homepage flex flex-col space-y-10 mb-16 w-full mx-auto`}
    >
      <Navbar />
      <div className="text-center">
        <RotatingTitle />
        <p className="mt-2 text-sm text-violet-300/60">
          computer science @ ucsb
        </p>
      </div>
      <AboutMe />
      <Footer />
    </div>
  );
}
