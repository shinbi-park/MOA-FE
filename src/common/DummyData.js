export const recruitDummy = [
  {
    id: 1,
    title: "[서울][개발]스터디 모집",
    content: "스터디 모집을 하고 있읍니디",
    state: 1,
    postUser: {
      userId: 1,
      userName: "viper3",
    },
    categories: "hobby",
    members: [
      {
        id: 1,
        recruitField: "백엔드",
        currentCount: 0,
        totalCount: 5,
      },
      {
        id: 2,
        recruitField: "프론트엔드",
        currentCount: 5,
        totalCount: 5,
      },
    ],
  },
];

export const scheduleDummy = [
  {
    id: 1,
    name: "user1",

    data: [
      "2023-03-31T01:00:00.000Z",
      "2023-03-31T01:30:00.000Z",
      "2023-03-31T02:00:00.000Z",
      "2023-03-31T03:00:00.000Z",
    ],
  },

  {
    id: 2,
    name: "user2",
    data: [
      "2023-03-30T11:00:00.000Z",
      "2023-03-30T11:30:00.000Z",
      "2023-03-30T12:00:00.000Z",
      "2023-03-31T02:00:00.000Z",
    ],
  },

  {
    id: 3,
    name: "user3",
    data: [
      "2023-03-29T09:00:00.000Z",
      "2023-03-29T09:30:00.000Z",
      "2023-03-29T10:00:00.000Z",
    ],
  },
];
