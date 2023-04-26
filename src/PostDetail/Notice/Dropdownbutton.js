import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ImCheckmark, ImCross } from "react-icons/im";

const DropdownDiv = styled.div`
  position: relative;
  width: 120px;
  background-color: #fff;
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
    background-color: #e5d0ff;
  }
`;

const EditParticipantDiv = styled.div`
  position: absolute;
  border: 1px solid black;
  background-color: #fcfbfe;
  left: 121px;
  width: 140px;
  top: -80px;
  min-height: 130px;
`;
const AttendanceDiv = styled.div`
  margin-bottom: 30px;
`;

const AttendTitle = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  background-color: #ffd700;
  text-align: center;
  margin-bottom: 10px;
`;

const ParticipantUl = styled.ul`
  display: flex;
`;

const ParticipantList = styled.li`
  list-style: none;
  margin-left: -10px;
`;

const VotingNegative = styled.button`
  border: none;
  background: none;
  color: #ff4242;
  cursor: pointer;
  margin-left: 20px;

  &.normal {
    margin-left: 0;
    cursor: default;
  }
`;

const VotingPositive = styled.button`
  border: none;
  background: none;
  color: #63b730;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 20px;

  &.normal {
    margin-left: 0;
    margin-right: 0;
    cursor: default;
  }
`;

const Dropdownbutton = ({
  newnotice,
  onNoticeDelete,
  isEditSetting,
  voteFinishHandler,
  author,
  fetchUpdateAttend,
  isVote,
  fetchFinishVote,
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

  const UpdateAttendHandler = (id, status) => {
    fetchUpdateAttend(id, status);
  };

  return (
    <div ref={dropRef}>
      {author || newnotice.checkVote ? (
        <button onClick={() => setDropOpen(!dropOpen)}>=</button>
      ) : (
        ""
      )}

      {author ? (
        <>
          {dropOpen &&
            (newnotice.checkVote ? (
              <>
                <DropdownDiv>
                  <DropDownList onClick={isEditDeliver}>수정</DropDownList>
                  <DropDownList
                    onMouseOver={() => setEditHover(true)}
                    onMouseLeave={() => setEditHover(false)}
                  >
                    참여도 수정▶
                  </DropDownList>
                  <>
                    {isVote ? (
                      <DropDownList
                        onClick={() => VotingToggle(newnotice.noticeId)}
                      >
                        투표마감
                      </DropDownList>
                    ) : (
                      <></>
                    )}
                  </>
                  <DropDownList
                    onClick={() => onNoticeDelete(newnotice.noticeId)}
                  >
                    삭제
                  </DropDownList>
                </DropdownDiv>
                {editHover ? (
                  <EditParticipantDiv
                    onMouseOver={() => setEditHover(true)}
                    onMouseLeave={() => setEditHover(false)}
                  >
                    <AttendanceDiv>
                      <AttendTitle>
                        참여{" "}
                        <VotingPositive className="normal">
                          <ImCheckmark />
                        </VotingPositive>
                      </AttendTitle>
                      {newnotice.members?.ATTENDANCE.map((item) => (
                        <ParticipantUl key={item.applimentMemberId}>
                          <ParticipantList>{item.memberName}</ParticipantList>
                          <VotingNegative
                            onClick={() =>
                              UpdateAttendHandler(
                                item.applimentMemberId,
                                "NONATTENDANCE"
                              )
                            }
                          >
                            <ImCross />
                          </VotingNegative>
                        </ParticipantUl>
                      ))}
                    </AttendanceDiv>

                    <AttendanceDiv>
                      <AttendTitle>
                        불참여
                        <VotingNegative className="normal">
                          <ImCross />
                        </VotingNegative>
                      </AttendTitle>

                      {newnotice.members?.NONATTENDANCE.map((item) => (
                        <ParticipantUl key={item.applimentMemberId}>
                          <ParticipantList>{item.memberName}</ParticipantList>
                          <VotingPositive
                            onClick={() =>
                              UpdateAttendHandler(
                                item.applimentMemberId,
                                "ATTENDANCE"
                              )
                            }
                          >
                            <ImCheckmark />
                          </VotingPositive>
                        </ParticipantUl>
                      ))}
                    </AttendanceDiv>
                    <AttendanceDiv>
                      <AttendTitle>미투표 </AttendTitle>

                      {newnotice.members?.NONE.map((item) => (
                        <ParticipantUl key={item.applimentMemberId}>
                          <ParticipantList>{item.memberName}</ParticipantList>
                          <VotingNegative
                            onClick={() =>
                              UpdateAttendHandler(
                                item.applimentMemberId,
                                "NONATTENDANCE"
                              )
                            }
                          >
                            <ImCross />
                          </VotingNegative>
                        </ParticipantUl>
                      ))}
                    </AttendanceDiv>
                  </EditParticipantDiv>
                ) : (
                  ""
                )}
              </>
            ) : (
              <DropdownDiv className="simple_active">
                <DropDownList onClick={isEditDeliver}>수정</DropDownList>
                <DropDownList
                  onClick={() => onNoticeDelete(newnotice.noticeId)}
                >
                  삭제
                </DropDownList>
              </DropdownDiv>
            ))}
        </>
      ) : (
        <>
          {dropOpen &&
            (newnotice.checkVote ? (
              <>
                <DropdownDiv>
                  <DropDownList
                    onMouseOver={() => setEditHover(true)}
                    onMouseLeave={() => setEditHover(false)}
                  >
                    참여 현황 ▶
                  </DropDownList>
                </DropdownDiv>
                {editHover ? (
                  <EditParticipantDiv
                    onMouseOver={() => setEditHover(true)}
                    onMouseLeave={() => setEditHover(false)}
                  >
                    <AttendanceDiv>
                      <AttendTitle>
                        참여{" "}
                        <VotingPositive className="normal">
                          <ImCheckmark />
                        </VotingPositive>
                      </AttendTitle>
                      {newnotice.members?.ATTENDANCE.map((item) => (
                        <ParticipantUl key={item.applimentMemberId}>
                          <ParticipantList>{item.memberName}</ParticipantList>
                        </ParticipantUl>
                      ))}
                    </AttendanceDiv>

                    <AttendanceDiv>
                      <AttendTitle>
                        불참여
                        <VotingNegative className="normal">
                          <ImCross />
                        </VotingNegative>
                      </AttendTitle>
                      {newnotice.members?.NONATTENDANCE.map((item) => (
                        <ParticipantUl key={item.applimentMemberId}>
                          <ParticipantList>{item.memberName}</ParticipantList>
                        </ParticipantUl>
                      ))}
                    </AttendanceDiv>
                    <AttendanceDiv>
                      <AttendTitle>미투표</AttendTitle>
                      {newnotice.members?.NONE.map((item) => (
                        <ParticipantUl key={item.applimentMemberId}>
                          <ParticipantList>{item.memberName}</ParticipantList>
                        </ParticipantUl>
                      ))}
                    </AttendanceDiv>
                  </EditParticipantDiv>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            ))}
        </>
      )}
    </div>
  );
};

export default Dropdownbutton;
