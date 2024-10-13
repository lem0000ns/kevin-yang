"use client";
import { Roboto_Mono } from "@next/font/google";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import Image from "next/image";
import profilePic from "./pfp.png";
import Navbar from "@/components/ui/Navbar";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div
      className={`${robotoMono.className} homepage flex flex-col space-y-10 mb-16`}
    >
      <header className="sticky bg-indigo-50 top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-black p-8">
        <Navbar />
      </header>
      <div className="flex flex-row justify-evenly">
        <div className=" flex flex-col space-y-4 w-2/5">
          <p className="text-7xl">
            <strong>Kevin Yang</strong>
          </p>
          <p className="text-lg">
            I'm a rising sophomore at UCSB with a major in Computer Science and
            minor in Linguistics. Outside of programming, I enjoy playing
            basketball, running, and learning languages, both programming and
            human.
          </p>
          <p className="text-lg">
            Calendar provided for extra decoration and whitespace occupation.
          </p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="h-full w-full flex"
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
            }}
          />
        </div>
        <Image
          className="mb-16 rounded-2xl"
          src={profilePic}
          width={410}
          height={500}
          alt="Yours truly"
        />
      </div>
      <hr className="border-t border-black my-8 w-2/3 mx-auto" />
      <div className="text-center">
        {" "}
        Designed by <strong>Kevin Yang</strong>{" "}
      </div>
    </div>
  );
}
