"use client";

import { RecoilRoot } from "recoil";
import UserNameInput from "../ui/UserNameInput";
import Preview from "./Generate";

const HomePage = () => {
  return (
    <RecoilRoot>
      <UserNameInput />
    </RecoilRoot>
  );
};

export default HomePage;
