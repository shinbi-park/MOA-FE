import React, { useContext, useRef, useState } from "react";
import ScheduleSelector from "react-schedule-selector";
import styled from "styled-components";
import { userContext } from "./Schedule";

const ScheduleTableDiv = styled.div`
  width: 500px;
  padding-left: 30px;
`;

// const LastTime = styled.p`
//   position: relative;
//   top: -15px;
//   margin-left: 1px;
//   font-size: 14px;
//   font-weight: 300;
//   line-height: 19.18px;
//   color: rgba(79, 79, 79, 0.87);
// `;

const ScheduleDateCell = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ selected }) => (selected ? "#BD8FFA" : "#fff")};
  border: 1px solid black;

  &.seletedCell {
  }
`;

const ScheduleTable = () => {
  const [schedule, setSchedule] = useState([]);

  const { user, setIsHover, setSelect } = useContext(userContext);
  const scheduleHandler = (newSchedule) => {
    setSchedule(newSchedule);
  };
  const renderCustomDateCell = (datetime, selected, innerRef) => {
    return (
      <ScheduleDateCell
        time={datetime}
        selected={selected}
        ref={innerRef}
        onMouseOver={() => {
          setIsHover(true);
          setSelect(selected);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      />
    );
  };
  return (
    <div>
      <ScheduleTableDiv>
        <ScheduleSelector
          selection={schedule}
          numDays={7}
          minTime={9}
          maxTime={18}
          hourlyChunks={2}
          timeFormat={"hh:mm A"}
          dateFormat={"ddd"}
          startDate={"3-26-23"}
          onChange={scheduleHandler}
          rowGap="0"
          columnGap="0"
          renderDateCell={renderCustomDateCell}
        />
        {/* <LastTime>05:00 PM</LastTime> */}
      </ScheduleTableDiv>
    </div>
  );
};

export default ScheduleTable;
