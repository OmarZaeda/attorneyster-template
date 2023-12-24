import React from "react";
import ReviewsAvatar1 from "../../icons/ReviewsAvatar1.svg";
import ReviewsAvatar2 from "../../icons/ReviewsAvatar2.svg";
import ReviewsAvatar3 from "../../icons/ReviewsAvatar3.svg";
import ReviewsAvatar4 from "../../icons/ReviewsAvatar4.svg";
import Quote from "../../icons/Quote.svg";
import CenterHeader from "../CenterHeader";
const ClientReviews = () => {
  return (
    <div className="bg-primary2">
      <div className="mainPadding mainWidth py-[100px]">
        <CenterHeader white md children="Client Opinions & Reviews" />
        <div className="mt-[70px] flex justify-center flex-col items-center gap-[18px] flex-wrap md:justify-between md:flex-row">
          <div className="">
            <div className="bg-secondary px-[48px] py-[70px] rounded-bl-[40px] max-w-[336px] w-full">
              <img src={Quote} alt="" />
              <p className="mt-[26px]">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
            </div>
            <div className="flex gap-[21px] items-center mt-5">
              <img className="rounded-full" src={ReviewsAvatar1} alt="" />
              <div>
                <h6>Nattasha</h6>
                <p>Junior Lawyer</p>
              </div>
            </div>
          </div>
          <div className="2xl:flex 2xl:flex-col-reverse">
            <div className="bg-secondary px-[48px] py-[70px] rounded-tl-[40px] max-w-[336px] w-full">
              <img src={Quote} alt="" />
              <p className="mt-[26px]">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
            </div>
            <div className="flex gap-[21px] items-center  mt-5 2xl:mt-0 2xl:mb-5">
              <img className="rounded-full" src={ReviewsAvatar2} alt="" />
              <div>
                <h6>Minci pall</h6>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-secondary px-[48px] py-[70px] rounded-bl-[40px] max-w-[336px] w-full">
              <img src={Quote} alt="" />
              <p className="mt-[26px]">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
            </div>
            <div className="flex gap-[21px] items-center mt-5">
              <img className="rounded-full" src={ReviewsAvatar3} alt="" />
              <div>
                <h6>Julia Rose</h6>
                <p>Consultant</p>
              </div>
            </div>
          </div>
          <div className="2xl:flex 2xl:flex-col-reverse">
            <div className="bg-secondary px-[48px] py-[70px] rounded-tl-[40px] max-w-[336px] w-full">
              <img src={Quote} alt="" />
              <p className="mt-[26px]">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
            </div>
            <div className="flex gap-[21px] items-center mt-5 2xl:mt-0 2xl:mb-5">
              <img className="rounded-full" src={ReviewsAvatar4} alt="" />
              <div>
                <h6>John David</h6>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
