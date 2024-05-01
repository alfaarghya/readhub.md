import { selector } from "recoil";
import { usernameAtom } from "../atoms";

const usernameSelector = selector({
  key: "usernameSelector",
  get: ({ get }) => {
    return get(usernameAtom);
  },
});
