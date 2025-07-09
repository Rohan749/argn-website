import { Button } from "@/components/reusable/button";
import { Badge } from "@/components/reusable/badge";
import { ArrowDown } from "lucide-react";
import { HeroSection } from "./reusable/HeroSection";
import { FeaturesGrid } from "./reusable/FeaturesGrid";
import { ComparisonSection } from "./reusable/ComparisonSection";
import { CTASection } from "./reusable/CTASection";
import Image from "next/image";
import logo from "@/assets/images/ARGNUI.png";

const Home = () => {
  return (
    <div className="  text-white ">
      <HeroSection />
      <FeaturesGrid />
      <ComparisonSection />
      <CTASection />
      <footer className="py-5 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-bold text-gradient mb-4 flex items-center flex-col justify-center gap-2.5">
            <Image height={100} alt="" src={logo} />
            <span
              className="text-2xl font-bold"
              style={{ letterSpacing: "15px" }}
            >
              ARGN<span className="gradient_text">UI</span>
            </span>
          </div>
          <p className="mb-6">
            Premium animation components for developers who demand excellence.
          </p>
          <p className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-argn-pink transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-argn-pink transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-argn-pink transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-argn-pink transition-colors">
              Terms
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
