import React from "react";
import CenterHeader from "../CenterHeader";
import TroubleChart from "../../icons/TroubleChart1.png";
import TroubleChart2 from "../../icons/TroubleChart2.png";
import TroubleCardBg from "../../images/TroubleCardBg.png";
import MeetPartners from "../MeetPartners";
const IfTrouble = () => {
  return (
    <div className="bg-white">
      <div className="mainWidth mainPadding my-[100px]">
        <div className="flex flex-col justify-center items-center">
          <CenterHeader black sm children="If you're in trouble we can help." />
          <p className="text-gray-5 max-w-[753px] w-full text-center mt-[47px]">
            There are of Lorem Ipsum available, but the majority have su
            alteration in some form, by injected humour, oir which don't look
            even slightly believable.
          </p>
        </div>
        <div className="py-[52px] border-b border-b-gray-7 flex justify-center  flex-wrap lg:justify-between gap-5">
          <div className="bg-gray-6 px-10 py-[32px] max-w-[449px] w-full flex gap-[18px] items-center">
            <img src={TroubleChart} alt="" />
            <div>
              <h6 className="text-semiBlack">Trusted Clients</h6>
              <p className="text-gray-5">There are of Lorem Ipsum</p>
            </div>
          </div>
          <div className="bg-gray-6 px-10 py-[32px] max-w-[449px] w-full flex gap-[18px] items-center">
            <img src={TroubleChart2} alt="" />
            <div>
              <h6 className="text-semiBlack">Successful Cases</h6>
              <p className="text-gray-5">There are of Lorem Ipsum</p>
            </div>
          </div>
          <div className="bg-gray-6 px-10 py-[32px] max-w-[449px] w-full flex gap-[18px] items-center bg-TroubleCardBg">
            <div className="max-w-[160px] w-full">
              <h6 className="font-outfit">15,890+</h6>
              <p className="text-white font-light">
                Criminal Defense Case Served
              </p>
            </div>
          </div>
        </div>
        <MeetPartners />
      </div>
    </div>
  );
};

export default IfTrouble;
