import { Button } from "@/components/animatedComponents/Button";

// components/PropsTable.tsx
export const ButtonPropsTable = [
  {
    key: "animateOnHover?",
    value: `"fade-up" | "fade-down" | "fade-left" | "fade-right" | "scramble"`,
    explanation:
      "Defines the animation type that triggers when the user hovers over the element.",
  },
  {
    key: "wobble?",
    value: "boolean",
    explanation: "Enables or disables the wobble animation on the element.",
  },
  {
    key: "wobbleBy?",
    value: `"chars" | "words"`,
    explanation:
      "Determines whether the wobble effect applies to individual characters or entire words.",
  },
];
export type ButtonExample = {
  name: string;
  description: string;
  codeSnippet: string;
  code: React.ReactNode;
};

export const ButtonExamplesWithCode: ButtonExample[] = [
  {
    name: "Scramble Button",
    description: "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Button size={"lg"} animateOnHover="scramble">
  Hover me!
</Button>`,
    code: (
      <Button size="lg" animateOnHover="scramble">
        Hover me!
      </Button>
    )
  },
  {
    name: "Fade Button",
    description: "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Button size={"lg"} animateOnHover="fade-up">
  Hover me!
</Button>`,
    code: (
      <Button size="lg" animateOnHover="fade-up">
        Hover me!
      </Button>
    )
  },
  {
    name: "Right Fade Button",
    description: "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Button size={"lg"} animateOnHover="fade-right" wobble>
  Hover me!
</Button>`,
    code: (
      <Button size="lg" animateOnHover="fade-right" wobble>
        Hover me!
      </Button>
    )
  },
   {
    name: "Fade Down Button w/ Wobble Effect",
    description: "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Button size={"lg"} animateOnHover="fade-down" wobble wobbleBy="words">
  Hover me!
</Button>`,
    code: (
      <Button size="lg" animateOnHover="fade-down" wobble wobbleBy="words">
        Hover me!
      </Button>
    )
  },

];