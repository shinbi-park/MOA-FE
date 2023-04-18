import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CurrentPosition from "./CurrentPosition";
import { useRecoilValue } from "recoil";
import { myPostData } from "../../common/atoms";

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

  const member = data.members.filter((item) => item.recruitField !== "LEADER");

  return (
    <div>
      <CurrentPartTitle>모집 현황</CurrentPartTitle>

      {member.map((item, index) => {
        return <CurrentPosition key={index} item={item} />;
      })}

      <HrLine />
    </div>
  );
};

export default PostInfoCurrent;
