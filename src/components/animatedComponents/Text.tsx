import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  animateOnHover?:
    | "scramble"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right";
  animateInView?:
    | "scramble"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right";
  wobble?: boolean;
  wobbleBy?: "words" | "chars";
}

const Text: React.FC<TextProps> = ({
  className,
  children,
  animateInView,
  wobble,
  wobbleBy,
  ...props
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const animationInProgress = useRef(false);
  const mouseInside = useRef(false);
  let split: any;

  const startScrambleAnimation = () => {
    const textElement = textRef.current;
    const originalText = textElement?.textContent;
    const words = split.words;
    const chars = split.chars;
    const lines = split.lines;

    animationInProgress.current = true;

    gsap.to(textElement, {
      scrambleText: {
        text: originalText ?? "",
        chars: "lowerChars",
        speed: 1,
      },
      duration: 2,
      opacity: 1,
      onComplete: () => {
        animationInProgress.current = false;
        mouseInside.current = false;

        if (mouseInside.current) {
          startScrambleAnimation();
        }
      },
    });
  };

  const startSlideAnimation = () => {
    const textElement = textRef.current;
    const words = split.words;
    const chars = split.chars;
    const lines = split.lines;

    if (textElement) {
      animationInProgress.current = true;

      gsap.to(".argn_typography", {
        opacity: 1,
      });

      if (animateInView) {
        gsap.fromTo(
          wobbleBy === "words"
            ? words
            : wobbleBy === "chars"
            ? chars
            : lines,
          {
            y:
              animateInView === "slide-up"
                ? "100%"
                : animateInView === "slide-down"
                ? "-100%"
                : "",
            x:
              animateInView === "slide-left"
                ? "-100%"
                : animateInView === "slide-right"
                ? "100%"
                : "",
            opacity: 0,
          },
          {
            y: 0,
            x: 0,
            duration: 1,
            opacity: 1,
            ease: "back.out(0.7)",
            stagger: wobble ? 0.09 : 0,
            onComplete: () => {
              animationInProgress.current = false;
              mouseInside.current = false;

              if (mouseInside.current) {
                startSlideAnimation();
              }
            },
          }
        );
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && textRef.current) {
      split = new SplitText(textRef.current, { type: "chars, words, lines" });
    }

    if (typeof window === "undefined" || !textRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && animateInView !== undefined) {
            animateInView.startsWith("slide")
              ? startSlideAnimation()
              : startScrambleAnimation();
            observer.unobserve(entry.target);
          } else if (animateInView == undefined)
            gsap.set(".argn_typography", { opacity: 1 });
        });
      },
    );

    observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={cn(
        "prose argn_typography w-fit opacity-0 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Text;