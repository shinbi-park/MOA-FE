import { atom } from "recoil";
import { recruitDummy } from "./DummyData";

export const postData = atom({
  key: "postData",
  default: [],
});

export const postID = atom({
  key: "postID",
  default: 0,
});

export const titleState = atom({
  key: "titleState",
  default: 1,
});

export const ScheduleUser = atom({
  key: "ScheduleUser",
  default: [],
});

export const ScheduleLeftUser = atom({
  key: "ScheduleLeftUser",
  default: [],
});

export const ScheduleHover = atom({
  key: "ScheduleHover",
  default: false,
});

export const ScheduleSelect = atom({
  key: "ScheduleSelect",
  default: { date: "", time: "", value: false },
});

// export const scheduleTime = atom({
//   key: "scheduleData",
//   default: {},
// });

export const myPostData = atom({
  key: "myPostData",
  default: [],
});

export const userInfo = atom({
  key: "userInfo",
  default: {},
});

export const userActivity = atom({
  key: "userActivity",
  default: [],
});

export const FinActivity = atom({
  key: "FinActivity",
  default: [],
});

export const etcActivity = atom({
  key: "etcActivity",
  default: [],
});
