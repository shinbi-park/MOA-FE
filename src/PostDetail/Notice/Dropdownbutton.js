import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DropdownDiv = styled.div`
  position: relative;
  width: 120px;
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

const EditParticipantDiv = styled.div`
  position: absolute;
  border: 1px solid black;
  background-color: #efefef;
  left: 120px;
  width: 120px;
  top: 60px;
  height: 130px;
`;

const Dropdownbutton = ({
  newnotice,
  onNoticeDelete,
  isEditSetting,
  voteFinishHandler,
}) => {
  const [dropOpen, setDropOpen] = useState(false);
  const [editHover, setEditHover] = useState(false);
  const dropRef = useRef();

  useEffect(() => {
    let dropClose = (e) => {
      if (!dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", dropClose);

    return () => {
      document.removeEventListener("mousedown", dropClose);
    };
  });

  const isEditDeliver = () => {
    setDropOpen(false);
    isEditSetting(dropOpen);
  };

  const VotingToggle = (id) => {
    setDropOpen(false);
    voteFinishHandler(id, false);
  };
  return (
    <div ref={dropRef}>
      <button onClick={() => setDropOpen(!dropOpen)}>=</button>
      {dropOpen &&
        (newnotice.check ? (
          <>
            <DropdownDiv>
              <DropDownList onClick={isEditDeliver}>수정</DropDownList>
              <DropDownList
                onMouseOver={() => setEditHover(true)}
                onMouseLeave={() => setEditHover(false)}
              >
                참여도 수정▶
              </DropDownList>

              <DropDownList onClick={() => VotingToggle(newnotice.noticeId)}>
                투표마감
              </DropDownList>
              <DropDownList onClick={() => onNoticeDelete(newnotice.noticeId)}>
                삭제
              </DropDownList>
            </DropdownDiv>
            {editHover ? (
              <EditParticipantDiv
                onMouseOver={() => setEditHover(true)}
                onMouseLeave={() => setEditHover(false)}
              >
                참여자
              </EditParticipantDiv>
            ) : (
              ""
            )}
          </>
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
