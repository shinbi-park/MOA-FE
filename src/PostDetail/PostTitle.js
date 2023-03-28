import React from "react";
import styled from "styled-components";

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
  color: #63b730;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const PostTitle = () => {
  return (
    <div>
      <PostTitlewrap>
        <PostTitleHeader>[서울][개발] 스터디 모집</PostTitleHeader>
      </PostTitlewrap>
      <PostRecruitwrap>
        <RecruitPart>Team Leader</RecruitPart>{" "}
        <RecruitState>모집 중</RecruitState>
        <p>#서울스터디 #개발스터디 </p>
      </PostRecruitwrap>
    </div>
  );
};

export default PostTitle;
