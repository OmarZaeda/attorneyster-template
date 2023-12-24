import React from "react";

const Button = ({ children, style, size, className }) => {
  let buttonStyle = "";
  let buttonSize = "";

  switch (style) {
    case "style1":
      buttonStyle =
        "bg-primary text-primary2 border border-primary  hover:border-primary hover:bg-transparent hover:border hover:text-primary";
      break;
    case "style2":
      buttonStyle = "text-white border border-primary";
      break;
    case "style3":
      buttonStyle = "bg-white text-primary2";
      break;
    case "style4":
      buttonStyle =
        "bg-buttonTrans text-white hover:bg-primary hover:text-secondary";
      break;
    case "style5":
      buttonStyle =
        "bg-semiBlack text-white hover:bg-primary hover:text-secondary";
      break;
    case "style6":
      buttonStyle =
        "bg-white text-semiBlack border border-semiBlack hover:border-primary hover:bg-primary hover:text-secondary";
      break;
  }

  switch (size) {
    case "size1":
      buttonSize = " px-[50px] py-[20px] sm:px-[71px] sm:py-[28px]";
      break;
    case "size2":
      buttonSize = " px-[70px] py-[20px] lg:px-[123px] lg:py-[28px]";
      break;
    case "size3":
      buttonSize = " px-[25px] py-[20px] 2xl:px-[45px] 2xl:py-[28px]";
      break;
    case "size4":
      buttonSize = " px-[38px] py-[15px]";
      break;
  }

  return (
    <button
      className={`font-outfit text-base sm:text-[22px] animate font-medium ${buttonStyle} ${buttonSize} ${className}`}
      type="button">
      {children}
    </button>
  );
};

export default Button;
