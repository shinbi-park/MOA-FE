import React, { useState } from "react";
import styled from "styled-components";
import ScheduleInfo from "./ScheduleInfo";
import ScheduleTable from "./ScheduleTable";

const SchduleDiv = styled.div`
  display: flex;
`;

const ScheduleBtn = styled.button`
  font-family: "Inter";
  border-radius: 7px;
  border: none;
  background-color: #bd8ffa;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
`;

const Schedule = () => {
  const [isEdit, setIsEdit] = useState(false);
  const isEditHandler = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      <h1>회의시간 조사</h1>
      <ScheduleBtn onClick={isEditHandler}>
        {isEdit ? "시간 선택 완료" : "시간 선택하기"}
      </ScheduleBtn>
      <SchduleDiv>
        <ScheduleTable isEdit={isEdit} />
        <ScheduleInfo />
      </SchduleDiv>
    </div>
  );
};

export default Schedule;
