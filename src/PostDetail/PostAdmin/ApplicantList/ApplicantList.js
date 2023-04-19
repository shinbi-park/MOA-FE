import React, { useState } from "react";
import styled from "styled-components";
import ApplicantListItem from "./ApplicantListItem";

const ApplicantListDiv = styled.div`
  margin-bottom: 70px;
`;

const ApplicantListBox = styled.div`
  margin-left: 30px;
`;

const ApplicantNull = styled.div`
  background-color: #e8e8e8;
  width: 1000px;
  padding: 30px 0;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

const ApplicantDiv = styled.div`
  background-color: #e8e8e8;
  width: 1000px;
  display: flex;
  padding: 30px 0;
  flex-wrap: wrap;
  gap: 50px 0;
`;

const AppliCantWrap = styled.div`
  margin: 0 auto;
  display: flex;
  border: 1px solid gray;
  border-radius: 5px;
  width: 800px;
`;
const ApplycantPosition = styled.h4`
  padding-left: 20px;
`;

const ApplycantItemDiv = styled.div`
  padding-bottom: 20px;
  margin-left: 100px;
`;

const ApplicantList = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <ApplicantListDiv>
      <h1>
        지원자 현황
        <button onClick={() => setToggle(!toggle)}>*</button>
      </h1>

      <ApplicantListBox>
        {!toggle ? (
          <ApplicantNull>현재 지원자가 없습니다</ApplicantNull>
        ) : (
          <ApplicantDiv>
            <AppliCantWrap>
              <ApplycantPosition>Position 1</ApplycantPosition>
              <ApplycantItemDiv>
                <ApplicantListItem userName={"user1"} />
                <ApplicantListItem userName={"user2"} />
              </ApplycantItemDiv>
            </AppliCantWrap>
            <AppliCantWrap>
              <ApplycantPosition>Position 2</ApplycantPosition>
              <ApplycantItemDiv>
                <ApplicantListItem userName={"user1"} />
              </ApplycantItemDiv>
            </AppliCantWrap>
          </ApplicantDiv>
        )}
      </ApplicantListBox>
    </ApplicantListDiv>
  );
};

export default ApplicantList;
