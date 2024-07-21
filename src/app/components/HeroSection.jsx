"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex justify-center items-end">
        <h1 className="inline-flex text-center text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#181818] via-[#6e6e6e] to-[#a4a4a4] font-black">
          BANANA RIPENESS CHECK
        </h1>
        <MagnifyingGlassIcon className="h-8 w-8" />
      </div>
      
    </section>
    
  );
};

export default HeroSection;
