
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-argn-pink/15 via-argn-purple/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-argn-dark via-transparent to-transparent"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-blue-500/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 backdrop-blur-3xl">
        <Card className="backdrop-blur-xl shadow-lg shadow-[#090909] border-none ">
          <CardContent className="md:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-inter leading-tight">
              Ready to elevate your{" "}
              <span className="text-gradient bg-gradient-to-r from-argn-pink via-argn-purple to-argn-blue bg-clip-text">
                animations
              </span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-inter">
              Join developers worldwide creating animations that stand out.
            </p>

            <a href="https://tally.so/r/310Xll" className="group inline-block">
              <Button className="bg-gradient-to-r from-argn-pink to-argn-purple hover:from-argn-purple hover:to-argn-blue text-white md:px-12 py-4 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-argn-pink/50 font-inter">
                Join the Waitlist
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </a>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 mt-12 font-inter">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Free during beta</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>No spam, unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Priority access to new components</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
