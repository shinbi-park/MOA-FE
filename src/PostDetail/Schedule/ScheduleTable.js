import React, { useState } from "react";
import ScheduleSelector from "react-schedule-selector";
import styled from "styled-components";
import "./index.css";

const ScheduleTableDiv = styled.div`
  width: 500px;
  padding-left: 30px;
`;

const LastTime = styled.p`
  position: relative;
  top: -17px;
  font-size: 14px;
  font-weight: 300;
  line-height: 19.18px;
  color: rgba(79, 79, 79, 0.87);
`;

const ScheduleTable = () => {
  const [schedule, setSchedule] = useState([]);
  const scheduleHandler = (newSchedule) => {
    setSchedule(newSchedule);
  };

  return (
    <ScheduleTableDiv>
      <ScheduleSelector
        selection={schedule}
        numDays={7}
        minTime={9}
        maxTime={17}
        hourlyChunks={2}
        timeFormat={"hh:mm A"}
        dateFormat={"ddd"}
        startDate={"3-26-23"}
        onChange={scheduleHandler}
        unselectedColor="#fff"
        selectedColor="#BD8FFA"
        rowGap="0"
        columnGap="0"
      />
      <LastTime>05:00 PM</LastTime>
    </ScheduleTableDiv>
  );
};

export default ScheduleTable;
