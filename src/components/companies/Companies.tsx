"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alumina from "@/assets/images/alumina.png";
import avofruits from "@/assets/images/avofruits.png";
import cartama from "@/assets/images/cartama.png";
import comfama from "@/assets/images/comfama.png";
import espumados from "@/assets/images/espumados.png";
import farmaqx from "@/assets/images/farmaqx.png";
import flamingo from "@/assets/images/flamingo.png";
import haceb from "@/assets/images/haceb.png";
import inducol from "@/assets/images/inducol.png";
import orbis from "@/assets/images/orbis.png";
import prodenvases from "@/assets/images/prodenvases.png";
import renault from "@/assets/images/renault.png";
import riopaila from "@/assets/images/riopaila.png";
import sidoc from "@/assets/images/sidoc.png";
import socoda from "@/assets/images/socoda.png";
import Image from "next/image";

const Companies = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div className="h-[400px] lg:h-[auto] lg:px-10  bg-[#f5f9ff] py-10 px-4">
      <h5 className="text-[1.5rem] lg:text-[2.6rem] lg:w-[900px] py-10">
        <span className="font-semibold">
          We have more than 60 companies that accelerate their value chain{" "}
        </span>
        through our solutions.
      </h5>
      <Slider {...settings} className="flex items-center">
        <div className="espumados">
          <Image src={alumina} alt="" />
        </div>
        <div className="espumados">
          <Image src={avofruits} alt="" />
        </div>
        <div className="espumados">
          <Image src={cartama} alt="" />
        </div>
        <div className="espumados">
          <Image src={comfama} alt="" />
        </div>
        <div className="espumados">
          <div>
            <Image src={espumados} alt="" />
          </div>
        </div>
        <div className="espumados">
          <Image src={farmaqx} alt="" />
        </div>
        <div className="espumados">
          <Image src={flamingo} alt="" />
        </div>
        <div className="espumados">
          <Image src={haceb} alt="" />
        </div>
        <div className="espumados">
          <Image src={inducol} alt="" />
        </div>
        <div className="espumados">
          <Image src={orbis} alt="" />
        </div>
        <div className="espumados">
          <Image src={prodenvases} alt="" />
        </div>
        <div className="espumados">
          <Image src={renault} alt="" />
        </div>
        <div className="espumados">
          <Image src={riopaila} alt="" />
        </div>
        <div className="espumados">
          <div>
            <Image src={sidoc} alt="" />
          </div>
        </div>
        <div className="espumados">
          <Image src={socoda} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Companies;
