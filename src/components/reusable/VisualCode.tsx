"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck, FiRefreshCw } from "react-icons/fi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BiLogoTypescript } from "react-icons/bi";

type CommandTabsProps = {
  codeSnippet: string;
  code: React.ReactNode;
};

const VisualCode: React.FC<CommandTabsProps> = ({ codeSnippet, code }) => {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState<"typescript" | "javascript">(
    "typescript"
  );
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCodeCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="rounded-lg bg-[var(--dark-gray)] p-2.5 md:p-5 text-white max-w-4xl overflow-hidden flex flex-col gap-5 w-[100%]">
      <div className="relative rounded overflow-hidden ">
        <BiLogoTypescript className="text-blue-500 text-xs lg:text-3xl " />
        <SyntaxHighlighter
          language={"javascript"}
          style={dracula}
          customStyle={{
            borderRadius: "8px",
            background: "var(--dark-gray)",
            padding: "20px 0px",
            fontSize: "clamp(8px, 2vw, 16px)"
          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>

        <button
          onClick={handleCodeCopy}
          className="absolute top-2 right-2 text-white bg-[var(--dark-gray)] p-1.5 rounded hover:bg-gray-700"
        >
          {copied ? <FiCheck /> : <FiCopy />}
        </button>

        <div
          className={`${
            codeSnippet.includes("Vortext")
              ? "dark_display"
              : "animation_display"
          } relative mt-4 p-4 rounded`}
        >
          <button
            onClick={handleRefresh}
            className="absolute top-2 right-2 text-white bg-[var(--dark-gray)] p-1.5 rounded "
          >
            <FiRefreshCw />
          </button>

          <div
            key={refreshKey}
            className={`${
              codeSnippet.includes("Vortext") ? "dark_display" : "min-w-3xl"
            }`}
          >
            {code}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualCode;
