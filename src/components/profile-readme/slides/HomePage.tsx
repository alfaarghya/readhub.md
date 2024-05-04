"use client";

import { RecoilRoot, useRecoilValue } from "recoil";
import UserNameInput from "../ui/UserNameInput";

const HomePage = () => {
  return (
    <RecoilRoot>
      <UserNameInput />
    </RecoilRoot>
  );
};

export default HomePage;
