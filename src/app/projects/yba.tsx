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
import Bball from "../bball.png";

const yba = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="w-3/5 mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="flex-1 mr-4">
              <CardHeader>
                <CardTitle>YangBA</CardTitle>
                <CardDescription>
                  Web service that queries different NBA-related data to users,
                  including player profiles and a ranking system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://github.com/lem0000ns/yba_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-800"
                >
                  <u>Frontend</u>
                </a>
                <CardDescription>
                  Implemented using React and Typescript. This was my first time
                  using React so learning about state management, rendering, and
                  aligning components presented unique challenges. Features such
                  as tooltips, autocomplete, and unique player profiles are
                  included.
                </CardDescription>
                <br />
                <a
                  href="https://github.com/lem0000ns/yba_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-800"
                >
                  <u>Backend</u>
                </a>
                <CardDescription>
                  Written with Python scripts that dumped NBA and game data onto
                  Amazon Web Services, specifically S3 and Lambda. Data was
                  stored in AWS RDS, which was connected to a MySQL instance.
                  Images were retrieved from online{" "}
                  <span className="text-violet-800">
                    <a
                      href="https://github.com/GreenGuitar0/nba-players/tree/main"
                      target="_blank"
                      rel="nooopener noreferrer"
                    >
                      <u>repository</u>
                    </a>
                  </span>{" "}
                  and player profile information was web-scraped from Wikipedia
                  with BeautifulSoup.
                </CardDescription>
              </CardContent>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto">
              <Image
                className="rounded-2xl pt-4 pr-4"
                src={Bball}
                width={300}
                height={300}
                alt="bball"
              />
              <a
                className="text-violet-800"
                href="//yangba.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                yangba.net
              </a>
            </div>
          </div>
          <CardFooter>
            <p>June - Aug 2024</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default yba;
