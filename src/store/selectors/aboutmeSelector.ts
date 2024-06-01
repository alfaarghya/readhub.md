import { selector } from "recoil";
import { aboutMeAtom } from "../atoms";

const aboutMeSelector = selector({
  key: "aboutMeSelector",
  get: ({ get }) => {
    return get(aboutMeAtom);
  },
});
