import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-alpha-white-90">
      <div className="w-full px-8 md:px-12 flex items-center justify-between font-roboto text-sm font-semibold  mt-10 text-transparent bg-clip-text bg-gradient-to-b from-[#755BDF] to-[#2C1FA3]">
        <div className="leading-5 text-left text-sm">
          © {new Date().getFullYear()} AnonChat. All rights reserved.
        </div>

        <div className="flex items-center justify-center leading-5">
          <div className="hidden md:flex space-x-4">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
          <div className=" -mt-8 -mr-8 md:-ml-8 ">
            <Image
              src="/assets/images/footer_img_1.png"
              alt="hand img"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
