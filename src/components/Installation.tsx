"use client";
import React, { useState } from "react";
import { SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import NextjsInstall from "./NextjsInstall";
import ViteInstallation from "./ViteInstallation";

const Installation = () => {
  const [tool, setTool] = useState(0);

  return (
    <section className="w-full h-full flex flex-col gap-10">
      <div className="flex flex-col gap-5">
      <div>
        <h1 className="gradient_text">INSTALLATION</h1>
        <p>
          Install Argn components in your Next.js or Vite React project and
          start adding beautiful animations with just one command.
        </p>
      </div>
      <div className="tab_container flex items-center justify-start gap-2.5">
        <button
          onClick={() => setTool(0)}
          className={`${tool === 0 ? "active_tab" : ""}`}
        >
          <TbBrandNextjs />
          <span>NextJS</span>
        </button>
        <button
          onClick={() => setTool(1)}
          className={`${tool === 1 ? "active_tab" : ""}`}
        >
          <SiVite />
          <span>Vite</span>
        </button>
      </div>
      </div>
     {tool === 0 ? <NextjsInstall /> : null}
     {tool === 1 ? <ViteInstallation /> : null}
    </section>
  );
};

export default Installation;
