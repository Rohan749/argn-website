"use client";

import CommandTabs from "@/components/reusable/CommandTab";
import React from "react";
import { ButtonExamplesWithCode, ButtonPropsTable } from "./ButtonConstants";
import VisualCode from "@/components/reusable/VisualCode";

const BaseButton = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 xl:mt-25 ">
      <h1 className="text-left">Button</h1>
      <div className="nextjs flex flex-col gap-5">
        <div>
          <h2>BaseButton</h2>
          <p>
            A lightweight, gsap/react-powered button with built-in animations.
            Ships as a standalone component—no extra bulk, just smooth
            interactions.
          </p>
        </div>
        <div>
          <CommandTabs
            commands={{
              npm: "npx argn-ui@latest add button",
              pnpm: "pnpm dlx argn-ui@latest add button",
              bun: "bunx --bun argn-ui@latest add button",
              yarn: "yarn argn-ui@latest add button",
            }}
          />
        </div>
        <p>
          This command installs GSAP and @gsap/react if they aren’t already
          installed, and injects a pre-built BaseButton component with
          ready-to-use animations that can be controlled via props.
        </p>

        <div className="my-5">
          <h2 className="">Examples</h2>
          <div className="flex flex-col gap-5">
            {ButtonExamplesWithCode.map(({name, description, codeSnippet, code}, index) => (
              <div key={description} className="mt-5 flex flex-col gap-2.5">
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

        <div className="flex justify-center"></div>
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-semibold my-5  text-white">
            Component Props
          </h2>
          <div className="overflow-x-auto rounded-sm shadow-lg  pb-5">
            <table className="min-w-full bg-black text-gray-100 border bordered">
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
                {ButtonPropsTable.map((prop, index) => (
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

export default BaseButton;
