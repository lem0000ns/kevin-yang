import React from "react";
import Navbar from "@/components/ui/Navbar";
import { Roboto_Mono } from "next/font/google";
import Sra from "./sra";
import IvyMax from "./ivymax";
import Footer from "@/components/footer";
import Razemath from "./razemath";
import Research from "./research";

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
      <div className="text-center text-4xl">
        <strong>Experience</strong>
      </div>
      <Research />
      <Razemath />
      <IvyMax />
      <Sra />
      <Footer />
    </div>
  );
};

export default page;
