import React, { useState } from "react";
import styled from "styled-components";
import ScheduleInfo from "./ScheduleInfo";
import ScheduleTable from "./ScheduleTable";
import { useRecoilState } from "recoil";
import {
  ScheduleHover,
  ScheduleSelect,
  ScheduleUser,
} from "../../common/atoms";

const SchduleDiv = styled.div`
  display: flex;
`;

const Schedule = () => {
  return (
    <div>
      <h1>회의시간 조사</h1>
      <SchduleDiv>
        <ScheduleTable />
        <ScheduleInfo />
      </SchduleDiv>
    </div>
  );
};

export default Schedule;
