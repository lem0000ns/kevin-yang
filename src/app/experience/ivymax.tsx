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
import APCS from "../apcs.png";

const ivymax = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="w-3/5 mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>AP Computer Science Instructor</CardTitle>
                <CardDescription>
                  Taught weekly sessions on core APCS concepts to high school
                  students.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I used practice tests that consisted of a variety of
                  free-response and multiple-choice questions, along with polls
                  to help students prepare effectively for upcoming APCS exam.
                  Class structure, including shared materials and homework, were
                  managed in Google Classroom. Lesson slides can be accessed{" "}
                  <span className="text-violet-800">
                    <a
                      href="https://drive.google.com/drive/folders/1uXuNXCNou2KLxJh_0lJVVIJVj3meUWY4?dmr=1&ec=wgc-drive-globalnav-goto"
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
                <p className="text-right">March 2024 - Present</p>
              </CardFooter>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto">
              <Image
                className="rounded-2xl pr-4 w-full"
                src={APCS}
                width={300}
                height={300}
                alt="apcs"
              />
              <a
                className="text-violet-800 mt-8"
                href="https://drive.google.com/drive/folders/1uXuNXCNou2KLxJh_0lJVVIJVj3meUWY4?dmr=1&ec=wgc-drive-globalnav-goto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lesson Slides
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ivymax;
