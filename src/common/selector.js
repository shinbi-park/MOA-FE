import axios from "axios";
import { selector } from "recoil";
import { myPostData } from "./atoms";

export const getPostData = selector({
  key: "getPostData",
  get: ({ get }) => {
    const data = get(myPostData);
    return data;
  },
});
