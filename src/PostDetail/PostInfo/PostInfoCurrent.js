import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CurrentPosition from "./CurrentPosition";
import { useRecoilState, useRecoilValue } from "recoil";
import { myPostData, userActivity } from "../../common/atoms";
import axios from "axios";
import { useParams } from "react-router-dom";

const CurrentPartTitle = styled.div`
  margin-top: 32px;
  margin-bottom: 23px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
`;

const HrLine = styled.hr`
  color: #dbdbdb;
  margin-top: 25px;
`;

const PostInfoCurrent = () => {
  const data = useRecoilValue(myPostData);
  const [author, setAuthor] = useState(data.postUser);
  const [activity, setActivity] = useRecoilState(userActivity);

  const { postId } = useParams();

  const member = data.members.filter((item) => item.recruitField !== "LEADER");

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    await axios
      .get(
        `http://13.125.111.131:8080/user/info/activity`,

        {
          headers: {
            // 로그인 후 받아오는 인증토큰값
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
        }
      )
      .then((response) => {
        setActivity(response.data.etcProjects);
      });
  };

  const userInfoArr = activity.find(
    (item) => parseInt(item.recruitmentId) === parseInt(postId)
  );

  return (
    <div>
      <CurrentPartTitle>모집 현황</CurrentPartTitle>

      {member.map((item, index) => {
        return (
          <CurrentPosition
            author={author}
            key={index}
            item={item}
            userInfoArr={userInfoArr}
            fetchList={fetchList}
          />
        );
      })}

      <HrLine />
    </div>
  );
};

export default PostInfoCurrent;
