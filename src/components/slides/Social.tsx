import { useObserver } from "mobx-react";
import React, { useState } from "react";
import SocialInput from "../elements/SocialInput";
import {
  codePenAtom,
  discordAtom,
  facebookAtom,
  githubAtom,
  instagramAtom,
  leetCodeAtom,
  linkedInAtom,
  pinterestAtom,
  redditAtom,
  stackOverflowAtom,
  twitterAtom,
  youtubeAtom,
} from "@/store/atoms";
import About from "./About";
import { Back, Next } from "../ui/Button";

const Social = ({ back }: { back: () => void }) => {
  const [isNext, setIsNext] = useState(false);

  return useObserver(() => (
    <>
      {isNext ? (
        <About back={() => setIsNext(false)} />
      ) : (
        <>
          <div className="flex justify-evenly text-2xl mb-5">
            <Back onBack={back} />
            <h3 className="font-semibold">Add Your Social Handles</h3>
            <Next onNext={() => setIsNext(true)} />
          </div>
          <div className="flex justify-evenly flex-wrap">
            <div className="flex flex-col gap-2">
              {/* <SocialInput
                icon="ri-github-fill"
                social="GitHub"
                atomName={githubAtom}
              /> */}
              <SocialInput
                icon="ri-linkedin-fill"
                social="LinkedIn"
                atomName={linkedInAtom}
              />
              <SocialInput
                icon="ri-twitter-x-fill"
                social="X"
                atomName={twitterAtom}
              />
              <SocialInput
                icon="ri-code-s-slash-line"
                social="LeetCode"
                atomName={leetCodeAtom}
              />
              <SocialInput
                icon="ri-stack-overflow-fill"
                social="StackOverFlow"
                atomName={stackOverflowAtom}
                placeholder="UserId"
              />
              <SocialInput
                icon="ri-codepen-line"
                social="CodePen"
                atomName={codePenAtom}
              />
            </div>
            <div className="flex flex-col gap-2">
              <SocialInput
                icon="ri-instagram-line"
                social="Instagram"
                atomName={instagramAtom}
              />
              <SocialInput
                icon="ri-facebook-circle-fill"
                social="Facebook"
                atomName={facebookAtom}
              />
              <SocialInput
                icon="ri-reddit-line"
                social="Reddit"
                atomName={redditAtom}
              />
              {/* <SocialInput
                icon="ri-pinterest-fill"
                social="Pinterest"
                atomName={pinterestAtom}
              /> */}
              <SocialInput
                icon="ri-youtube-fill"
                social="Youtube"
                atomName={youtubeAtom}
                placeholder="Channel Id"
              />
              <SocialInput
                icon="ri-discord-fill"
                social="Discord"
                atomName={discordAtom}
                placeholder="Invite Code"
              />
            </div>
          </div>
        </>
      )}
    </>
  ));
};

export default Social;
