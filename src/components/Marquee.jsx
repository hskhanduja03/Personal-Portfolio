import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Marquee({dir, bg}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay:0.5
        }
      );
    }
  }, []);

  return (
    <div className={`marquee overflow-hidden w-full mb-1`}>
      <div className={`track inline-block ${dir==='reverse'?"reverse":"forward"}`}>
        <div
          ref={textRef}
          className="content text-[17rem] marqueeFont font-thin dancing-script"
        >
          {dir==='reverse'?(
            <p>&nbsp;HARMEET SINGH. HARMEET SINGH. HARMEET SINGH. HARMEET SINGH. HARMEET SINGH. HARMEET SINGH.</p>
          ):(
            <p>&nbsp;DEVELOPER DEVELOPER DEVELOPER DEVELOPER DEVELOPER DEVELOPER DEVELOPER DEVELOPER</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
