import React from "react";
import CommandTabs from "./reusable/CommandTab";

const NextjsInstall = () => {
  return (
    <div className="flex flex-col gap-10 pb-5">
      <div className="nextjs flex flex-col gap-5">
        <div>
          <h1 className="">Next.js</h1>
          <p>Install and configure Argn for Next.js.</p>
        </div>
        <div>
          <CommandTabs
            commands={{
              npm: "npx argn-ui@latest init",
              pnpm: "pnpm dlx argn-ui@latest init",
              bun: "bunx --bun argn-ui@latest init",
              yarn: "yarn argn-ui@latest init",
            }}
          />
        </div>
        <p>
          This command will create a nextjs application with gsap and
          @gsap/react installed for animation.
        </p>
      </div>
      <div className="nextjs flex flex-col gap-2.5">
        <h1>Add Components</h1>
        <p>You can now start adding animated components to your project.</p>
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
      </div>
    </div>
  );
};

export default NextjsInstall;
