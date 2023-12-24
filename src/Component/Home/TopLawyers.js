import React from "react";
import LeftHeader from "../LeftHeader";
import TopLawyersImg from "../../images/TopLawyersImg.png";
import CaseStrength from "../../icons/CaseStrength.svg";
import Button from "../Button";
const TopLawyers = () => {
  return (
    <div className="bg-TopLawyersBg bg-no-repeat bg-cover py-[100px]">
      <div className="mainWidth mainPadding">
        <div className="bg-TopLawyersColor py-[144px] px-[78px] flex justify-start lg:justify-between flex-wrap gap-10 xl:gap-0">
          <div>
            <LeftHeader
              width="max-w-[370px]"
              children="We Are Top Lawyers And History"
            />
            <div className="mt-[50px] max-w-[360px] w-full">
              <p className="text-primary font-semibold ">1995 – Opening</p>
              <p className="mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
            </div>
            <div className="mt-[50px] max-w-[360px] w-full">
              <p className="text-primary font-semibold ">
                2011 – Open Branch Office
              </p>
              <p className="mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
            </div>
            <div className="mt-[50px] max-w-[360px] w-full">
              <p className="text-primary font-semibold ">
                2015 – 18000K Client’s
              </p>
              <p className="mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
            </div>
            <div className="mt-[50px] max-w-[360px] w-full">
              <p className="text-primary font-semibold ">
                2020– Best Law & Firm Awwards
              </p>
              <p className="mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but majority going to use a passage.
              </p>
            </div>
          </div>
          <div className="hidden xl:block">
            <img src={TopLawyersImg} alt="" />
          </div>
          <div>
            <LeftHeader
              width="max-w-[341px]"
              children="We Are Specialised And Experienced"
            />
            <p className="mt-[48px] max-w-[459px] w-full">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium deleniti atque corrupti quos molestias
              excepturi odio dignissimos ducimus qui blanditiis sint occaecati .
            </p>
            <div className="my-[53px]">
              <img src={CaseStrength} alt="" />
            </div>
            <Button
              size={"size1"}
              style={"style1"}
              children="Free Consulting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLawyers;
