import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(SplitText, ScrambleTextPlugin);
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "bg-primary overflow-hidden text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white shadow-xs hover:bg-black/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  children,
  className,
  variant,
  size,
  // asChild = false,
  animateOnHover,
  wobble,
  wobbleBy,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    // asChild?: boolean;
    animateOnHover?:
      | "fade-up"
      | "fade-down"
      | "fade-left"
      | "fade-right"
      | "scramble";
    wobble?: boolean;
    wobbleBy?: "chars" | "words";
  }) {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const splitRef = React.useRef<SplitText>(null);

   const handleHoverAnimation = () => {
      if (buttonRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth;
        buttonRef.current.style.width = `${buttonWidth}px`;

        if (!splitRef.current) {
          splitRef.current = new SplitText(buttonRef.current, {
            type: "lines,words,chars",
            charsClass: "char",
            wordsClass: "word",
            lineClass: "line",
          });
        }

        gsap.killTweensOf(splitRef.current.chars);

      if (animateOnHover === "scramble") {
        gsap.to(buttonRef.current, {
          scrambleText: {
            text: buttonRef.current.textContent ?? "",
            chars: "lowerCase",
            speed: 0.9,
          },
          duration: 1,
          opacity: 1,
          onComplete: () => {
            if (buttonRef.current) buttonRef.current.style.width = "";
          },
        });
      } else {
        if (animateOnHover === "fade-up") {
          fromVars = { opacity: 0, y: "100%" };
        } else if (animateOnHover === "fade-down") {
          fromVars = { opacity: 0, y: "-100%" };
        } else if (animateOnHover === "fade-left") {
          fromVars = { opacity: 0, x: "-100%" };
        } else if (animateOnHover === "fade-right") {
          fromVars = { opacity: 0, x: "100%" };
        }

        if (wobble) {
          wobbleBy === "words"
            ? gsap.fromTo(splitRef.current.words, fromVars, toVars)
            : gsap.fromTo(splitRef.current.chars, fromVars, toVars);
        } else {
          gsap.fromTo(splitRef.current.lines, fromVars, toVars);
        }
      }
    }
  };

  let fromVars: gsap.TweenVars = { opacity: 1, y: 0 };
  const toVars: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    x: 0,
    stagger: wobble ? 0.1 : 0,
    duration: 0.5,
  };

  useGSAP(() => {
    gsap.set(buttonRef.current, {
      opacity: 1,
    });
  }, []);

  return (
    <button
      data-slot="button"
      onMouseEnter={handleHoverAnimation}
      className={cn(
        buttonVariants({ variant, size, className }),
        "gap-0 opacity-0"
      )}
      ref={buttonRef}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };