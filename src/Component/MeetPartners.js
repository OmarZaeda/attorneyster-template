import React from "react";
import MainIcon2 from "../icons/main-icon2.svg";
import Partner1 from "../icons/Partner1.svg";
import Partner2 from "../icons/Partner2.svg";
import Partner3 from "../icons/Partner3.svg";
import Partner4 from "../icons/Partner4.svg";
import Partner5 from "../icons/Partner5.svg";
const MeetPartners = () => {
  return (
    <div className="mainWidth mainPadding pt-[59px]">
      <div className="flex justify-center gap-4">
        <img className="hidden sm:block" src={MainIcon2} alt="" />
        <h3 className="text-semiBlack text-center">Meet The Partners</h3>
        <img className="hidden sm:block" src={MainIcon2} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-5 lg:justify-between mt-[65px] max-w-[1138px] w-full mx-auto">
        <img src={Partner1} alt="" />
        <img src={Partner2} alt="" />
        <img src={Partner3} alt="" />
        <img src={Partner4} alt="" />
        <img src={Partner5} alt="" />
      </div>
    </div>
  );
};

export default MeetPartners;
