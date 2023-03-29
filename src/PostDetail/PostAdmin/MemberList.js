import React from "react";
import styled from "styled-components";
import MemberListItem from "./MemberListItem";

const MemberListDiv = styled.div`
  margin-bottom: 70px;
`;

const MemeberDiv = styled.div`
  background-color: #e8e8e8;
  width: 1000px;
  margin-left: 30px;
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 0;
`;

const MemberWrap = styled.div`
  margin: 0 auto;
  width: 800px;
`;

const MemberItemDiv = styled.div`
  margin-left: 50px;
`;

const MemberList = () => {
  return (
    <MemberListDiv>
      <h1>멤버 현황</h1>
      <MemeberDiv>
        <MemberWrap>
          <h4>Position 1</h4>
          <MemberItemDiv>
            <MemberListItem name={"member1"} />
            <MemberListItem name={"member2"} />
          </MemberItemDiv>
        </MemberWrap>
        <MemberWrap>
          <h4>Position 2</h4>
          <MemberItemDiv>
            <MemberListItem name={"member1"} />
          </MemberItemDiv>
        </MemberWrap>
      </MemeberDiv>
    </MemberListDiv>
  );
};

export default MemberList;
