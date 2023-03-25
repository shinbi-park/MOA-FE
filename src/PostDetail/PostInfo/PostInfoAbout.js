import React from "react";
import styled from "styled-components";

const IntroductionDiv = styled.div`
  white-space: pre-wrap;
`;

const PostInfoAbout = () => {
  return (
    <div>
      <h1>프로젝트 소개</h1>
      <div>
        <IntroductionDiv>
          {"프로젝트 소개글 \n어쩌구 저쩌구\n이것저것"}
        </IntroductionDiv>
      </div>
    </div>
  );
};

export default PostInfoAbout;
