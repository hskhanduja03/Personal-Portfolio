import React from "react";

function HoverButton({ children }) {
  return (
    <div className="cursor-pointer  font-semibold group relative inline-block overflow-hidden w-full">
      <span className="block  group-hover:translate-y-[-120%] transition-all duration-500">{children}</span>

      <span className='block w-full rotate-16 translate-y-[120%] absolute left-0 group-hover:rotate-0 group-hover:translate-y-[-100%] transition-all duration-500'>{children}</span>
      
    </div>
  );
}

export default HoverButton;


  