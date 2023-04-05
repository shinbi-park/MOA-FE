import React from "react";
import styled from "styled-components";
import { recruitDummy } from "../common/DummyData";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { titleState } from "../common/atoms";

const PostTitlewrap = styled.div`
  margin-top: 34px; ;
`;

const PostTitleHeader = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`;

const PostRecruitwrap = styled.div`
  margin-top: 25px;
  margin-bottom: 35px;
  text-align: center;
`;

const RecruitPart = styled.span`
  color: #818181;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const RecruitState = styled.span`
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  &.recruiting {
    ::after {
      content: "모집 중";
    }
    color: #63b730;
  }

  &.recruitDone {
    color: red;
    ::after {
      content: "모집 완료";
    }
  }

  &.projectDone {
    color: blue;
    ::after {
      content: "프로젝트 완료";
    }
  }
`;

const PostTitle = () => {
  const titles = useRecoilValue(titleState);
  const data = recruitDummy;
  const [postData, setPostData] = useState(data);
  return (
    <div>
      <PostTitlewrap>
        <PostTitleHeader>{postData[0].title}</PostTitleHeader>
      </PostTitlewrap>
      <PostRecruitwrap>
        <RecruitPart>{postData[0].postUser.userName}</RecruitPart>
        <RecruitState
          className={
            (titles === "1" && "recruiting") ||
            (titles === "2" && "recruitDone") ||
            (titles === "3" && "projectDone")
          }
        ></RecruitState>
        <p>#서울스터디 #개발스터디 </p>
      </PostRecruitwrap>
    </div>
  );
};

export default PostTitle;
