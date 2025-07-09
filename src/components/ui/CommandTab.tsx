
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="rounded-xl bg-gradient-to-br  from-gray-900/50 to-gray-800/30 border border-gray-700/50 shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-700/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-sm font-mono ml-3">Terminal</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-md transition-all duration-200 text-sm"
        >
          {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-0 bg-gray-800/30 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
              currentTab === tab 
                ? "text-argn-pink border-argn-pink bg-gray-700/30" 
                : "text-gray-400 border-transparent hover:text-gray-300 hover:bg-gray-700/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Command Section */}
      <div className="p-4 bg-gray-900/50">
        <div className="flex items-center gap-3">
          <span className="text-argn-pink font-mono text-sm">$</span>
          <pre className="text-gray-100 font-mono text-sm flex-1 whitespace-pre-wrap">
            {commands[currentTab]}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CommandTabs;
