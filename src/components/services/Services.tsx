import { servicesData } from "@/utils/data";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const Services = () => {
  return (
    <div className="h-[auto] px-4 lg:px-10 bg-[#0f1526] text-[#ffffff]">
      <h1 className="text-[2.4rem] py-10">
        {" "}
        Our platform provides tools to help you manage your company’s dynamic
        working capital needs.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {servicesData.map((service) => {
          return (
            <div key={service.id} className="w-[100%] lg:w-[600px] mb-14 flex">
              <div>
                <MdArrowForward className="mt-[-10px] mr-10 text-[60px]" />
              </div>
              <p>
                <span className="font-semibold text-[18px]">
                  {service.title}{" "}
                </span>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
