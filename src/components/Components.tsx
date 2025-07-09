"use client";

import { JSX } from "react";
import BaseButton from "./animationComponents/Button/BaseButton";
import BaseText from "./animationComponents/Text/BaseText";
import VortextComponent from "./animationComponents/Text/VortextComponent";
import MotionLink from "@/lib/MotionLink";

type LinkItem = {
  component: string;
  link: string;
  componentArray: JSX.Element[];
};

const nonGSAPComponents: LinkItem[] = [
  {
    component: "Motion Link",
    link: "components/motion-link",
    componentArray: [<BaseButton />],
  },
];

const GSAPComponents: LinkItem[] = [
  {
    component: "Vortext",
    link: "components/vortext",
    componentArray: [<VortextComponent />],
  },
  {
    component: "Text",
    link: "components/texts",
    componentArray: [<BaseText />],
  },
  {
    component: "Buttons",
    link: "components/buttons",
    componentArray: [<BaseButton />],
  },
];

const Components = () => {
  return (
    <section className="w-full h-full flex flex-col gap-10 xl:mt-20 pb-5">
      <h1 className="gradient_text">ANIMATED COMPONENTS</h1>

      <div>
        <h4 className="font_custom font-bold text-[var(--light-gray)]">
          GSAP Animation Components
        </h4>
        <div className="grid grid-cols-3">
          {GSAPComponents.map(({ component, link }, i) => (
            <button
              key={`gsap-${component}-${i}`}
              className="components my-5 w-full px-5 py-2.5 text-lg font-bold"
            >
              <MotionLink href={link}>{component}</MotionLink>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font_custom font-bold text-[var(--light-gray)]">
          Pure CSS Animation Components
        </h4>
        <div className="grid grid-cols-3">
          {nonGSAPComponents.map(({ component, link }, i) => (
            <button
              key={`pure-${component}-${i}`}
              className="components my-5 w-full px-5 py-2.5 text-lg font-bold"
            >
              <MotionLink href={link}>{component}</MotionLink>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Components;
