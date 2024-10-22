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
import SVBC from "../resources/svbc.png";

const svbc = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="lg:w-3/5 w-4/5 mx-auto bg-violet-100 hover:scale-105 transition-all duration-300 ease-in-out outline outline-violet-300 outline-offset-4">
          <div className="flex lg:flex-row lg:mt-0 mt-4 flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center mx-auto">
              <Image
                className="rounded-full ml-2 w-full lg:p-0 p-1 outline outline-violet-500"
                src={SVBC}
                width={300}
                height={300}
                alt="bball"
              />
            </div>
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>Head Coach</CardTitle>
                <CardDescription>
                  Led weekly clinics in teaching basketball fundamentals to
                  group of 20 students.
                </CardDescription>
              </CardHeader>
              <CardContent className="hidden lg:block">
                <CardDescription>
                  Responbilities included planning out the activities of each
                  week's clinic, the mentorship of other prospective coaches,
                  and the management attendance and development of all students
                  to create a fun yet competitive environment.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-right">February 2022 - May 2023</p>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default svbc;
