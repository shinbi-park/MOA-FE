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
import axios from "axios";
import { useParams } from "react-router-dom";

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
  const { postId } = useParams();
  const [user, setUser] = useRecoilState(ScheduleUser);
  const [leftUser, setLeftUser] = useRecoilState(ScheduleLeftUser);
  const [isHover, setIsHover] = useRecoilState(ScheduleHover);
  const [select, setSelect] = useRecoilState(ScheduleSelect);
  const [text, setText] = useState([
    {
      nickname: "nickname1",
      possibleTimeData: [],
    },
  ]);

  useEffect(() => {
    fetchSchedule();
  }, []);
  const fetchSchedule = async () => {
    await axios
      .get(`http://13.125.111.131:8080/recruitment/${postId}/time/all`, {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
      })
      .then((response) => console.log(response.data));
  };
  useEffect(() => {
    if (schedule >= 1) {
      const setTime = text.map((item) => item.possibleTimeData);

      let combinedTime = [];
      for (let i = 0; i < setTime.length; i++) {
        const arr = setTime[i];
        if (arr.length > 0) {
          combinedTime = combinedTime.concat(arr);
        }
        setSchedule(combinedTime);
        setState(setTime);
      }
    }
  }, [schedule]);

  const ScheduleUpdate = async (schedule) => {
    await axios
      .put(
        `http://13.125.111.131:8080/recruitment/${postId}/time`,
        {
          possibleTimeDataList: schedule,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
        }
      )
      .then((response) => console.log(response));
  };

  const getId = (getTime) => {
    const getUser = text.filter((item) =>
      item.possibleTimeData.some((it) => it === getTime)
    );
    setUser(getUser);

    const getLeftUser = text.filter(
      (item) => !item.possibleTimeData.includes(getTime)
    );
    setLeftUser(getLeftUser);
  };

  const scheduleHandler = (newSchedule) => {
    setSchedule(newSchedule);
    ScheduleUpdate(newSchedule);
    console.log(newSchedule);
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
