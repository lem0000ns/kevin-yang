import React from "react";
import Yba from "./yba";
import Navbar from "@/components/ui/Navbar";
import { Roboto_Mono } from "next/font/google";
import Footer from "@/components/footer";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div
      className={`${robotoMono.className} experience flex flex-col space-y-10 mb-16`}
    >
      <Navbar />
      <div className="text-center text-4xl">
        <strong>Projects</strong>
      </div>
      <Yba />
      <Footer></Footer>
    </div>
  );
};

export default page;
