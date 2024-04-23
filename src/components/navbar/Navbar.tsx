"use client";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { navData } from "@/utils/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#ffffff]  shadow-md lg:px-10 px-4 sticky top-0 z-20">
      <div className="flex justify-between items-center h-[80px]">
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
    </div>
  );
};

export default Navbar;
