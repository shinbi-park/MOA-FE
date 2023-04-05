import React from "react";
import styled from "styled-components";

const IntroductionDiv = styled.div`
  white-space: pre-wrap;
  padding-left: 3%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

const HrLine = styled.hr`
  color: #dbdbdb;
  margin-top: 25px;
`;

const PostInfoAbout = ({ postData }) => {
  return (
    <div>
      <h1>프로젝트 소개</h1>
      <div>
        <IntroductionDiv>{postData[0].content}</IntroductionDiv>
      </div>
      <HrLine />
    </div>
  );
};

export default PostInfoAbout;
