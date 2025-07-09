"use client";
import React from "react";
import CommandTabs from "@/components/reusable/CommandTab";
import VisualCode from "@/components/reusable/VisualCode";
import MotionLink from "@/lib/MotionLink";

const MotionLinkComponent = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 xl:mt-25">
      <h1>Motion Link</h1>
      <div className="nextjs flex flex-col gap-5">
        <div>
          <h2 className="">Fade out/Fade in Link</h2>
          <p>
            Next.js links are fast, but the sudden changes aren’t smooth. Using
            libraries like Framer Motion or GSAP feels like overkill for such
            minor animations and unnecessarily increases bundle size. What if we
            achieve smooth transitions with just a simple prop, no extra
            libraries?
          </p>
        </div>
        <div>
          <CommandTabs
            commands={{
              npm: "npx argn-ui@latest add motionLink --target <your-component-className>",
              pnpm: "pnpm dlx argn-ui@latest add motionLink --target <your-component-className>",
              bun: "bunx --bun argn-ui@latest add motionLink --target <your-component-className>",
              yarn: "yarn argn-ui@latest add motionLink --target <your-component-className>",
            }}
          />
        </div>
        <p className="py-5">
         <strong>NOTE: </strong> <span className="code_utility"> --target {`<your-component-className>`}</span>  is optional. Use it to animate a specific element/container when changing routes. If not used, the whole body will animate by default.
        </p>
        <p>
          This makes a utils folder with a motionLink component. It has smooth
          built-in CSS motion, no extra size or heavy libraries. Just use it
          instead of the Next.js Link tag.
        </p>

        <div className="my-5">
          <h2 className="">Examples</h2>
          <div className="flex flex-col gap-5">
            {/* {VortextExamples.map(({name, description, codeSnippet, code}, index) => (
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
            ))} */}
            <VisualCode 
              code={<div className="flex flex-col items-center justify-center gap-5">
                <div className="font-bold tracking-5">Watch the route change animations on this site!</div>
                <div className="flex gap-15 bg-[var(--gray)] py-2.5 px-10 rounded-2xl">
                <MotionLink href="/">Home</MotionLink>
                <MotionLink href="/installation">Installation</MotionLink>
                <MotionLink href="/components">Component</MotionLink>
                </div>
              </div>}
              codeSnippet={`<MotionLink href="/">Home</MotionLink>
<MotionLink href="/installation">Installation</MotionLink>
<MotionLink href="/components">Component</MotionLink>`}
            />
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default MotionLinkComponent;
