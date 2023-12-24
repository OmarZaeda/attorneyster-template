import React from "react";
import MainIcon from "../icons/main-icon.png";
const LeftHeader = ({ children, width }) => {
  return (
    <div className="">
      <h3 className={`mb-2 ${width} w-full`}>{children}</h3>
      <img src={MainIcon} alt="" />
    </div>
  );
};

export default LeftHeader;
