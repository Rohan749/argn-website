"use client"

import React, { useState } from "react";

import { FiCopy, FiCheck } from "react-icons/fi";

type CommandTabsProps = {
  commands: {
    npm: string;
    pnpm: string;
    yarn: string;
    bun: string;
  };
};

const CommandTabs: React.FC<CommandTabsProps> = ({ commands }) => {
  const tabs = Object.keys(commands) as Array<keyof typeof commands>;
  const [currentTab, setCurrentTab] = useState<keyof typeof commands>("npm");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commands[currentTab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Revert after 2 seconds
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };


  return (
    <div className="rounded-lg bg-[var(--dark-gray)] lg:p-5 text-white max-w-4xl">
      {/* Tab Switcher */}
      <div className="flex gap-2.5 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-2.5 py-1 rounded ${
              currentTab === tab ? "bg-[var(--gray)] " : " text-[var(--light-gray)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

       <div className="flex justify-between items-center p-2.5 rounded ">
        <pre className="text-sm text-[var(--light-gray)] whitespace-pre-wrap">
          {commands[currentTab]}
        </pre>
        <button onClick={handleCopy} className="ml-4 text-[var(--light-gray)] text-lg hover:text-gray-300">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>
    </div>
  );
};

export default CommandTabs;
