import React, { useEffect, useRef, useState } from "react";
import HoverButton from "./HoverButton";
import { TbCirclesRelation } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";

function navTab({ name, link }) {
  return (
    <a
      target="_blank"
      href={link}
      className="border-[1px] py-2 px-4 border-black hover:bg-black hover:text-white rounded-sm w-[20%] "
    >
      <HoverButton>
        <div className="flex items-center justify-between w-full font-thin">
          <p>{name}</p>
          <GoArrowUpRight />
        </div>
      </HoverButton>
    </a>
  );
}

function TopNav() {
  const [openNav, setOpenNav] = useState(false);
  const navref = useRef(null);
  const data = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/hskhanduja/",
    },
    {
      name: "Github",
      link: "https://github.com/hskhanduja03",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hskhanduja15/",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com",
    },
  ];
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(navref.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.5,
    });
  }, [openNav]);
  if (openNav)
    return (
      <div
        ref={navref}
        className="min-h-20 py-5 bg-[#d8d8d8] text-black text-xl flex  items-center"
      >
        <div className="containers w-[90%] flex justify-around">
          {data.map((obj) => {
            return navTab(obj);
          })}
        </div>
        <div
          className="text-white bg-black p-2 rounded-xl cursor-pointer"
          onClick={() => setOpenNav(false)}
        >
          <IoMdClose />
        </div>
      </div>
    );
  return (
    <div className="bg-white w-full max-w-[90%] mx-auto my-4 min-h-8 py-2 rounded-lg px-5 flex items-center justify-between uppercase text-[13px] font-medium">
      <div className="flex items-center gap-3">
        <div className="bg-black inline-block p-2 rounded-lg border-2 border-black hover:bg-white text-white hover:text-black transition-all duration-200 cursor-pointer">
          <h1 className="ga-maamli-regular text-lg font-semibold ">Hsk</h1>
        </div>
        <h2>Another Human, Creating Amazing Web-apps</h2>
      </div>
      <div className="">
        <HoverButton>
          <div
            className="flex gap-1 items-center "
            onClick={() => setOpenNav(true)}
          >
            <TbCirclesRelation className="h-6 w-6" />
            <span>Connect</span>
          </div>
        </HoverButton>
      </div>
    </div>
  );
}

export default TopNav;
