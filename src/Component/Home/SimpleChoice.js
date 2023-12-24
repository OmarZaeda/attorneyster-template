import React from "react";
import LeftHeader from "../LeftHeader";
import SimpleChoice1 from "../../images/SimpleChoice1.png";
import SimpleChoice2 from "../../images/SimpleChoice2.png";
import SimpleChoiceAvatar from "../../images/SimpleChoiceAvatar.png";
import SimpleChoiceCase from "../../icons/SimpleChoiceCase.svg";

const SimpleChoice = () => {
  return (
    <div className="bg-primary2">
      <div className="mainPadding mainWidth">
        <div className="flex flex-col-reverse lg:grid  lg:grid-cols-3 gap-[50px] py-[100px] lg:py-[100px]">
          <div className="space-y-8 lg:col-span-1">
            <img
              className="lg:h-[293px] max-w-[493px] w-full"
              src={SimpleChoice1}
              alt=""
            />

            <img
              className="lg:h-[293px] max-w-[493px] w-full"
              src={SimpleChoice2}
              alt=""
            />
          </div>
          <div className="lg:col-span-2">
            <LeftHeader
              width="max-w-[400px]"
              children="The Simple Choice for Complex Litigation"
            />
            <p className="mt-[48px] mb-[31px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have su alteration in some form, by injected
              humour, oir randomised workds which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything.
            </p>
            <img src={SimpleChoiceAvatar} alt="" />
            <div className="mt-[48px] flex flex-col lg:flex-row lg:space-x-[36px] flex-wrap lg:flex-no-wrap">
              <div className="flex gap-[22px] text-[22px] font-outfit font-medium text-white bg-gray-3 py-[31px] px-[48px] w-fit">
                <img src={SimpleChoiceCase} alt="" />
                <div className="w-full">
                  95% <br />
                  Case Success
                </div>
              </div>
              <div className="flex gap-[22px] text-[22px] font-outfit font-medium text-primary2 bg-primary py-[30px] px-[46px] w-fit">
                <div className="bg-primary2 text-white text-[30px] py-[11px] px-[15px] rounded-md font-bold">
                  35+
                </div>
                Years <br /> Experiance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleChoice;

{
  /* <LeftHeader
  Width="max-w-[400px]"
  children="The Simple Choice for Complex Litigation"
/>; */
}
