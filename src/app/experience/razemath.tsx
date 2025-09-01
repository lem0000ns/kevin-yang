import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Razemath from "../resources/razemath.png";

const razemath = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="w-3/5 mx-auto bg-violet-100 hover:scale-105 transition-all duration-300 ease-in-out outline outline-violet-300 outline-offset-4">
          <div className="flex lg:flex-row lg:mt-0 mt-4 flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center mx-auto pt-4 pb-4">
              <a
                href="https://razemath.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="lg:rounded-2xl lg:pl-4 w-full"
                  src={Razemath}
                  width={300}
                  height={300}
                  alt="razemath"
                />
              </a>
              <a
                className="text-violet-800 mt-8 hover:text-violet-400"
                href="https://razemath.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                razemath.com
              </a>
            </div>
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>Software Engineer Intern</CardTitle>
                <CardDescription>
                  Led backend development of a Python-based AI math tutoring
                  platform with concept mastery heatmaps and tailored problem
                  summaries.
                </CardDescription>
              </CardHeader>
              <CardContent className="hidden lg:block">
                <CardDescription>
                  Applied prompt engineering to enhance solution accuracy and
                  integrated Firebase authentication with a Django backend for
                  user and instructor settings management.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-right">February 2025 - Present</p>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default razemath;
