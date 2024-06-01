import React from "react";
import { RecoilState, useRecoilState } from "recoil";

const SocialInput = ({
  social,
  atomName,
  icon,
  placeholder,
}: {
  social: string;
  atomName: RecoilState<string>;
  icon: string;
  placeholder?: string;
}) => {
  const [input, setInput] = useRecoilState(atomName);
  return (
    <div className="flex justify-center items-center my-1">
      <label className="text-3xl pr-2" htmlFor={social}>
        <i className={icon}></i>
      </label>
      <input
        id={social}
        className="bg-transparent outline-none border-solid border-b-2 border-[#95D2EE] focus:border-b-[3px] focus:border-[#79cbf1]
        text-xl px-2"
        value={input}
        placeholder={
          placeholder ? social + " " + placeholder : `${social} Username`
        }
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default SocialInput;
