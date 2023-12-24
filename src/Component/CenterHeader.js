import React from "react";
import MainIcon2 from "../icons/main-icon2.svg";
const CenterHeader = ({ children, white, black, sm, md, lg }) => {
  return (
    <div className="flex justify-center flex-col items-center text-center">
      <h3
        className={`
        ${white ? "text-white" : ""} 
        ${black ? "text-black" : ""} 
        ${sm ? "max-w-[332px] w-full" : ""} 
        ${md ? "max-w-[488px] w-full" : ""}
        ${lg ? "max-w-[676px] w-full" : ""}`}>
        {children}
      </h3>
      <div className="mt-2">
        <img src={MainIcon2} alt="" />
      </div>
    </div>
  );
};

export default CenterHeader;
