"use client";

import MotionLink from "@/lib/MotionLink";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type BreadcrumbProps = {
  separator?: string;
  className?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  separator = "/",
  className = "",
}) => {
  const pathname = usePathname();

  // Split and filter path segments
  const segments = pathname.split("/").filter(Boolean);

  return (
   <nav className={`text-lg hidden xl:block fixed w-full breadcrumb z-[99999999999] ${className}`} aria-label="Breadcrumb">
      <ol className="flex w-full space-x-1 bordered  backdrop-blur-2xl ">
        {segments.map((segment, index) => {
          // Create the path up to this segment
          const path = "/" + segments.slice(0, index + 1).join("/");

          // Format the segment for display
          const name = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <React.Fragment key={index}>
              {index !== 0 && <span className="mx-3 text-xl mt-1">{<FaAngleDoubleRight />}</span>}
              {index === segments.length - 1 ? (
                <span className="text-gray-500 text-lg">{name}</span>
              ) : (
                <MotionLink href={path} className="hover:underline h-full">
                  {name}
                </MotionLink>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
