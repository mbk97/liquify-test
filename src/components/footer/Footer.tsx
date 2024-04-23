import Image from "next/image";
import image from "@/assets/logo-klym-negativo.svg";

const Footer = () => {
  return (
    <div className="bg-[#0f1526] flex items-center flex-wrap justify-between px-4 lg:px-10  h-[auto] py-10 w-full text-[#ffffff]">
      <div>
        <Image src={image} alt="Footer_logo" />
        {/* <h1 className="text-[4rem]">Liquify</h1> */}
        <p className="text-[#ffffff] mt-3">Liquify all rights reserved</p>
        <p className="text-[#5f636e]">Terms and Conditions</p>
      </div>

      <div className="">
        <h3 className="font-semibold text-[2rem]">Contact us</h3>
        <p>+234 456 456 909</p>
        <p>London, UK</p>
      </div>
      <div className="">
        <h3 className="font-semibold text-[2rem]">Services</h3>
        <p>Lorem ipsum dolor sit, amet.</p>
        <p>Lorem ipsum dolor sit, amet.</p>
        <p>Lorem ipsum dolor sit, amet.</p>
      </div>
      <div className="">
        <h3 className="font-semibold text-[2rem]">Links</h3>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Testimonials</p>
      </div>
    </div>
  );
};

export default Footer;
