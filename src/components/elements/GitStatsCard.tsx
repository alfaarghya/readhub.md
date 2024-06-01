import React from "react";
import { SetterOrUpdater } from "recoil";

const GitStatsCard = ({
  title,
  atom,
  setAtom,
  htmlId,
  children,
}: {
  title: string;
  atom: boolean;
  setAtom: SetterOrUpdater<boolean>;
  htmlId: string;
  children: React.ReactNode;
}) => {
  const handleClick = (
    isAtom: boolean,
    setIsAtom: SetterOrUpdater<boolean>
  ) => {
    if (isAtom) {
      setIsAtom(false);
    } else {
      setIsAtom(true);
    }
    // console.log(`${title} -> ${isAtom}`);
  };
  return (
    <div className="flex flex-col items-center w-full gap-3">
      <h3 className="text-xl font-semibold">{title}</h3>
      {children}
      <div className="text-lg">
        <label htmlFor={htmlId}>Wanna Add? </label>
        <input
          type="checkbox"
          name=""
          id={htmlId}
          checked={atom}
          onClick={() => handleClick(atom, setAtom)}
        />
      </div>
      <hr className="mt-2 mb-2 w-1/2 opacity-40" />
    </div>
  );
};

export default GitStatsCard;
