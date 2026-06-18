import React from "react";

const Heading = ({ heading, vari }) => {
  const variants = {
    pri: "lg:text-[64px] md:text-[56px] sm:text-[48px] text-[36px] max-w-[672px] text-center  leading-[112%] text-midnight-blue  ",
    sec: "md:text-[32px] text-[28px] md:leading-[225%] leading-[150%] text-midnight-blue  ",
    ter: "md:text-[32px] text-[28px] lg:leading-[225%] leading-[150%] text-white ",
  };
  return (
    <h2
      className={`font-bold text-midnight-blue  tracking-[-1%]   ${variants[vari]}`}
    >
      {heading}
    </h2>
  );
};

export default Heading;