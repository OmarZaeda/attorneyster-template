import React from "react";
import Navbar from "../Layout/Navbar";
import MainIcon from "../../icons/main-icon.png";
import Button from "../Button";
const Landing = () => {
  return (
    <div className="bg-homeLanding bg-no-repeat bg-cover">
      <Navbar />
      <div className="mainWidth mainPadding py-20 lg:py-48">
        <div className="max-w-[593px] w-full">
          <img src={MainIcon} alt="" />
          <h1 className="my-3">Deeper Understanding Better Solutions</h1>
          <p className="pSize text-primary">
            It is a long established fact that a reader will be distracted by
            the readable content of a looking at its layout.
          </p>
          <Button
            children={"Get In Touch"}
            size={"size1"}
            style={"style1"}
            className={"mt-[23px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
