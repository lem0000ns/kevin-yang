import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Yanguages from "../resources/yanguages.png";

const yba = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="lg:w-3/5 w-4/5 mx-auto bg-violet-100 hover:scale-105 transition-all duration-300 ease-in-out outline outline-violet-300 outline-offset-4">
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center mx-auto pl-4">
              <a
                href="https://www.yanguages.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="pt-4 lg:pr-4 lg:pl-0 pl-4 pr-4"
                  src={Yanguages}
                  width={400}
                  height={300}
                  alt="yanguages"
                />
              </a>
              <a
                className="text-violet-800 lg:mb-0 mb-4 mt-4 hover:text-violet-400"
                href="https://www.yanguages.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                yanguages.com
              </a>
            </div>
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>Yanguages</CardTitle>
                <CardDescription>
                  Language-learning platform that allows users to write diaries,
                  featuring a vocabulary game and customizable dictionary.
                </CardDescription>
              </CardHeader>
              <CardContent className="hidden lg:block">
                <a
                  href="https://github.com/lem0000ns/yba_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-800 hover:text-violet-400"
                >
                  <strong>Frontend</strong>
                </a>
                <CardDescription className="text-black">
                  Next.js + Tailwind CSS.
                </CardDescription>
                <br />
                <a
                  href="https://github.com/lem0000ns/yba_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-800 hover:text-violet-400"
                >
                  <strong>Backend</strong>
                </a>
                <CardDescription className="text-black">
                  Node + Express. User authentication was implemented with
                  Passport.js. User-specific information, such as diary entries
                  and vocabulary lists, is stored in MySQL and hosted on AWS
                  RDS.
                </CardDescription>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default yba;
