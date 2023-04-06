import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoDetail from "../../UserInfo/InfoDetail";
import { useState } from "react";

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
  const [openInfo, setOpenInfo] = useState(false);
  const handlecloseInfo = () => {
    setOpenInfo(false);
  };

  return (
    <>
      <ApplicantItemDiv>
        <div>{userName}</div>
        <ApplicantBtnDiv>
          <ApplicantBtn onClick={() => setOpenInfo(!openInfo)}>
            정보보기
          </ApplicantBtn>

          <ApplicantBtn>수락</ApplicantBtn>
          <ApplicantBtn>거부</ApplicantBtn>
        </ApplicantBtnDiv>
      </ApplicantItemDiv>
      {openInfo && <InfoDetail handlecloseInfo={handlecloseInfo} />}
    </>
  );
};

export default ApplicantListItem;
