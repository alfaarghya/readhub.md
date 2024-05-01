"use client";

import { motion } from "framer-motion";
import { RecoilRoot } from "recoil";
import Username from "../elements/Username";

const UserNameInput = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 1,
        delay: 2.5,
      },
    },
  };
  return (
    <RecoilRoot>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-center items-center w-full text-xl sm:text-base md:text-xl lg:text:3xl xl:text-2xl"
      >
        <Username />

        <button className=" text-[#95D2EE] cursor-pointer ml-2 relative hover:left-1">
          <i className="ri-arrow-right-line "></i>
        </button>
      </motion.div>
    </RecoilRoot>
  );
};

export default UserNameInput;
