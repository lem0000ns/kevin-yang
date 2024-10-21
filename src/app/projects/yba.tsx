import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Bball from "../resources/bball.png";

const yba = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-center space-y-16">
      <div className="experience-specific">
        <Card className="lg:w-3/5 w-4/5 mx-auto bg-violet-100 hover:scale-105 transition-all duration-300 ease-in-out outline outline-violet-300 outline-offset-4">
          <div className="flex lg:flex-row flex-col justify-between items-center">
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
                  Implemented using React and Typescript. Features such as
                  tooltips, autocomplete, and unique player profiles are
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
                  Data was stored in AWS RDS, which was connected to a MySQL
                  instance. Images were retrieved from online{" "}
                  <span className="text-violet-800">
                    <a
                      href="https://github.com/GreenGuitar0/nba-players/tree/main"
                      target="_blank"
                      rel="nooopener noreferrer"
                    >
                      repository
                    </a>
                  </span>{" "}
                  and player profile information was web-scraped from Wikipedia
                  with BeautifulSoup.
                </CardDescription>
              </CardContent>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto">
              <Image
                className="pt-4 lg:pr-4"
                src={Bball}
                width={400}
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
        </Card>
      </div>
    </div>
  );
};

export default yba;
