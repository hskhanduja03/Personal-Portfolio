import React, { useEffect, useRef } from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import Marquee from "./components/Marquee";
import HeroAvatar from "./components/HeroAvatar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BottomNav from "./components/BottomNav";

function App() {
  const heroref = useRef();
  const para = useRef();
  const nav = useRef();
  const botNav = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroElement = heroref.current;
    const paraElement = para.current;
    const navElement = nav.current;
    const botNavElement = botNav.current;

    gsap.to(heroElement, {
      duration: 3,
      position:"fixed",
      scrollTrigger: {
        trigger: heroElement,
        start: "top 0%",  // Start the animation when paraElement is 50% in view
        end: "bottom 0%", // End the animation when 80% of the paraElement is visible
        scrub: true,       // Enable scrubbing for smooth effect
        // markers: true      // Show markers for debugging (optional)
      }
    });

    gsap.from(paraElement, {
      duration: 5,
      zIndex: 50,
      y: 100,
      scrollTrigger: {
        trigger: paraElement,
        start: "top 50%",
        end: "top -80%",
        scrub: true,
        // markers: true
      }
    });

    ScrollTrigger.create({
      trigger: paraElement,
      start: "top top",
      end: "bottom top",
      onEnter: () => gsap.to(navElement, { autoAlpha: 0 }),
      onLeaveBack: () => gsap.to(navElement, { autoAlpha: 1 }),
    });

    ScrollTrigger.create({
      trigger: paraElement,
      start: "top 95%",
      end: "top 100%",
      onEnter: () => gsap.to(botNavElement, { autoAlpha: 1 }),
      onLeaveBack: () => gsap.to(botNavElement, { autoAlpha: 0 }),
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="fixed z-10 w-full" id="nav" ref={nav}>
        <TopNav />
      </div>
      <div
        className="w-full h-screen pt-20 relative overflow-y-hidden"
        id="heroimg"
        ref={heroref}
      >
        <div id="herocon">
          <Marquee dir={"reverse"} bg={"red-300"}/>
          <Marquee dir={null} bg={"red-300"}/>
          <div className="bottom-10 left-0 right-0 max-w-xl mx-auto absolute avatar">
            <HeroAvatar />
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[#ECEBEB]" >
      </div>
      <div className="w-full h-screen bg-black rounded-lg" ref={para}>
        <h1>hello hi kya haal chaal</h1>
      </div>
      <div className="z-10 fixed bottom-2 left-1/2 -translate-x-1/2 opacity-0" id="botNav" ref={botNav}>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
