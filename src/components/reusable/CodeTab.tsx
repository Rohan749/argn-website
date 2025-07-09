import React, { useState } from "react";

import { FiCopy, FiCheck } from "react-icons/fi";

type CodeTabProps = {
  folderStructure: string;
  command: string;
};

const CodeTab: React.FC<CodeTabProps> = ({ folderStructure, command }) => {
 
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Revert after 2 seconds
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="rounded-lg bg-[var(--dark-gray)] lg:p-5 text-white max-w-4xl relative">

      <div className="flex gap-2.5 mb-5">
        {folderStructure}
      </div>

      <div className="flex justify-between items-start p-2.5 rounded ">
        <pre className="lg:text-sm text-xs text-[var(--light-gray)] text-left">
          {command}
        </pre>
        <button
          onClick={handleCopy}
          className="ml-4 text-[var(--light-gray)] text-lg hover:text-gray-300 absolute top-5 right-5"
        >
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>
    </div>
  );
};

export default CodeTab;
