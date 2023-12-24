import React, { useEffect, useState } from "react";
import Logo from "../../icons/Logo.svg";
import Call from "../../icons/call-icon.png";
import Mail from "../../icons/mail-icon.png";
import { IoMdMenu, IoIosArrowDown } from "react-icons/io";
import Button from "../Button.js";

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const menuMobile = document.getElementById("menuMobile");
    if (menuMobile) {
      if (openMenu) {
        menuMobile.classList.remove("hidden");
        menuMobile.classList.toggle("flex");
      } else if (openMenu === false) {
        menuMobile.classList.remove("flex");
        menuMobile.classList.toggle("hidden");
      }
    }
  }, [openMenu]);
  return (
    <div className="">
      <div className="mainWidth mainPadding">
        <div className="flex justify-center flex-col gap-4 lg:gap-0 lg:flex-row md:justify-between items-center py-[41px]">
          <div>
            <img className="" src={Logo} alt="" />
          </div>
          <div className="flex items-center gap-10">
            <div className="">
              <Button
                children={"Book a Consultation"}
                style="style4"
                size="size1"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-[35px] border-y border-gray-2">
          <div
            className="bg-primary p-4 lg:hidden cursor-pointer relative"
            onClick={() => {
              setOpenMenu((prevOpenMenu) => !prevOpenMenu); // Toggle openMenu state
            }}>
            <IoMdMenu color="white" size={25} />
            <div id="menuMobile" className="hidden">
              <ul
                className={`absolute flex-col items-start bg-primary2 w-[300px] top-20 p-10 left-0 lg:hidden lg:items-center lg:space-x-14 text-[22px] text-white`}>
                <li className="cursor-pointer hover:text-primary animate py-3 hover:pl-2 duration-300 transition-all">
                  Home
                </li>
                <li className="cursor-pointer hover:text-primary animate py-3 hover:pl-2 duration-300 transition-all">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-primary animate flex flex-wrap justify-between items-center group py-3">
                  Pages <IoIosArrowDown />
                  <div className="max-h-0 hidden group-hover:block group-hover:max-h-[240px] duration-300 animate transition-all ease-out cursor-default">
                    <ul
                      className={`flex-col items-start w-[250px] p-5 text-lg lg:items-center space-y-5 text-[22px] text-white`}>
                      <li className="cursor-pointer hover:text-primary hover:pl-2 duration-300 transition-all">
                        Practice Areas
                      </li>
                      <li className="cursor-pointer hover:text-primary animate hover:pl-2 duration-300 transition-all">
                        Cases
                      </li>
                      <li className="cursor-pointer hover:text-primary animate flex justify-between items-center hover:pl-2 duration-300 transition-all">
                        Pricing
                      </li>
                      <li className="cursor-pointer hover:text-primary animate hover:pl-2 duration-300 transition-all">
                        Blog
                      </li>
                      <li className="cursor-pointer hover:text-primary animate hover:pl-2 duration-300 transition-all">
                        Testimonial
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="cursor-pointer hover:text-primary animate py-3">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
          <ul className="hidden lg:flex items-center space-x-10 xl:space-x-14 text-[22px] text-white">
            <li className="cursor-pointer text-primary animate">Home</li>
            <li className="cursor-pointer hover:text-primary animate">
              About Us
            </li>
            <li className="cursor-pointer hover:text-primary animate flex items-center gap-1 group relative py-4">
              Pages
              <IoIosArrowDown />
              <div className="absolute -bottom-5 hidden group-hover:block cursor-default">
                <ul
                  className={`absolute flex-col items-start -top-5 bg-white w-[250px] p-10  left-0 lg:items-center space-y-5 text-[22px] text-secondary`}>
                  <li className="cursor-pointer hover:text-primary animate  hover:pl-2 duration-300 transition-all">
                    Practice Areas
                  </li>
                  <li className="cursor-pointer hover:text-primary animate  hover:pl-2 duration-300 transition-all">
                    Cases
                  </li>
                  <li className="cursor-pointer hover:text-primary animate flex justify-between items-center  hover:pl-2 duration-300 transition-all">
                    Pricing
                  </li>
                  <li className="cursor-pointer hover:text-primary animate  hover:pl-2 duration-300 transition-all">
                    Blog
                  </li>
                  <li className="cursor-pointer hover:text-primary animate  hover:pl-2 duration-300 transition-all">
                    Testimonial
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer hover:text-primary animate">
              Contact Us
            </li>
          </ul>
          <div className="flex items-center gap-[46px]">
            <div className="items-center gap-3 hidden lg:flex">
              <img src={Call} alt="" />
              <div>
                <p className="text-lg text-primary">Call Us On:</p>
                <p className="text-[22px] text-white hover:text-primary animate cursor-pointer">
                  911-987654321
                </p>
              </div>
            </div>
            <div className="items-center gap-3 hidden sm:flex">
              <img src={Mail} alt="" />
              <div>
                <p className="text-lg text-primary">Email us:</p>
                <p className="text-[22px] text-white hover:text-primary animate cursor-pointer">
                  yourmail@mail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
