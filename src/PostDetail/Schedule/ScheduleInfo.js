import React from "react";
import styled from "styled-components";

const ScheduleInfoDiv = styled.div`
  margin-left: 200px;
`;

const SchduleColorBarDiv = styled.div`
  width: 400px;
  height: 40px;
  border: 1px solid #000;
  display: flex;
`;

const SchduleColorBar = styled.div`
  width: 100px;
  height: 40px;

  &.first_range {
    background-color: #fff;
  }
  &.second_range {
    background-color: #e5d0ff;
  }
  &.third_range {
    background-color: #d7b3fd;
  }
  &.last_range {
    background-color: #bd8ffa;
  }
`;

const ScheduleInfo = () => {
  return (
    <ScheduleInfoDiv>
      <h1>Availability</h1>
      <SchduleColorBarDiv>
        <SchduleColorBar className="first_range" />
        <SchduleColorBar className="second_range" />
        <SchduleColorBar className="third_range" />
        <SchduleColorBar className="last_range" />
      </SchduleColorBarDiv>
    </ScheduleInfoDiv>
  );
};

export default ScheduleInfo;
