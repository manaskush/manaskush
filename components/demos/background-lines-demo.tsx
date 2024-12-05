import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      {/* <h5 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-3xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
       Hey, I am
      </h5> */}
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-1 md:py-1 relative z-20 font-bold tracking-tight">
        Manas Kush, <br /> Full Stack Developer
      </h2>
      <p className="max-w-xl mx-auto text-xl md:text-2xl text-neutral-700 dark:text-neutral-400 text-center">
      I build things for the web.
        </p>
         
    </BackgroundLines>

  );
}
