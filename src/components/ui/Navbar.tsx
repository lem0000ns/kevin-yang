"use client";
import React from "react";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const Navlinks = () => {
  return (
    <>
      <Link href="/">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/fun">Play</Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full">
        <div className="hidden w-full md:flex justify-center space-x-32 ">
          <Navlinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X></X> : <Menu></Menu>}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center basis-full">
          <Navlinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
