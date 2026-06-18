import React from "react";

const Para = ({ paragraph, vari }) => {
  const variants = {
    pri: "leading-[133.33%] font-medium md:text-[24px] text-[20px] text-center lg:mt-10 md:mt-8 sm:mt-5 mt-4  text-midnight-blue",
    sec: "font-normal md:text-[16px] text-[14px] leading-[175%] mb-6 text-midnight-blue",
    ter: "font-normal text-[18px] leading-[175%] text-midnight-blue ",
    qua: "font-normal text-[16px] leading-[175%] text-white mt-2 text-midnight-blue",
    qui: "font-normal text-[10px] leading-[140%]  text-light-purpl mt-4",
    sen: "font-normal text-[12px] md:leading-[234%] leading-[150%] cursor-pointer text-light-purpl ",
  };
  return (
    <p className={`tracking-[-1%]  ${variants[vari]}`}>
      {paragraph}
    </p>
  );
};

export default Para;