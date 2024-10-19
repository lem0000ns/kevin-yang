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
import SRA from "../sra.png";

const svbc = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="w-3/5 mx-auto">
          <div className="flex flex-row justify-between items-center">
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
            </div>
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>Head Coach</CardTitle>
                <CardDescription>
                  Led weekly clinics in teaching basketball fundamentals to
                  group of 20 students.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
