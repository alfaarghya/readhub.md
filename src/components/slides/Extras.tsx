import {
  contributorStatsAtom,
  mostLangAtom,
  profileViewAtom,
  statsAtom,
  streakAtom,
  trophyAtom,
  usernameAtom,
} from "@/store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import GitStatsCard from "../elements/GitStatsCard";
import { useState } from "react";
import { useObserver } from "mobx-react";
import Generate from "./Generate";
import { Back } from "../ui/Button";

const Extras = ({ back }: { back: () => void }) => {
  const username = useRecoilValue(usernameAtom);
  const [isProfileViews, setIsProfileViews] = useRecoilState(profileViewAtom);
  const [isTrophy, setIsTrophy] = useRecoilState(trophyAtom);
  const [isStreak, setIsStreak] = useRecoilState(streakAtom);
  const [isStats, setIsStats] = useRecoilState(statsAtom);
  const [isMostLang, setIsMostLang] = useRecoilState(mostLangAtom);
  const [isContributorStats, setIsContributorStats] =
    useRecoilState(contributorStatsAtom);
  const [isNext, setIsNext] = useState(false);

  return useObserver(() => (
    <>
      {isNext ? (
        <Generate />
      ) : (
        <div className="flex flex-col justify-center items-center w-full py-5">
          <div className="w-2/4">
            <Back onBack={back} />
          </div>
          <GitStatsCard
            title="Show Your Visitor Count"
            htmlId="visitorCountId"
            atom={isProfileViews}
            setAtom={setIsProfileViews}
          >
            <img
              className="m-2"
              src={`https://visitcount.itsvg.in/api?id=${username}&icon=5&color=6`}
              alt="img"
            />
          </GitStatsCard>
          <GitStatsCard
            title="Flex GitHub Trophy 🏆"
            htmlId="trophyId"
            atom={isTrophy}
            setAtom={setIsTrophy}
          >
            <img
              className="m-2"
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=transparent&no-frame=true&no-bg=true`}
              alt="trophy"
            />
          </GitStatsCard>
          <GitStatsCard
            title="Flex GitHub Streak 📈"
            htmlId="StreakId"
            atom={isStreak}
            setAtom={setIsStreak}
          >
            <img
              className="m-2"
              src={`https://github-readme-streak-stats.herokuapp.com?theme=transparent&user=${username}`}
              alt="steak"
            />
          </GitStatsCard>
          <GitStatsCard
            title="Flex GitHub Stats"
            htmlId="statsId"
            atom={isStats}
            setAtom={setIsStats}
          >
            <img
              className="m-2"
              src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=transparent`}
              alt="trophy"
            />
          </GitStatsCard>
          <GitStatsCard
            title="Flex GitHub Contribution"
            htmlId="contributionId"
            atom={isContributorStats}
            setAtom={setIsContributorStats}
          >
            <img
              className="m-2"
              src={`https://github-contributor-stats.vercel.app/api?username=${username}&limit=5&theme=transparent&combine_all_yearly_contributions=true`}
              alt="img"
            />
          </GitStatsCard>
          <GitStatsCard
            title="Most Used Languages"
            htmlId="mLangId"
            atom={isMostLang}
            setAtom={setIsMostLang}
          >
            <img
              className="m-2"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=transparent&layout=compact`}
              alt="img"
            />
          </GitStatsCard>
          <button
            onClick={() => {
              setIsNext(true);
            }}
            className="group text-lg rounded-lg px-4 py-2 cursor-pointer  bg-[#249b5f] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#2ad165da] transition-colors duration-200"
          >
            Generate{" "}
            <i className="ri-lightbulb-flash-fill group-hover:text-yellow-200"></i>
          </button>
        </div>
      )}
    </>
  ));
};

export default Extras;
