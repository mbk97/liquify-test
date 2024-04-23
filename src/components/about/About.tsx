import React from "react";
import aboutImg from "@/assets/images/data-img.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-between flex-wrap lg:flex-nowrap items-center gap-10 py-10">
      <div>
        <Image src={aboutImg} alt="about_us" className="about_img" />
      </div>
      <div className="lg:w-[470px] mr-10 px-4">
        <h4 className="text-[2rem]">
          {" "}
          <span className="font-semibold">A data-driven solution </span>to
          deliver real-time financial services.
        </h4>
        <p className="mt-[1rem] text-[18px]">
          Liquify´s data capabilities allow us to go further than anyone else by
          offering an innovative solutions such as working capital.
        </p>
      </div>
    </div>
  );
};

export default About;
