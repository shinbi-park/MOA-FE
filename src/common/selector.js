import axios from "axios";
import { selector } from "recoil";
import { myPostComment, myPostData, postID } from "./atoms";

export const getPostData = selector({
  key: "getPostData",
  get: ({ get }) => {
    const data = get(myPostData);
    return data;
  },
});

export const getPostComment = selector({
  key: "getPostComment",
  get: ({ get }) => {
    const postComment = get(myPostComment);
    return postComment;
  },
});
