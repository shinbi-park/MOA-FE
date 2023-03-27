import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CurrentPartTitle = styled.div`
  margin-top: 32px;
  margin-bottom: 23px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
`;

const CurrentPartWrap = styled.div`
  padding-left: 3%;
  display: flex;
  align-items: center;
  height: 35px;
`;

const PartSection = styled.p`
  width: 130px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const PartSectionCount = styled.p`
  width: 37px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const PartApply = styled.button`
  width: 120px;
  height: 28px;

  margin-left: 25px;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: #66b933;
  cursor: pointer;

  &.applyDone {
    cursor: no-drop;
    background-color: #ff5e5e;
  }
`;

const HrLine = styled.hr`
  color: #dbdbdb;
  margin-top: 25px;
`;

const PostInfoCurrent = () => {
  const [data, setData] = useState([]);
  // useEffect(async() => {
  //   const response = await axios.get(`http://localhost:8080/recruitment/${recruitmentId}`);
  // setData(response.data);
  // },[])

  return (
    <div>
      <CurrentPartTitle>모집 현황</CurrentPartTitle>
      <CurrentPartWrap>
        <PartSection>프론트엔드</PartSection>{" "}
        <PartSectionCount>1/3</PartSectionCount>
        <PartApply>지원하기</PartApply>
      </CurrentPartWrap>
      <CurrentPartWrap>
        <PartSection>백엔드</PartSection>{" "}
        <PartSectionCount>4/4</PartSectionCount>{" "}
        <PartApply className="applyDone">모집완료</PartApply>
      </CurrentPartWrap>
      <HrLine />
    </div>
  );
};

export default PostInfoCurrent;
