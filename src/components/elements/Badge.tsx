"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RecoilState, SetterOrUpdater, useRecoilValue } from "recoil";

const Badge = ({
  label,
  url,
  setAtom,
  atom,
  isSelected,
  setIsSelected,
  wholeSeletetion,
  index,
}: {
  label: string;
  url: string;
  setAtom: SetterOrUpdater<string[]>;
  atom: string[];
  isSelected: boolean;
  wholeSeletetion: boolean[];
  index: number;
  setIsSelected: Dispatch<SetStateAction<[] | boolean[]>>;
}) => {
  // const [isSelected, setIsSelected] = useState(atom.includes(url));

  const handleClick = () => {
    if (!atom.includes(url)) {
      //add element
      const newArray = [...wholeSeletetion];
      newArray[index] = true;
      setIsSelected(newArray);

      setAtom((prev) => [...prev, url]);
    } else {
      //remove element
      const newArray = [...wholeSeletetion];
      newArray[index] = false;
      setIsSelected(newArray);
      let idx = atom.indexOf(url);
      setAtom(atom.filter((_, index) => index !== idx));
    }

    // console.log(atom);
  };
  return (
    <>
      {isSelected ? (
        <div
          className="bg-[#288FFE] rounded-md flex items-center cursor-pointer hover:ring-1 ring-green-400/40 active:scale-[0.98] transition-scale ease-in-out duration-200 select-none m-2 shadow-md text-zinc-900"
          onClick={handleClick}
        >
          <p className=" p-1 px-2">{label}</p>
          <div className="w-[1px] bg-gray-600 h-full opacity-20"></div>
        </div>
      ) : (
        <div
          className="bg-[#95D2EE] rounded-md flex items-center cursor-pointer hover:ring-1 ring-green-100/40 active:scale-[0.98im] transition-scale ease-in-out duration-200 select-none m-2 shadow-md"
          onClick={handleClick}
        >
          <p className=" p-1 px-2">{label}</p>
          <div className="w-[1px] bg-gray-600 h-full opacity-20"></div>
        </div>
      )}
    </>
  );
};

export default Badge;
