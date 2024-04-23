import Image from "next/image";
import morgan from "@/assets/images/jp-morgan.png";
import gramercy from "@/assets/images/gramercy.png";
import ifc from "@/assets/images/ifc.png";

const Investors = () => {
  return (
    <div className="h-[400px] lg:h-[auto] lg:px-10  bg-[#f5f9ff] py-12 px-4">
      <h5 className="text-[1.5rem] lg:text-[2.6rem] py-10">
        <span className="font-semibold">World-class investors</span> trust in us
      </h5>

      <div className="flex items-center gap-12 flex-wrap">
        <div>
          <Image src={morgan} alt="" />
        </div>
        <div>
          <Image src={gramercy} alt="" />
        </div>
        <div>
          <Image src={ifc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Investors;
