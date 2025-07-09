import Text from "@/components/animatedComponents/Text";
import Vortext from "@/components/animatedComponents/Vortext";

// components/PropsTable.tsx
export const BaseTextPropsTable = [
  {
    key: "animateInView?",
    value: `"scramble" | "slide-up" | "slide-down" | "slide-left" | "slide-right"`,
    explanation:
      "Specifies the animation to trigger when the text enters the viewport.",
  },
  {
    key: "wobble?",
    value: "boolean",
    explanation:
      "Toggles the wobble animation effect when the text is in view.",
  },
  {
    key: "wobbleBy?",
    value: `"words" | "chars"`,
    explanation:
      "Applies the wobble effect to individual characters or entire words.",
  },
];

export type ButtonExample = {
  name: string;
  description: string;
  codeSnippet: string;
  code: React.ReactNode;
};

export const VortextPropsTable = [
  {
    key: "animateBy?",
    value: `"words" | "chars"`,
    explanation:
      "Controls the animation level. By default, text animates line by line. Use 'words' to animate each word or 'chars' to animate each character for finer effects.",
  },
];



export const TextExamplesWithCode: ButtonExample[] = [
  {
    name: "Scramble Button",
    description:
      "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Text animateInView="scramble" className="text-left">
    Gonna Scramble here! Its pure matrix vibe!!
</Text>`,
    code: (
      <Text className="text-lg font-bold" animateInView="scramble">
        Gonna Scramble here! Its pure matrix vibe!!
      </Text>
    ),
  },
  {
    name: "Fade Button",
    description:
      "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Text animateInView="slide-up">
    This is simple slide up...but can you make it better?
  </Text>`,
    code: (
      <Text className="text-lg font-bold" animateInView="slide-up">
        This is simple slide up...but can you make it better?
      </Text>
    ),
  },
  {
    name: "Right Fade Button",
    description:
      "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Text animateInView="slide-left" wobble>
    Now, we are just sliding towards different direction...
</Text>`,
    code: (
      <Text className="text-lg font-bold" animateInView="slide-left">
        Now, we are just sliding towards different direction...
      </Text>
    ),
  },
  {
    name: "Fade Down Button w/ Wobble Effect",
    description:
      "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Text animateInView="slide-right" wobble wobbleBy="chars" >
    And this is right....but wait, something's different.
</Text>`,
    code: (
      <Text
        className="text-lg font-bold"
        animateInView="slide-right"
        wobble
        wobbleBy="chars"
      >
        And this is right....but wait, something's different.
      </Text>
    ),
  },
  {
    name: "Fade Down Button w/ Wobble Effect",
    description:
      "Scramble button adds a quick, glitchy reveal to your button text.",
    codeSnippet: `<Text animateInView="slide-up" wobble wobbleBy="words" >
    Oh, just words instead of letters.....that's cool!
</Text>`,
    code: (
      <Text
        className="text-lg font-bold"
        animateInView="slide-up"
        wobble
        wobbleBy="words"
      >
        Oh, different then the last one.....that's cool!
      </Text>
    ),
  },
];

export const VortextExamples = [
 {
    name: "Base Vortext",
    description:
      "3D perspective text animation that, by default, animates each line individually.",
    codeSnippet: `<Vortext className="text-6xl font_anton ">
    JOIN ME IN THIS CULT
</Vortext>`,
    code: (
      <Vortext className="text-6xl font_anton">JOIN ME IN THIS CULT</Vortext>

    ),
  },
   {
    name: "Custom Vortext",
    description:
      "Remix it with your css and make it look more versatile!",
    codeSnippet: `<Vortext animateBy="chars" className="text-6xl font_anton">
  ANIMATING THE CHARACTERS!
</Vortext>`,
    code: (
      <Vortext animateBy="chars" className="text-6xl font_anton">ANIMATING THE CHARACTERS!</Vortext>

    ),
  },
];
