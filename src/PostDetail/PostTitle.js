import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { myPostData, titleState } from "../Recoil/atoms";
import { useState } from "react";

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

const PostTagsDiv = styled.div`
  margin: 10px 0 auto;
`;

const PostTags = styled.span`
  margin-right: 15px;
  color: gray;
`;

const PostTitle = () => {
  const data = useRecoilValue(myPostData);
  const titles = useRecoilValue(titleState);
  const [user, setUser] = useState(data.postUser);

  return (
    <div>
      <PostTitlewrap>
        <PostTitleHeader>{data.title}</PostTitleHeader>
      </PostTitlewrap>
      <PostRecruitwrap>
        <RecruitPart>{user.userName}</RecruitPart>
        <RecruitState
          className={
            (titles === 1 && "recruiting") ||
            (titles === 2 && "recruitDone") ||
            (titles === 3 && "projectDone")
          }
        ></RecruitState>
        <PostTagsDiv>
          {data.tags.map((item, index) => (
            <PostTags key={index}>#{item}</PostTags>
          ))}
        </PostTagsDiv>
      </PostRecruitwrap>
    </div>
  );
};

export default PostTitle;
