import React, { useState } from "react";
import styled from "styled-components";
import ScheduleInfo from "./ScheduleInfo";
import ScheduleTable from "./ScheduleTable";

const SchduleDiv = styled.div`
  display: flex;
`;

const Schedule = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <h1>회의시간 조사</h1>
      <button onClick={() => setIsEdit(!isEdit)}>시간 선택하기</button>
      <SchduleDiv>
        <ScheduleTable isEdit={isEdit} />
        <ScheduleInfo />
      </SchduleDiv>
    </div>
  );
};

export default Schedule;
