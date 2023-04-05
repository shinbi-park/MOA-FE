import React, { useState } from "react";
import ScheduleSelector from "react-schedule-selector";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  ScheduleHover,
  ScheduleSelect,
  ScheduleUser,
} from "../../common/atoms";

const ScheduleTableDiv = styled.div`
  width: 500px;
  padding-left: 30px;
`;

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
  const [user, setUser] = useRecoilState(ScheduleUser);
  const [isHover, setIsHover] = useRecoilState(ScheduleHover);
  const [select, setSelect] = useRecoilState(ScheduleSelect);

  const scheduleHandler = (newSchedule) => {
    setSchedule(newSchedule);
  };

  const startDate = new Date("2023-03-26T09:00:00.000Z");
  const renderCustomDateCell = (datetime, selected, innerRef) => {
    return (
      <ScheduleDateCell
        selected={selected}
        ref={innerRef}
        onMouseOver={() => {
          setIsHover(true);
          setSelect({
            value: selected,
            date: JSON.stringify(datetime).substr(1, 10),
            time: JSON.stringify(datetime.toLocaleTimeString()).replaceAll(
              '"',
              ""
            ),
          });
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setSelect({ time: "" });
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
          maxTime={24}
          hourlyChunks={2}
          timeFormat={"hh:mm A"}
          dateFormat={"ddd"}
          startDate={startDate}
          onChange={scheduleHandler}
          rowGap="0"
          columnGap="0"
          renderDateCell={renderCustomDateCell}
        />
      </ScheduleTableDiv>
    </div>
  );
};

export default ScheduleTable;
