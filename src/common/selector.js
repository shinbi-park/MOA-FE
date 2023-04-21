import axios from "axios";
import { selector } from "recoil";
import { myPostData, userInfo } from "./atoms";

export const getPostData = selector({
  key: "getPostData",
  get: ({ get }) => {
    const data = get(myPostData);
    return data;
  },
});

export const getUserInfo = selector({
  key: "getUserInfo",
  get: ({ get }) => {
    const data = get(userInfo);
    return data;
  },
});
