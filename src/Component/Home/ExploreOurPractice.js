import React from "react";
import LeftHeader from "../LeftHeader";
import Line from "../../icons/Line.svg";
import Explore1 from "../../icons/Explore1.svg";
import Explore2 from "../../icons/Explore2.svg";
import Explore3 from "../../icons/Explore3.svg";
import Explore4 from "../../icons/Explore4.svg";
import Explore5 from "../../icons/Explore5.svg";
import Explore6 from "../../icons/Explore6.svg";
import Button from "../Button";
const ExploreOurPractice = () => {
  return (
    <div className="bg-semiBlack">
      <div className="mainWidth mainPadding py-[100px]">
        <div className="flex lg:justify-between items-center flex-wrap xl:flex-nowrap">
          <LeftHeader
            width="max-w-[360px]"
            children="Explore Our Practice Arease"
          />
          <img className="xl:block hidden" src={Line} alt="" />
          <p className="max-w-[745px] mt-10 xl:mt-0">
            There are{" "}
            <span className="text-primary">many variations of passages</span> of
            Lorem Ipsum available, but the majority have su alteration in some
            form, by injected humour, oir{" "}
            <span className="text-primary">randomised workds</span> which don't
            look even slightly believable.
          </p>
        </div>
        <div className="mt-[63px] flex justify-center items-center flex-col gap-10 md:grid grid-cols-2 xl:grid-cols-3">
          <div className="bg-primary2 max-w-[448px] w-full px-[50px] py-[58px]">
            <h5>Business Law</h5>
            <p className="mt-2 mb-[35px]">
              There are many variations of passages of Lorem Ipsum available,
              but majority going to use a passage.
            </p>
            <div className="flex justify-between pt-[34px] border-t border-t-gray-4 flex-wrap gap-3">
              <img src={Explore1} alt="" />
              <Button size={"size4"} style={"style5"} children="Learn More" />
            </div>
          </div>
          <div className="bg-primary2 max-w-[448px] w-full px-[50px] py-[58px]">
            <h5>Construction Law</h5>
            <p className="mt-2 mb-[35px]">
              There are many variations of passages of Lorem Ipsum available,
              but majority going to use a passage.
            </p>
            <div className="flex justify-between pt-[34px] border-t border-t-gray-4 flex-wrap gap-3">
              <img src={Explore2} alt="" />
              <Button size={"size4"} style={"style5"} children="Learn More" />
            </div>
          </div>

          <div className="bg-primary2 max-w-[448px] w-full px-[50px] py-[58px]">
            <h5>Car Accident</h5>
            <p className="mt-2 mb-[35px]">
              There are many variations of passages of Lorem Ipsum available,
              but majority going to use a passage.
            </p>
            <div className="flex justify-between pt-[34px] border-t border-t-gray-4 flex-wrap gap-3">
              <img src={Explore3} alt="" />
              <Button size={"size4"} style={"style5"} children="Learn More" />
            </div>
          </div>
          <div className="bg-primary2 max-w-[448px] w-full px-[50px] py-[58px]">
            <h5>Wrongful Death</h5>
            <p className="mt-2 mb-[35px]">
              There are many variations of passages of Lorem Ipsum available,
              but majority going to use a passage.
            </p>
            <div className="flex justify-between pt-[34px] border-t border-t-gray-4 flex-wrap gap-3">
              <img src={Explore4} alt="" />
              <Button size={"size4"} style={"style5"} children="Learn More" />
            </div>
          </div>
          <div className="bg-primary2 max-w-[448px] w-full px-[50px] py-[58px]">
            <h5>Criminal Law</h5>
            <p className="mt-2 mb-[35px]">
              There are many variations of passages of Lorem Ipsum available,
              but majority going to use a passage.
            </p>
            <div className="flex justify-between pt-[34px] border-t border-t-gray-4 flex-wrap gap-3">
              <img src={Explore5} alt="" />
              <Button size={"size4"} style={"style5"} children="Learn More" />
            </div>
          </div>
          <div className="bg-primary2 max-w-[448px] w-full px-[50px] py-[58px]">
            <h5>Family Law</h5>
            <p className="mt-2 mb-[35px]">
              There are many variations of passages of Lorem Ipsum available,
              but majority going to use a passage.
            </p>
            <div className="flex justify-between pt-[34px] border-t border-t-gray-4 flex-wrap gap-3">
              <img src={Explore6} alt="" />
              <Button size={"size4"} style={"style5"} children="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurPractice;
