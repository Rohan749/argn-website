
import { Card, CardContent } from "@/components/ui/card";

const comparisons = [
  {
    category: "Bundle Size",
    others: "100kb+ libraries for basic animations",
    argn: "Only the components you need, ~2-5kb each",
    advantage: "98% smaller footprint"
  },
  {
    category: "Customization",
    others: "Limited preset configurations",
    argn: "Every parameter fully customizable",
    advantage: "Unlimited flexibility"
  },
  {
    category: "Quality",
    others: "Template-generated animations",
    argn: "Hand-crafted, Awwwards-level detail",
    advantage: "Professional grade"
  },
  {
    category: "Implementation",
    others: "Complex APIs and documentation",
    argn: "One prompt, ready-to-use component",
    advantage: "10x faster integration"
  }
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
           <div className="text-4xl md:text-5xl font-bold mb-6 font-inter">
            ARGN UI <span className="text-4xl mx-5 gradient_text">V/S</span>  EVERYONE ELSE
          </div>

          <p >
            See why top developers are making the switch from bloated animation libraries to precision-crafted components.
          </p>
        
        </div>

        {/* Comparison table */}
        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <Card 
              key={index}
              className="bg-[var(--dark-gray)] border-none hover:border-argn-purple/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.category}</h4>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Other Tools</p>
                    <p className="text-red-400">{item.others}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">argn-ui</p>
                    <p className="text-argn-pink">{item.argn}</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block bg-argn-gradient text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.advantage}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-4">
            The choice is clear: <span className="text-gradient font-semibold">precision over bloat</span>
          </p>
        </div>
      </div>
    </section>
  );
};
