"use client";

import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import Username from "../elements/Username";
import { isNextAtom, usernameAtom } from "@/store/atoms";
import { useState } from "react";
import ToastError from "../elements/toaster/ToastError";
import { Typewriter } from "./Typewriter";
import About from "../slides/About";

const UserNameInput = () => {
  const userName = useRecoilValue(usernameAtom);
  const [isNext, setIsNext] = useState(false);
  const [alert, setAlert] = useState(false);

  const onNext = () => {
    if (userName != "" && userName.replace(/ /g, "") != "") {
      setIsNext(true);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else {
      if (alert !== true) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }
    }
  };

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
    <>
      {isNext ? (
        <About />
      ) : (
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <Typewriter />
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex justify-center items-center w-full text-xl sm:text-base md:text-xl lg:text:3xl xl:text-2xl"
          >
            <Username />

            <button
              className=" text-[#95D2EE] cursor-pointer ml-2 relative hover:left-1"
              onClick={onNext}
            >
              <i className="ri-arrow-right-line"></i>
            </button>
            {alert && <ToastError title="Enter Valid GitHub Username 😵‍💫" />}
          </motion.div>
        </div>
      )}
    </>
  );
};

const Temp = () => {};

export default UserNameInput;
