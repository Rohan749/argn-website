"use client";
import React from "react";
import CommandTabs from "@/components/reusable/CommandTab";
import { VortextExamples, VortextPropsTable } from "./TextConstants";
import VisualCode from "@/components/reusable/VisualCode";

const VortextComponent = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 xl:mt-25">
      <h1>Text</h1>
      <div className="nextjs flex flex-col gap-5">
        <div>
          <h2 className="">Vortext</h2>
          <p>
            A lightweight, GSAP-powered text component with smooth, built-in
            animations. Ships standalone—no extra load, just clean text motion.
          </p>
        </div>
        <div>
            
          <CommandTabs
            commands={{
              npm: "npx argn-ui@latest add vortext",
              pnpm: "pnpm dlx argn-ui@latest add vortext",
              bun: "bunx --bun argn-ui@latest add vortext",
              yarn: "yarn argn-ui@latest add vortext",
            }}
          />
        </div>
        <p>
          This command installs GSAP and @gsap/react if missing, and injects a
          ready-to-use animated text component with prop-based animation
          controls.
        </p>

         <div className="my-5">
          <h2 className="">Examples</h2>
          <div className="flex flex-col gap-5">
            {VortextExamples.map(({name, description, codeSnippet, code}, index) => (
              <div key={name} className="mt-5 flex flex-col gap-2.5">
                <h3>{index+1}. {name}</h3>
                <p>
                  {description}
                </p>
                <VisualCode
                  code={code}
                  codeSnippet={codeSnippet}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-semibold my-5  text-white">
            Component Props
          </h2>
          <div className="overflow-x-auto rounded-md shadow-lg">
            <table className="min-w-full bg-black text-gray-100 border rounded-md bordered mb-5">
              <thead>
                <tr className="text-left bg-[var(--dark-gray)] ">
                  <th className="p-5 border-b border-[var(--gray)]">
                    Prop Key
                  </th>
                  <th className="p-5 border-b border-[var(--gray)]">
                    Prop Value
                  </th>
                  <th className="p-5 border-b border-[var(--gray)]">
                    Explanation
                  </th>
                </tr>
              </thead>
              <tbody>
                {VortextPropsTable.map((prop, index) => (
                  <tr key={index} className=" transition-colors">
                    <td className="p-5 border-b border-[var(--gray)] font-mono">
                      {prop.key}
                    </td>
                    <td className="p-5 border-b border-[var(--gray)] font-mono text-purple-400">
                      {prop.value}
                    </td>
                    <td className="p-5 border-b border-[var(--gray)] text-[var(--light-gray)]">
                      {prop.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VortextComponent;
