import { Card, CardContent } from "@/components/ui/card";
import VisualCode from "./VisualCode";
import CommandTabs from "./CommandTab";
import Vortext from "../animatedComponents/Vortext";

const features = [
  {
    title: "One Prompt, Perfect Animation",
    description:
      "Describe what you want, get production-ready GSAP components instantly. No config files, no learning curves.",
    icon: "⚡",
  },
  {
    title: "Awwwards-Quality Standards",
    description:
      "Every component is crafted to match the animation quality you see on award-winning websites.",
    icon: "🏆",
  },
  {
    title: "Zero Bundle Bloat",
    description:
      "Unlike libraries that add 100kb+, get only the exact component you need. Keep your app lightning fast.",
    icon: "🪶",
  },
  {
    title: "Pure CSS & JS Options",
    description:
      "Need lightweight? Skip GSAP entirely with our vanilla CSS and JavaScript animation alternatives.",
    icon: "🎯",
  },
  {
    title: "Component-Level Precision",
    description:
      "Each animation is individually crafted, not generated from templates. True attention to detail.",
    icon: "🔧",
  },
  {
    title: "Framework Agnostic",
    description:
      "Works with React, Vue, Svelte, vanilla JavaScript, or any framework. Your choice, your stack.",
    icon: "🔄",
  },
];

export const VortextPropsTable = [
  {
    key: "animateBy?",
    value: `"words" | "chars"`,
    explanation:
      "Controls the animation level. By default, text animates line by line. Use 'words' to animate each word or 'chars' to animate each character for finer effects.",
  },
];

export const VortextExamples = [
  {
    name: "Base Vortext",
    description: "Just pass the component! And you're good to go!",
    codeSnippet: `<Vortext className="text-6xl font_anton">
  JOIN ME IN THIS CULT
</Vortext>`,
    code: (
      <Vortext className="text-5xl lg:text-6xl xl:text-7xl font_anton">
        JOIN ME IN THIS CULT
      </Vortext>
    ),
  },
  {
    name: "Custom Vortext",
    description: "Remix it with your css and make it look more versatile!",
    codeSnippet: `<Vortext animateBy="chars" className="text-6xl font_anton">
  ANIMATING THE CHARACTERS!
</Vortext>`,
    code: (
      <Vortext animateBy="chars" className="text-4xl lg:text-6xl font_anton">
        THIS IS UNIQUE
      </Vortext>
    ),
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-4xl md:text-6xl font-bold mb-6 font-inter gradient_text">
            DON'T BELIEVE <span className="text-gradient">ME?</span>
          </div>

          <p>
            Try these initial component below in your Next.js application!
          </p>
        </div>

        {/* Installation Command */}
        <div className="mb-12">
          <CommandTabs
            commands={{
              npm: "npx argn-ui@latest add vortext",
              pnpm: "pnpm dlx argn-ui@latest add vortext",
              bun: "bunx --bun argn-ui@latest add vortext",
              yarn: "yarn argn-ui@latest add vortext",
            }}
          />
        </div>

        {/* Code Examples */}
        <div className="space-y-8 mb-16">
          {VortextExamples.map(
            ({ name, description, codeSnippet, code }, index) => (
              <div key={name} className="space-y-4">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {name}
                  </h3>
                  <p>
                    {description}
                  </p>
                </div>
                <VisualCode code={code} codeSnippet={codeSnippet} />
              </div>
            )
          )}
        </div>

        {/* Props Table */}
        {/* <div className="bg-[var(--dark-gray)] p-5 rounded-xl overflow-hidden">
          <div className="py-2.5">
            <h2 className="text-2xl font-semibold text-white font-inter">
              Component Props
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left rounded-lg">
                  <th className=" py-5 pr-5 text-gray-300 font-medium border-b border-gray-700/30">
                    Prop Key
                  </th>
                  <th className="py-5 pr-5 text-gray-300 font-medium border-b border-gray-700/30">
                    Type
                  </th>
                  <th className=" py-5 pl-5 text-gray-300 font-medium border-b border-gray-700/30">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {VortextPropsTable.map((prop, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-800/20 transition-colors"
                  >
                    <td className=" py-5 pr-5 font-mono text-argn-pink border-b border-gray-700/20">
                      {prop.key}
                    </td>
                    <td className=" py-5 pr-5 font-mono text-argn-purple border-b border-gray-700/20">
                      {prop.value}
                    </td>
                    <td className="py-5 pl-5 text-gray-300 border-b border-gray-700/20">
                      {prop.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </section>
  );
};
