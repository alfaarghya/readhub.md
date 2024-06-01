import { aboutMeAtom } from "@/store/atoms";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useObserver } from "mobx-react";
import TechStack from "./TechStack";
import { Back, Next } from "../ui/Button";

const About = ({ back }: { back: () => void }) => {
  const [about, setAbout] = useRecoilState(aboutMeAtom);
  const [isNext, setIsNext] = useState(false);

  return useObserver(() => (
    <>
      {isNext ? (
        <TechStack back={() => setIsNext(false)} />
      ) : (
        <div className="flex flex-col justify-start items-center w-full h-full">
          <div className="w-2/4 flex justify-evenly items-center text-2xl py-3 mb-5">
            <Back onBack={back} />
            <h3 className="font-semibold">Describe Yourself</h3>
            <Next onNext={() => setIsNext(true)} />
          </div>
          <textarea
            value={about}
            className="bg-transparent border-[1px] rounded-md outline-none resize-none h-72 w-2/4"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
      )}
    </>
  ));
};

export default About;
