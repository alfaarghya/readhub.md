"use client";
import { useObserver } from "mobx-react";
import React, { useState } from "react";
import { themes } from "@/store/themes";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { usernameAtom } from "@/store/atoms";
import { themeAtom } from "@/store/atoms/themeAtom";

const GitHubStats = ({ back }: { back: () => void }) => {
  const [isNext, setIsNext] = useState(false);
  const username = useRecoilValue(usernameAtom);
  const [theme, setTheme] = useRecoilState(themeAtom);

  return useObserver(() => (
    <div>
      <p className="w-full text-center text-3xl my-10 mt-20">
        Flex your GitHub Stats
      </p>
      <div>
        Theme:
        <select
          id="theme"
          value={theme}
          onChange={() => {
            const val = document.getElementById("theme") as HTMLSelectElement;
            setTheme(val.value);
          }}
          className="bg-transparent py-1 px-2 outline-none"
        >
          {themes.map((item) => {
            return (
              <option key={item} value={item} className="bg-zinc-900">
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <p className="mt-4 text-green-300 opacity-90">
        please wait for images to load after changing any values
      </p>
      <div className="w-full flex justify-center align-center flex-wrap md:my-4">
        <img
          className="m-2"
          src={`https://github-readme-streak-stats.herokuapp.com?theme=${theme}&user=alfaarghya`}
          alt="img"
        />
        <img
          className="m-2"
          src={`https://github-readme-stats.vercel.app/api?username=alfaarghya&theme=${theme}`}
          alt="img"
        />
        <img
          className="m-2"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=alfaarghya&theme=${theme}`}
          alt="img"
        />
      </div>
    </div>
  ));
};

export default GitHubStats;
