"use client";

import { useEffect, useState } from "react";

const phrases = ["who am i?", "我是谁？", "¿quién soy?", "내가 누구야?"];

const SLIDE_HEIGHT = "3.5rem";

export default function RotatingTitle() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= phrases.length ? prev : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index !== phrases.length) return;

    const timeout = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 700);

    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (animate) return;

    const frame = requestAnimationFrame(() => {
      setAnimate(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [animate]);

  const items = [...phrases, phrases[0]];

  return (
    <div
      className="mx-auto overflow-hidden"
      style={{ height: SLIDE_HEIGHT }}
    >
      <div
        className={animate ? "transition-transform duration-700 ease-in-out" : ""}
        style={{ transform: `translateY(calc(-${index} * ${SLIDE_HEIGHT}))` }}
      >
        {items.map((phrase, i) => (
          <div
            key={`${phrase}-${i}`}
            className="flex items-center justify-center text-4xl font-bold text-violet-100"
            style={{ height: SLIDE_HEIGHT }}
          >
            {phrase}
          </div>
        ))}
      </div>
    </div>
  );
}
