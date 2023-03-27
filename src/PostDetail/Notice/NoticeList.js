import React, { useState } from "react";
import styled from "styled-components";
import Dropdownbutton from "./Dropdownbutton";

const NoticeListWrap = styled.div`
  width: 1045px;
  height: 143px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-top: 32px;
`;

const NoticeListHeader = styled.div`
  padding: 10px;
  padding-left: 2%;
  display: flex;
  justify-content: space-between;
`;

const NoticeListDate = styled.span`
  color: #6c6b6b;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
`;

const NoticeListContent = styled.div`
  padding: 10px;
  padding-left: 2%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
`;

const VotingBtnDiv = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10px;
`;

const VotingPositive = styled.button`
  border: none;
  background: none;
  color: #63b730;
  cursor: pointer;
  margin-right: 5px;
`;

const VotingNegative = styled.button`
  border: none;
  background: none;
  color: #ff4242;
  cursor: pointer;
`;

const NoticeList = ({ newnotice }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <div>
      <NoticeListWrap>
        <NoticeListHeader>
          <div>
            <NoticeListDate>{date}</NoticeListDate>
          </div>
          <div>
            <button onClick={() => setDropOpen(!dropOpen)}>=</button>

            <Dropdownbutton dropOpen={dropOpen} />
          </div>
        </NoticeListHeader>
        <NoticeListContent>{newnotice.content}</NoticeListContent>
        {newnotice.check && (
          <VotingBtnDiv>
            <VotingPositive>V</VotingPositive>
            <VotingNegative>X</VotingNegative>
          </VotingBtnDiv>
        )}
      </NoticeListWrap>
    </div>
  );
};

export default NoticeList;
