"use client";
import React, { useState } from "react";

const Header = () => {
  return (
    <header className="relative">
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
