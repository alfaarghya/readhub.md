import Link from "next/link";
import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-center py-4 text-[#535f6ef1]">
      <div className="flex gap-4 text-xl ">
        <Link href="https://twitter.com/alfaarghya" target="_blank">
          <i className="ri-twitter-x-fill hover:text-[#d6eaff] focus:text-[#d6eaff]"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/alfaArghya" target="_blank">
          <i className="ri-linkedin-box-fill hover:text-[#d6eaff] focus:text-[#d6eaff]"></i>
        </Link>
        <Link href="https://github.com/alfaArghya/" target="_blank">
          <i className="ri-github-fill hover:text-[#d6eaff] focus:text-[#d6eaff]"></i>
        </Link>
        <Link href="https://www.instagram.com/alfaarghya/" target="_blank">
          <i className="ri-instagram-line hover:text-[#d6eaff] focus:text-[#d6eaff]"></i>
        </Link>
      </div>
      <div>
        <h5>
          {" "}
          code with{" "}
          <i className="ri-heart-3-fill animate-pulse  hover:text-[#7ec9ec]"></i>{" "}
          by <span className="hover:text-[#d6eaff]">alfaarghya</span>{" "}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
