import {
  aboutMeAtom,
  cicdAtom,
  codePenAtom,
  contributorStatsAtom,
  databasesAtom,
  designAtom,
  discordAtom,
  facebookAtom,
  frameworksAtom,
  hostingAtom,
  instagramAtom,
  languagesAtom,
  leetCodeAtom,
  linkedInAtom,
  mlAtom,
  mostLangAtom,
  othersAtom,
  profileViewAtom,
  redditAtom,
  serversAtom,
  stackOverflowAtom,
  statsAtom,
  streakAtom,
  trophyAtom,
  twitterAtom,
  usernameAtom,
  youtubeAtom,
} from "@/store/atoms";
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import ToastSuccess from "../elements/toaster/ToastSuccess";

const Generate = () => {
  const username = useRecoilValue(usernameAtom);
  let about = useRecoilValue(aboutMeAtom);
  about = about.replace(/\n/g, "<br>");
  const languages = useRecoilValue(languagesAtom);
  const frameworks = useRecoilValue(frameworksAtom);
  const mls = useRecoilValue(mlAtom);
  const databases = useRecoilValue(databasesAtom);
  const servers = useRecoilValue(serversAtom);
  const hosting = useRecoilValue(hostingAtom);
  const cicds = useRecoilValue(cicdAtom);
  const design = useRecoilValue(designAtom);
  const others = useRecoilValue(othersAtom);
  const isProfileViews = useRecoilValue(profileViewAtom);
  const isTrophy = useRecoilValue(trophyAtom);
  const isContribution = useRecoilValue(contributorStatsAtom);
  const isStreak = useRecoilValue(streakAtom);
  const isStats = useRecoilValue(statsAtom);
  const isMostLang = useRecoilValue(mostLangAtom);

  const twitter = useRecoilValue(twitterAtom);
  const linkedIn = useRecoilValue(linkedInAtom);
  const leetCode = useRecoilValue(leetCodeAtom);
  const stackOverflow = useRecoilValue(stackOverflowAtom);
  const codePen = useRecoilValue(codePenAtom);
  const instagram = useRecoilValue(instagramAtom);
  const facebook = useRecoilValue(facebookAtom);
  const reddit = useRecoilValue(redditAtom);
  const youtube = useRecoilValue(youtubeAtom);
  const discord = useRecoilValue(discordAtom);
  const social = [
    twitter !== ""
      ? `[![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/${twitter})`
      : "",
    linkedIn !== ""
      ? `[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${linkedIn})`
      : "",
    leetCode !== ""
      ? `[![LeetCode](https://img.shields.io/badge/LeetCode-%2320232a.svg?style=normal&logo=LeetCode&logoColor=%FFA116)](https://leetcode.com/${leetCode}/)`
      : "",
    stackOverflow !== ""
      ? `[![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/${stackOverflow})`
      : "",
    codePen !== ""
      ? `[![Codepen](https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/${codePen})`
      : "",
    instagram !== ""
      ? `[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/${instagram})`
      : "",
    facebook !== ""
      ? `[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/${facebook})`
      : "",
    reddit !== ""
      ? `[![Reddit](https://img.shields.io/badge/Reddit-%23FF4500.svg?logo=Reddit&logoColor=white)](https://reddit.com/user/${reddit})`
      : "",
    youtube !== ""
      ? `[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@${youtube})`
      : "",
    discord !== ""
      ? `[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/${discord})`
      : "",
  ];

  const result = `<div align="center">
      <img width=200 style="border-radius:50%" src="https://avatars.githubusercontent.com/${username}"/>
    </div>
    ${
      isProfileViews
        ? `<div align="center">
    <img src="https://visitcount.itsvg.in/api?id=${username}&icon=5&color=6"/>
  </div>`
        : ""
    }
    

## About Me💫

${about}

## Tech Stack💻 

#### Languages

${languages.join(" ")}

#### Framework & Libraries

${frameworks.join(" ")}

#### ML

${mls.join(" ")}

#### Databases & ORM

${databases.join(" ")}

#### Servers

${servers.join(" ")}

#### Hosting

${hosting.join(" ")}


#### CI/CD

${cicds.join(" ")}

#### Design

${design.join(" ")}

#### Others

${others.join(" ")}

${
  isTrophy
    ? `## GitHub Trophies🏆

![](https://github-profile-trophy.vercel.app/?username=${username}&theme=transparent&no-frame=true&no-bg=true)
    `
    : ""
}
    
${
  isContribution
    ? `## Top Contributed Repo🔝

![](https://github-contributor-stats.vercel.app/api?username=${username}&limit=5&theme=transparent&combine_all_yearly_contributions=true)
    `
    : ""
}

##  GitHub Stats📊
    
${
  isStreak
    ? `![](https://github-readme-streak-stats.herokuapp.com?theme=transparent&user=${username})
    `
    : ""
}

${
  isStats
    ? `![](https://github-readme-stats.vercel.app/api?username=${username}&theme=transparent)
    `
    : ""
}

${
  isMostLang
    ? `![](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=transparent&layout=compact)
    `
    : ""
}

## Socials🌐 

${social.filter((e) => e !== "").join(" ")}

<!-- Generate with ReadHub.md 🤝
  code with 💙 by alfaarghya-->
    `;

  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      {isCopied && <ToastSuccess title="Copied Successfully 😀" />}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-5 font-medium sm:text-3xl">
          Your Modern GitHub Profile is Ready 😀
        </h2>
        <div className="flex gap-4">
          <button
            className="border rounded-lg text-lg px-4 py-2 cursor-pointer bg-black text-white  font-bold transform hover:-translate-y-1 transition duration-400"
            onClick={() => {
              navigator.clipboard.writeText(result);
              if (!isCopied) {
                setIsCopied(true);
                setTimeout(() => {
                  setIsCopied(false);
                }, 1500);
              }
            }}
          >
            Copy Code <i className="ri-clipboard-line text-xl"></i>
          </button>
          <button
            className="border rounded-lg text-lg px-4 py-2 cursor-pointer bg-black text-white  font-bold transform hover:-translate-y-1 transition duration-400"
            onClick={() => {
              location.reload();
            }}
          >
            Create New <i className="ri-file-3-line text-xl"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Generate;
