"use client";

import { usernameAtom } from "@/store/atoms";
import { useSetRecoilState } from "recoil";
import "remixicon/fonts/remixicon.css";

const Username = () => {
  const setUsername = useSetRecoilState(usernameAtom);

  return (
    <input
      type="text"
      className="bg-transparent outline-none border-solid border-b-2 border-[#95D2EE] focus:border-b-[3px] focus:border-[#79cbf1] w-2/5 h-10 p-0 text-center font-semibold tracking-wider "
      placeholder="GitHub username"
      onChange={(element) => {
        setUsername(element.target.value);
        console.log(element.target.value);
      }}
    />
  );
};

export default Username;
