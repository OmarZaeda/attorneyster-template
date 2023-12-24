import React from "react";
import CenterHeader from "../CenterHeader";
import Button from "../Button";
import OurExperienced1 from "../../images/OurExperienced1.png";
import OurExperienced2 from "../../images/OurExperienced2.png";
import OurExperienced3 from "../../images/OurExperienced3.png";
import Insta from "../../icons/Insta.svg";
import Twitter from "../../icons/Twiter.svg";
import Fb from "../../icons/Fb.svg";
import Pintrest from "../../icons/Pintrest.svg";
import Line2 from "../../icons/Line2.svg";
const OurExperienced = () => {
  return (
    <div className="mainWidth mainPadding my-[100px]">
      <CenterHeader
        lg
        black
        children="Our Experienced Attorney Are Ready To answer any questions"
      />
      <div className="mt-[70px] flex justify-center flex-col lg:flex-row flex-wrap lg:justify-between items-center gap-[28px]">
        <div className="max-w-[448px] w-full">
          <div className="relative">
            <img src={OurExperienced1} alt="" />
            <div className=" bg-white px-[48px] py-[21px] absolute bottom-0 translate-x-[40%]">
              <div className="flex gap-[26px]">
                <img className="cursor-pointer" src={Insta} alt="" />
                <img className="cursor-pointer" src={Fb} alt="" />
                <img className="cursor-pointer" src={Twitter} alt="" />
                <img className="cursor-pointer" src={Pintrest} alt="" />
              </div>
            </div>
            <div className="absolute bottom-0 translate-x-[195%]">
              <img className="" src={Line2} alt="" />
            </div>
          </div>
          <div className="text-center mt-[21px]">
            <h6 className="text-semiBlack">Thomas Daniyel</h6>
            <p className="text-primary">Civil Attorney</p>
          </div>
        </div>
        <div className="max-w-[448px] w-full">
          <div className="relative">
            <img src={OurExperienced2} alt="" />
            <div className=" bg-white px-[48px] py-[21px] absolute bottom-0 translate-x-[40%]">
              <div className="flex gap-[26px]">
                <img className="cursor-pointer" src={Insta} alt="" />
                <img className="cursor-pointer" src={Fb} alt="" />
                <img className="cursor-pointer" src={Twitter} alt="" />
                <img className="cursor-pointer" src={Pintrest} alt="" />
              </div>
            </div>
            <div className="absolute bottom-0 translate-x-[195%]">
              <img className="" src={Line2} alt="" />
            </div>
          </div>
          <div className="text-center mt-[21px]">
            <h6 className="text-semiBlack">Nikolona Gail</h6>
            <p className="text-primary">Senior Attorney</p>
          </div>
        </div>
        <div className="max-w-[448px] w-full">
          <div className="relative">
            <img src={OurExperienced3} alt="" />
            <div className=" bg-white px-[48px] py-[21px] absolute bottom-0 translate-x-[40%]">
              <div className="flex gap-[26px]">
                <img className="cursor-pointer" src={Insta} alt="" />
                <img className="cursor-pointer" src={Fb} alt="" />
                <img className="cursor-pointer" src={Twitter} alt="" />
                <img className="cursor-pointer" src={Pintrest} alt="" />
              </div>
            </div>
            <div className="absolute bottom-0 translate-x-[195%]">
              <img className="" src={Line2} alt="" />
            </div>
          </div>
          <div className="text-center mt-[21px]">
            <h6 className="text-semiBlack">Michal David</h6>
            <p className="text-primary">Criminal Attorney</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[59px]">
        <Button size={"size1"} style={"style6"} children="Meet Attorney" />
      </div>
    </div>
  );
};

export default OurExperienced;
