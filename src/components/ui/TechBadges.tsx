"use client";
import { RecoilState, useRecoilState, useSetRecoilState } from "recoil";
import Badge from "../elements/Badge";
import { useState } from "react";

interface data {
  label: string;
  url: string;
}
const TechBadges = ({
  title,
  data,
  atomName,
}: {
  title: string;
  data: data[];
  atomName: RecoilState<string[]>;
}) => {
  // const setAtom = useSetRecoilState(atomName);
  const [atom, setAtom] = useRecoilState(atomName);
  const [isSelected, setIsSelected] = useState<boolean[] | []>([]);
  return (
    <>
      {data.length !== 0 && (
        <>
          <div className="py-8 flex items-center w-full">
            <p className="flex text-2xl font-semibold pb-3 w-4/12">{title}</p>
            <div className="w-8/12 flex flex-row flex-wrap text-gray-700 ">
              {data.map((ele, key) => (
                <Badge
                  key={1}
                  label={ele.label}
                  url={ele.url}
                  atom={atom}
                  index={key}
                  setAtom={setAtom}
                  wholeSeletetion={isSelected}
                  isSelected={isSelected[key]}
                  setIsSelected={setIsSelected}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TechBadges;
