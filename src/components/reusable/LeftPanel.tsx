"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/ARGNUI.png";
import { usePathname } from "next/navigation";
import MotionLink from "@/lib/MotionLink";
import { MdInstallDesktop } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FiLayers } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import Hamburger from "hamburger-react";

const LeftPanel = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/components")) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      setIsOpen(false)
  }, [pathname])


  return (
    <>
      <div className="fixed w-full top-0 left-0 right-0 z-[99999999999999]">
        <div className="flex items-center gap-5 p-5 border_bottom w-full backdrop-blur-3xl relative justify-between ">
          <Image height={25} alt="" src={logo} />
          <span
            className="text-xl font-bold xl:block hidden"
            style={{ letterSpacing: "15px" }}
          >
            ARGN<span className="gradient_text">UI</span>
          </span>
          <div className="xl:hidden visible flex z-[99999] relative">
            <Hamburger toggled={isOpen} rounded onToggle={() =>setIsOpen(!isOpen)} size={25} />
          </div>
          <div className={`fixed ${isOpen ? "right-0" :"right-[-100%]"} duration-600 ease-in-out transition-all h-screen z-[9999] top-0 p-5 bg-[var(--dark-gray)] flex flex-col gap-5 pt-15`}>
            <MotionLink href={"/"}>Home</MotionLink>
            <MotionLink href={"/installation"}>Installation</MotionLink>
            <MotionLink href={"/components"}>Components</MotionLink>
            {/* <MotionLink href={"/examples"}>Examples</MotionLink> */}
            <div className="flex flex-col gap-5 text-3xl ">
              <div className="flex gap-10">
                <FaYoutube />
                <FaGithub />
              </div>
              <Button>SHARE YOUR IDEA</Button>
            </div>
          </div>
          <div className=" h-full w-full  justify-end items-center gap-10 text-3xl xl:flex hidden">
            <FaYoutube />
            <FaGithub />
            <Button>SHARE YOUR IDEA</Button>
          </div>
        </div>
      </div>
      <section className="leftPanel pl-5 py-5 z-[9999] hidden  xl:flex flex-col gap-2.5 link_section top-0 bottom-0 fixed min-w-[14rem] pt-25">
        <MotionLink
          className={`${pathname === "/" ? "selected_panel" : ""}`}
          href={"/"}
        >
          <GoHome
            className={`${
              pathname === "/" ? "opacity-100" : "opacity-60"
            } text-xl`}
          />
          Home
        </MotionLink>
        <MotionLink
          className={`${pathname === "/installation" ? "selected_panel" : ""}`}
          href={"/installation"}
        >
          <MdInstallDesktop
            className={`${
              pathname === "/installation" ? "opacity-100" : "opacity-60"
            } text-xl`}
          />
          Installation
        </MotionLink>
        <MotionLink
          className={`${pathname === "/components" ? "selected_panel" : ""}`}
          href={"/components"}
        >
          <FiLayers
            className={`${
              pathname === "/components" ? "opacity-100" : "opacity-60"
            } text-xl`}
          />
          Components
        </MotionLink>
        {/* <MotionLink
          className={`${pathname === "/examples" ? "selected_panel" : ""}`}
          href={"/examples"}
        >
          <IoPlayOutline
            className={`${
              pathname === "/examples" ? "opacity-100" : "opacity-60"
            } text-xl`}
          />
          Examples
        </MotionLink> */}
      </section>
    </>
  );
};

export default LeftPanel;
