import { atom } from "recoil";

export const languagesAtom = atom<string[]>({
  key: "languagesAtom",
  default: [],
});
export const databasesAtom = atom<string[]>({
  key: "databasesAtom",
  default: [],
});
export const frameworksAtom = atom<string[]>({
  key: "frameworksAtom",
  default: [],
});
export const serversAtom = atom<string[]>({
  key: "serversAtom",
  default: [],
});
export const hostingAtom = atom<string[]>({
  key: "hostingAtom",
  default: [],
});
export const cicdAtom = atom<string[]>({
  key: "cicdAtom",
  default: [],
});
export const mlAtom = atom<string[]>({
  key: "mlAtom",
  default: [],
});
export const designAtom = atom<string[]>({
  key: "designAtom",
  default: [],
});
export const othersAtom = atom<string[]>({
  key: "othersAtom",
  default: [],
});
