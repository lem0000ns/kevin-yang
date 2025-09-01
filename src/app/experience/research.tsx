import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Research from "../resources/research.png";
import Image from "next/image";

const research = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="w-3/5 mx-auto bg-violet-100 hover:scale-105 transition-all duration-300 ease-in-out outline outline-violet-300 outline-offset-4">
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>Research Assistant</CardTitle>
                <CardDescription>
                  Engineered automation pipelines in Python to preprocess and
                  transform scientific QA datasets for scalable training
                  ("WildSci: Advancing Scientific Reasoning from In-the-Wild
                  Literature").
                </CardDescription>
              </CardHeader>
              <CardContent className="hidden lg:block">
                <CardDescription>
                  Currently investigating impact of applying an agentic
                  framework into a multilingual persona-prompting pipeline on
                  long-form multi-cultural QA pairs.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-right">February 2025 - Present</p>
              </CardFooter>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 mx-auto pt-2 pb-2">
              <div className="flex flex-col justify-center mx-auto">
                <Image
                  className="lg:rounded-2xl lg:pr-4 w-full"
                  src={Research}
                  width={300}
                  height={300}
                  alt="research"
                />
              </div>
              <a
                className="text-violet-800 mt-8 hover:text-violet-400"
                href="https://openreview.net/pdf?id=pb9qQzAWOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                WildSci
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default research;
