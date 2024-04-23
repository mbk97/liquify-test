"use client";
import { navData } from "@/utils/data";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <header className="relative">
      <div className="bg-[#ffffff] h-[80px] flex justify-between items-center shadow-md lg:px-10 px-4 sticky top-0 z-10">
        <div>
          <Image src={logo} alt="logo" height={45} />
        </div>

        <div className={` ${open ? "menu-list active" : "menu-list"}`}>
          <ul className="menu-list-wrapper flex list-none gap-4">
            <li className="mobile_logo block md:hidden">
              <Image src={logo} alt="logo" height={45} />
            </li>
            {navData.map((nav) => {
              return <li key={nav.id}>{nav.text}</li>;
            })}
          </ul>
          <div
            className="close absolute top-4 right-4 block md:hidden cursor-pointer"
            onClick={handleCloseMenu}
          >
            <MdClose size={30} />
          </div>
        </div>
        <div className="block md:hidden">
          <p onClick={handleOpenMenu} className="cursor-pointer">
            {open ? <MdClose size={30} /> : <MdOutlineMenu size={30} />}
          </p>
        </div>
      </div>

      <div className="hero-section flex items-center px-10">
        <div className="hero_text">
          <h2 className=" text-[2rem] lg:text-[3rem]  lg:w-[700px] text-[#ffffff]">
            We are on a mission{" "}
            <span className="font-semibold">
              to build a scaleable credit system
            </span>{" "}
            for companies of all sizes
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
