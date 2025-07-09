
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
    animateBy?: "words" | "chars"
}

const Vortext: React.FC<TextProps> = ({ animateBy, className, children, ...props }) => {
  const textRef = useRef<HTMLDivElement>(null);
  let split: any;

  const startVortextAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(textRef.current, { opacity: 1 })
      .fromTo(
        animateBy == undefined ? split.lines : animateBy == "words" ? split.words : animateBy === "chars" ? split.chars : split.lines,
        { 
          opacity: 0, 
          rotateX: -45, 
          rotateY: 30, 
          x: 230, 
          y: 120, 
          z: -180,
          scale: 0.8 
        },
        {
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          x: 0,
          y: 0,
          z: 0,
          scale: 1,
          stagger: 0.02,
          duration: 1.2,
          ease: "expo.out",
        },
        "<"
      )
      .fromTo(
        split.lines,
        { wordSpacing: "50px" },
        { wordSpacing: "0px", delay: 0.05 },
        "<"
      )
      .fromTo(
        split.words,
        { y: (i) => i * 50, x: (i) => i * 50 },
        { y: 0, x: 0, ease: "back.out", duration: 1.5 },
        "<"
      );
  };

  useGSAP(() => {
    if (!textRef.current) return;

    if (typeof window !== "undefined" && textRef.current) {
      split = new SplitText(textRef.current, { type: "chars, words, lines" });
    }

    startVortextAnimation();
  }, []);

  return (
    <>
      <div
        ref={textRef}
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center center",
          transformStyle: "preserve-3d",
        }}
        className={cn("font_anton font-bold text-white opacity-0 leading-tight", className)}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Vortext;
