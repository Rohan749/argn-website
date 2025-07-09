"use client";

import React, { useState } from "react";
import LeftPanel from "./reusable/LeftPanel";
import Home from "./Home";
import Installation from "./Installation";
import Components from "./Components";
import Examples from "./Examples";

const Body = () => {
  const [section, setSection] = useState(0);

  return (
    <div className="flex gap-5 h-full w-full">
      <LeftPanel  />
      <div className="h-full w-full flex flex-col items-center">
      {section === 0 && <Home />}
      {section === 1 && <Installation />}
      {section === 2 && <Components />}
      {section === 3 && <Examples />}
      </div>
    </div>
  );
};

export default Body;
