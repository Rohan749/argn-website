"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import Vortext from "../animatedComponents/Vortext";
import Text from "../animatedComponents/Text";
import Link from "next/link";
import gsap from "../../assets/images/gsap.png"
import tailwind from "../../assets/images/tailwindcss.svg"
import nextjs from "../../assets/images/nextdotjs.png"
import vite from "../../assets/images/vite.svg"
import typescript from "../../assets/images/typescript.svg"
import react from "../../assets/images/react.svg"

// components/TechStack.tsx
import React from "react";
import Image from "next/image";

const techStack = [
  {
    name: "Next.js",
    icon: <Image src={nextjs} className="text-white" width={40} alt="" />
    ,
  },
  {
    name: "Vite",
    icon: <Image src={vite} className="text-white" width={40} alt="" />
  },
  {
    name: "React",
    icon: <Image src={react} className="text-white" width={40} alt="" />
  },
  {
    name: "GSAP",
    icon: <Image src={gsap} className="text-white" width={40} alt="" />
  },
  {
    name: "TypeScript",
    icon: <Image src={typescript} className="text-white" width={35} alt="" />
  },
];


export const HeroSection = () => {
  return (
    <section className="relative flex h-[70vh] justify-center items-center p-5 mt-2">
      {/* Enhanced background with multiple layers */}
      <div className="relative z-10  max-w-9xl  ">
        {/* Enhanced main heading */}
        <h1 className="font-bold mb-8 leading-[0.9] font-inter">
          <div className="md:text-6xl xl:text-8xl font-bold text-left">
            AWARDS LEVEL
          </div>
          <br />
          <div className="md:text-7xl xl:text-9xl text-left gradient_text">
            ANIMATIONS
          </div>
        </h1>

        {/* Enhanced subheading */}
        <p className="mb-10">
          Skip the bloated libraries. Get individually crafted GSAP components
          that deliver{" "}
          <span className="text-argn-pink font-semibold  ">precision</span>,
          <span className="text-argn-purple font-semibold"> performance</span>,
          and{" "}
          <span className="text-gradient font-semibold">
            pixel-perfect animation
          </span>
        </p>
        <div className="flex xl:flex-row flex-col justify-between items-center xl:items-start gap-15">
        <Button >
          Get Early Access
        </Button>
        <div className="flex flex-wrap items-center gap-10">
        {techStack.map((tech) => (
        <div key={tech.name} className="flex items-center gap-2">
          {tech.icon}
          {/* <span className="text-gray-500 text-sm">{tech.name}</span> */}
        </div>
      ))}
      </div>
      </div>
      </div>
    </section>
  );
};
