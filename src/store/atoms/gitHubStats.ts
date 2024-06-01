import { atom } from "recoil";

export const trophyAtom = atom<boolean>({
  key: "trophyAtom",
  default: false,
});
export const streakAtom = atom<boolean>({
  key: "streakAtom",
  default: false,
});
export const statsAtom = atom<boolean>({
  key: "statsAtom",
  default: false,
});
export const mostLangAtom = atom<boolean>({
  key: "mostLangAtom",
  default: false,
});
export const contributorStatsAtom = atom<boolean>({
  key: "contributorStatsAtom",
  default: false,
});
export const profileViewAtom = atom<boolean>({
  key: "profileViewAtom",
  default: false,
});
