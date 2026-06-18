import React from "react";

const Button = ({ btn, vari }) => {
  const varient = {
    pri: "font-normal lg:text-[14px] sm:text-[12px] text-[10px]  lg:px-[16px] lg:py-[12px] sm:px-[14px] sm:py-[10px] px-[11px] py-[9px]  inline-block leading-[132.86%] bg-white  hover:bg-midnight-blue hover:text-white text-midnight-blue border border-midnight-blue",
    sec: "font-medium md:text-[16px] text-[14px]  md:px-[32px] md:py-[20px] px-[28px] py-[16px] lg:mt-12 md:mt-10 sm:mt-6 mt-4 leading-[115%] bg-midnight-blue text-white hover:bg-white hover:text-midnight-blue border border-transparent hover:border-midnight-blue ",
    ter: "font-medium lg:text-[14px]  text-[12px] lg:px-[33px]  lg:py-[18px] sm:px-6 sm:py-4 px-5 py-3 mt-[24px] leading-[100%]  text-white bg-sky-cyan hover:bg-white hover:text-sky-cyan lg:mb-24 md:mb-20 sm:mb-14 mb-10 w-fit",
  };
  return (
    <h2
      className={`rounded-[48px] tracking-[-1%] cursor-pointer transition-all duration-300 ${varient[vari]}`}
    >
      {btn}
    </h2>
  );
};

export default Button;