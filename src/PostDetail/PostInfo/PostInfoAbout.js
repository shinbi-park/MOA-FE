import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { myPostData, postData } from "../../common/atoms";
import { useEffect } from "react";
import { useState } from "react";
import { getPostData, mySelector } from "../../common/selector";
import { useMemo } from "react";
import ReactQuill from "react-quill";

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

const PostInfoAbout = ({ curPost }) => {
  const data = useRecoilValue(postData);

  return (
    <div>
      <h1>프로젝트 소개</h1>
      <div>
        <IntroductionDiv>{curPost.bs}</IntroductionDiv>
      </div>
      <HrLine />
    </div>
  );
};

export default PostInfoAbout;
