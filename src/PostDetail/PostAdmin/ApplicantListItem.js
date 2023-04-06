import React from "react";
import styled from "styled-components";

const ApplicantItemDiv = styled.div`
  display: flex;
  width: 550px;
  padding-bottom: 10px;
  margin: 20px 0;
  border-bottom: 1px solid gray;
  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
`;

const ApplicantBtnDiv = styled.div`
  margin-left: 300px;
`;

const ApplicantBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
`;

const ApplicantListItem = ({ userName }) => {
  return (
    <ApplicantItemDiv>
      <div>{userName}</div>
      <ApplicantBtnDiv>
        <ApplicantBtn>정보보기</ApplicantBtn>
        <ApplicantBtn>수락</ApplicantBtn>
        <ApplicantBtn>거부</ApplicantBtn>
      </ApplicantBtnDiv>
    </ApplicantItemDiv>
  );
};

export default ApplicantListItem;
