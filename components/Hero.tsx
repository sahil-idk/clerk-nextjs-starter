"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Clerk + Next js + shadcn.",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Check auth functionality on top right corner
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href="https://github.com/sahil-idk/clerk-nextjs-starter">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          
          Get started 
        </button>
        </Link>
        
      </div>
    </div>
  );
}
