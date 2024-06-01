"use client";
import { data } from "@/store/techStack.js";
import TechBadges from "../ui/TechBadges";
import {
  cicdAtom,
  databasesAtom,
  designAtom,
  frameworksAtom,
  hostingAtom,
  languagesAtom,
  mlAtom,
  othersAtom,
  serversAtom,
} from "@/store/atoms";
import { useEffect, useState } from "react";
import { searchFilter } from "@/utils/searchFilter";
import { useObserver } from "mobx-react";
import Extras from "./Extras";
import { Back, Next } from "../ui/Button";

const TechStack = ({ back }: { back: () => void }) => {
  const [isNext, setIsNext] = useState(false);
  const [tech, setTech] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTech(searchFilter(search));
  }, [search]);

  return useObserver(() => (
    <>
      {isNext ? (
        <Extras back={() => setIsNext(false)} />
      ) : (
        <div className="flex flex-col justify-center w-full">
          <div className="absolute flex justify-evenly items-center top-20 w-full text-2xl mt-5">
            <Back onBack={back} />
            <div className="flex w-2/6 items-center border-solid border-2 border-[#95D2EE] rounded-md px-2 ">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Add Your Tech Stack"
                className="bg-transparent outline-none w-full h-10 p-0 text-center font-semibold"
              />
              <i className="ri-search-2-line"></i>
            </div>
            <Next onNext={() => setIsNext(true)} />
          </div>
          <div className="mt-16 mx-5">
            <TechBadges
              title="Languages"
              data={tech.lang}
              atomName={languagesAtom}
            />
            <TechBadges
              title="Frameworks & Libraries"
              data={tech.frameworks}
              atomName={frameworksAtom}
            />
            <TechBadges
              title="Machine Learning"
              data={tech.ml}
              atomName={mlAtom}
            />
            <TechBadges
              title="DataBases & ORM"
              data={tech.database}
              atomName={databasesAtom}
            />
            <TechBadges
              title="Servers"
              data={tech.servers}
              atomName={serversAtom}
            />
            <TechBadges
              title="Hosting"
              data={tech.hosting}
              atomName={hostingAtom}
            />
            <TechBadges title="CI/CD" data={tech.cicd} atomName={cicdAtom} />
            <TechBadges
              title="Design"
              data={tech.design}
              atomName={designAtom}
            />
            <TechBadges
              title="Others"
              data={tech.others}
              atomName={othersAtom}
            />
          </div>
          <div className="flex justify-center items-center">
            {tech.lang.length === 0 &&
              tech.database.length === 0 &&
              tech.design.length === 0 &&
              tech.frameworks.length === 0 &&
              tech.hosting.length === 0 &&
              tech.ml.length === 0 &&
              tech.others.length === 0 &&
              tech.servers.length === 0 &&
              tech.cicd.length === 0 && (
                <span className="text-2xl">No Results Found 😓</span>
              )}
          </div>
        </div>
      )}
    </>
  ));
};

export default TechStack;
