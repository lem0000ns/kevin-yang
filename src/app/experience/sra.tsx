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
import SRA from "../resources/sra.png";

const sra = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="w-3/5 mx-auto bg-violet-100 hover:scale-105 transition-all duration-300 ease-in-out outline outline-violet-300 outline-offset-4">
          <div className="flex lg:flex-row lg:mt-0 mt-4 flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center mx-auto">
              <a
                href="https://docs.google.com/presentation/d/16qhS_-NwkbVXvhDXhm5P0EsL2hvy9oF06Q6HCLw3N4Q/edit#slide=id.g13c39e20619_0_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-2xl pl-4 w-full"
                  src={SRA}
                  width={300}
                  height={300}
                  alt="bball"
                />
              </a>
              <a
                className="text-violet-800 mt-8"
                href="https://docs.google.com/document/d/1mrweA5_zpxQES2hrZPdwFmwzzBZb8jT5V36-PKk2SjQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research Paper
              </a>
            </div>
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>
                  Research Intern for UCSB Summer Research Academies
                </CardTitle>
                <CardDescription>
                  4-week research project investigating impact of product
                  packaging on consumer buying behavior.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A Python script was used to web-scrape more than 17,700
                  products. Characteristics such as product color vibrancy,
                  bio-friendliness, and transparent packaging were documented
                  and used to perform data visualizations and processing. More
                  can be read about{" "}
                  <span className="text-violet-800">
                    <a
                      href="https://docs.google.com/document/d/1mrweA5_zpxQES2hrZPdwFmwzzBZb8jT5V36-PKk2SjQ/edit?usp=sharing"
                      target="_blank"
                      rel="nooopener noreferrer"
                    >
                      <u>here</u>
                    </a>
                  </span>
                  .
                </CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-right">June - July 2022</p>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default sra;
