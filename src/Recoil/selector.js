import axios from "axios";
import { selector } from "recoil";
import { myPostData, userActivity, userInfo } from "./atoms";

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

export const getUserActivity = selector({
  key: "getUserActivity",
  get: ({ get }) => {
    const data = get(userActivity);
    return data;
  },
});
