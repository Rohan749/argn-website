import React from "react";
import CommandTabs from "./reusable/CommandTab";
import CodeTab from "./reusable/CodeTab";

const ViteInstallation = () => {
  return (
    <div className="flex flex-col gap-10 pb-5 ">
      <div className="nextjs flex flex-col gap-5">
        <div>
          <h1 className="">Vite</h1>
          <p>Install and configure Argn for Vite React.</p>
        </div>
        <div>
          <CommandTabs
            commands={{
              npm: "npm create vite@latest",
              pnpm: "pnpm create vite@latest",
              bun: "bun create vite@latest",
              yarn: "yarn create vite@latest",
            }}
          />
        </div>
        <p>
          This command will create a Vite react application with gsap and
          @gsap/react installed for animation.
        </p>
      </div>

      <div className="nextjs flex flex-col gap-5">
        <div>
          <h1 className="">Tailwind css installation</h1>
          <p>Install tailwind in your Vite React</p>
        </div>
        <div>
          <CommandTabs
            commands={{
              npm: "npm install tailwindcss @tailwindcss/vite",
              pnpm: "pnpm add tailwindcss @tailwindcss/vite",
              bun: "bun add tailwindcss @tailwindcss/vite",
              yarn: "yarn add tailwindcss @tailwindcss/vite",
            }}
          />
        </div>
      </div>
      <div className="nextjs flex flex-col gap-2.5">
        <h1>Replace code</h1>
        <p>
          In the <span className="highlighted">src/index.css</span> replace
          everything with the code below.
        </p>
        <div>
          <CodeTab
            command={`@import "tailwindcss";`}
            folderStructure="src/index.css"
          />
        </div>
      </div>

      <div className="nextjs flex flex-col gap-2.5">
        <h1>Edit Files</h1>
        <p>
          Vite now separates TypeScript settings across three files, and you’ll
          need to update two of them given below.
        </p>

        <h2>tsconfig.json File</h2>
        <div>
          <CodeTab
            command={`{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
            folderStructure="tsconfig.json"
          />
        </div>
      </div>
      <div className="nextjs flex flex-col gap-2.5">
        <h2>tsconfig.app.json File</h2>
        <div>
          <CodeTab
            command={`{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}`}
            folderStructure="tsconfig.json"
          />
        </div>
      </div>
      <div className="nextjs flex flex-col gap-5">
        <div>
          <h1 className="">Update vite.config.ts</h1>
          <p>To resolve paths without any error, add the following code to vite.config.ts</p>
        </div>
        <div>
          <CommandTabs
            commands={{
              npm: "npm install -D @types/node",
              pnpm: "pnpm add -D @types/node",
              bun: "bun add -D @types/node",
              yarn: "yarn add -D @types/node",
            }}
          />
        </div>
        <div>
           <CodeTab
            command={`import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`}
            folderStructure="vite.config.ts"
          />
        </div>
      </div>
       <div className="nextjs flex flex-col gap-2.5 ">
        <h1>Add Components</h1>
        <p>You can now start adding animated components to your Vite react application.</p>
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

export default ViteInstallation;
