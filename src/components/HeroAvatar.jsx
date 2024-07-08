import React, { useEffect, useRef } from "react";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import gsap from "gsap";

function HeroAvatar() {
  const heroAvatarRef = useRef(null);

  useEffect(() => {
    if (heroAvatarRef.current) {
      gsap.fromTo(
        heroAvatarRef.current,
        {
          y: "100%",
          opacity: 0.5,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          y:"0%",
        }
      );
    }
  }, []);
  return (
    <div className="scale-125 h-[30rem] overflow-hidden">
      <img src={avatar2} alt="" className="object-cover" ref={heroAvatarRef} />
    </div>
  );
}

export default HeroAvatar;
