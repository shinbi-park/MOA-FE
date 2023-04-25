import axios from "axios";
import { selector } from "recoil";
import {
  FinActivity,
  etcActivity,
  myPostData,
  scheduleTime,
  userActivity,
  userInfo,
} from "./atoms";

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

export const getFinActivity = selector({
  key: "getFinActivity",
  get: ({ get }) => {
    const data = get(FinActivity);
    return data;
  },
});

export const getEtcActivity = selector({
  key: "getEtcActivity",
  get: ({ get }) => {
    const data = get(etcActivity);
    return data;
  },
});

export const getMySchedule = selector({
  key: "getMySchedule",
  get: ({ get }) => {
    const data = get(scheduleTime);
    return data;
  },
});
