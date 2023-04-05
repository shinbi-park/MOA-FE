import React, { useState } from "react";
import styled from "styled-components";
import Dropdownbutton from "./Dropdownbutton";

const NoticeListWrap = styled.div`
  width: 1045px;
  height: 143px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-top: 32px;

  &.vote_done {
    background-color: #e9e9e9;
  }
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
  font-size: 16px;
  display: flex;
`;

const NoticeDropdownDiv = styled.div`
  position: absolute;
  left: 1080px;
`;

const NoticeListContent = styled.div`
  padding: 10px;
  padding-left: 2%;
  font-family: "Inter";
  font-style: normal;
  font-size: 18px;
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

const NoticeItem = ({
  newnotice,
  onNoticeDelete,
  onEditNotice,
  onVoteFinish,
}) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [isEdit, setIsEdit] = useState(false);
  const [isVote, setIsVote] = useState(true);
  const [curContent, setCurContent] = useState(newnotice.content);

  //const response = await axios.post(`/recruitment/${recruitmentId}/apply`,{"value" : "PENDING");

  const isEditSetting = (EditValue) => {
    setIsEdit(EditValue);
  };

  const editNoticeHandler = (id, newContent) => {
    onEditNotice(id, newContent);
    setIsEdit(!isEdit);
  };

  const voteFinishHandler = (id, votestate) => {
    onVoteFinish(id, votestate);
    setIsVote(!isVote);
  };

  return (
    <NoticeListWrap className={!isVote ? "vote_done" : ""}>
      <NoticeListHeader>
        <div>
          <NoticeListDate className={!isVote ? "vote_done" : ""}>
            {date}
            {!isVote && <span>추천 지역: 서울역??</span>}
          </NoticeListDate>
        </div>
        <NoticeDropdownDiv>
          <Dropdownbutton
            newnotice={newnotice}
            onNoticeDelete={onNoticeDelete}
            isEditSetting={isEditSetting}
            voteFinishHandler={voteFinishHandler}
          />
        </NoticeDropdownDiv>
      </NoticeListHeader>

      {!isEdit ? (
        <>
          <NoticeListContent> {newnotice.content} </NoticeListContent>
        </>
      ) : (
        <NoticeListContent>
          <textarea
            value={curContent}
            onChange={(e) => setCurContent(e.target.value)}
          />
          <button
            onClick={() => editNoticeHandler(newnotice.noticeId, curContent)}
          >
            수정완료
          </button>
          <button onClick={() => setIsEdit(!isEdit)}>취소</button>
        </NoticeListContent>
      )}

      {newnotice.check && (
        <VotingBtnDiv>
          <VotingPositive>참여 V</VotingPositive>
          <VotingNegative>불참 X</VotingNegative>
        </VotingBtnDiv>
      )}

      {!isVote && <p>투표가 마감되었습니다</p>}
    </NoticeListWrap>
  );
};

export default NoticeItem;
