import React, { useState } from "react";
import ScheduleSelector from "react-schedule-selector";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  ScheduleHover,
  ScheduleLeftUser,
  ScheduleSelect,
  ScheduleUser,
  scheduleTime,
} from "../../common/atoms";
import { scheduleDummy } from "../../common/DummyData";
import { useEffect } from "react";

const ScheduleTableDiv = styled.div`
  width: 500px;
  padding-left: 30px;
`;

const ScheduleDateCell = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ selected }) => (selected ? "#BD8FFA" : "#fff")};
  border: 1px solid black;
`;

const ScheduleTable = () => {
  const [schedule, setSchedule] = useState([]);
  const [state, setState] = useState();
  const [user, setUser] = useRecoilState(ScheduleUser);
  const [leftUser, setLeftUser] = useRecoilState(ScheduleLeftUser);
  const [isHover, setIsHover] = useRecoilState(ScheduleHover);
  const [select, setSelect] = useRecoilState(ScheduleSelect);

  useEffect(() => {
    const setTime = scheduleDummy.map((item) => item.data);

    let combinedTime = [];
    for (let i = 0; i < setTime.length; i++) {
      const arr = setTime[i];
      if (arr.length > 0) {
        combinedTime = combinedTime.concat(arr);
      }
      setSchedule(combinedTime);
      setState(setTime);
    }
  }, []);

  const getId = (getTime) => {
    const getUser = scheduleDummy.filter((item) =>
      item.data.some((it) => it === getTime)
    );
    setUser(getUser);

    const getLeftUser = scheduleDummy.filter(
      (item) => !item.data.includes(getTime)
    );
    setLeftUser(getLeftUser);
  };

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
          getId(JSON.stringify(datetime).replaceAll('"', ""));

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
