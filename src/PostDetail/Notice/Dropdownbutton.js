import React, { useState } from "react";
import styled from "styled-components";

const DropdownDiv = styled.div`
  position: absolute;
  width: 100px;
  height: 130px;
  background-color: #efefef;
  border: 1px solid #d9d9d9;
  margin: 0 auto;
  line-height: 2;

  &.simple_active {
    height: 65px;
    line-height: 2;
  }
`;

const DropDownList = styled.div`
  text-align: center;
  cursor: default;
  :hover {
    background-color: #ddd;
  }
`;

const Dropdownbutton = ({
  newnotice,
  onNoticeDelete,
  isEditSetting,
  voteFinishHandler,
}) => {
  const [dropOpen, setDropOpen] = useState(false);

  const isEditDeliver = () => {
    setDropOpen(false);
    isEditSetting(dropOpen);
  };

  const VotingToggle = (id) => {
    setDropOpen(false);
    voteFinishHandler(id, false);
  };
  return (
    <div>
      <button onClick={() => setDropOpen(!dropOpen)}>=</button>
      {dropOpen &&
        (newnotice.check ? (
          <DropdownDiv>
            <DropDownList onClick={isEditDeliver}>수정</DropDownList>
            <DropDownList>참여도 수정</DropDownList>
            <DropDownList onClick={() => VotingToggle(newnotice.noticeId)}>
              투표마감
            </DropDownList>
            <DropDownList onClick={() => onNoticeDelete(newnotice.noticeId)}>
              삭제
            </DropDownList>
          </DropdownDiv>
        ) : (
          <DropdownDiv className="simple_active">
            <DropDownList onClick={isEditDeliver}>수정</DropDownList>
            <DropDownList onClick={() => onNoticeDelete(newnotice.noticeId)}>
              삭제
            </DropDownList>
          </DropdownDiv>
        ))}
    </div>
  );
};

export default Dropdownbutton;
