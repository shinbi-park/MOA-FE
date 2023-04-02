import React, { createContext, useState } from "react";
import styled from "styled-components";
import ScheduleInfo from "./ScheduleInfo";
import ScheduleTable from "./ScheduleTable";

const SchduleDiv = styled.div`
  display: flex;
`;

export const userContext = createContext();

const Schedule = () => {
  const [user, setUser] = useState("user1");
  const [isHover, setIsHover] = useState(false);
  const [select, setSelect] = useState(false);
  return (
    <userContext.Provider
      value={{ user, setUser, isHover, setIsHover, select, setSelect }}
    >
      <div>
        <h1>회의시간 조사</h1>
        <SchduleDiv>
          <ScheduleTable />
          <ScheduleInfo />
        </SchduleDiv>
      </div>
    </userContext.Provider>
  );
};

export default Schedule;
