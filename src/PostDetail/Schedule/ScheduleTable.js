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
  background-color: ${({ selected }) => (selected ? "#e5d0ff" : "#fff")};

  /* background-color: ${({ state }) =>
    (state >= 0.1 ? "#BD8FFA" : "#fff") ||
    (state >= 0.3 ? "#d7b3fd" : "#BD8FFA") ||
    (state >= 0.5 ? "#bd8ffa" : "d7b3fd")} */
  border: 1px solid black;

  &.middle {
    background-color: #bd8ffa;
  }

  &.high {
    background-color: #bd8ffa;
  }
`;

const ScheduleTable = ({ isEdit }) => {
  const [schedule, setSchedule] = useState([]);
  const [state, setState] = useState(0);
  const { postId } = useParams();
  const [user, setUser] = useRecoilState(ScheduleUser);
  const [leftUser, setLeftUser] = useRecoilState(ScheduleLeftUser);
  const [isHover, setIsHover] = useRecoilState(ScheduleHover);
  const [select, setSelect] = useRecoilState(ScheduleSelect);
  const [scheduleData, setScheduleData] = useRecoilState(scheduleTime);
  const [mySchedule, setMySchedule] = useState([]);

  useEffect(() => {
    if (!isEdit) {
      fetchSchedule();
    } else {
      fetchMySchedule();
    }
  }, [isEdit]);

  const fetchMySchedule = async () => {
    await axios
      .get(`http://13.125.111.131:8080/recruitment/${postId}/time`, {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
      })
      .then((response) => {
        setMySchedule(response.data);
        console.log(response);
      });
  };
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
      .then((response) => {
        setScheduleData(response.data);
        console.log(response.data);
      });
  };
  useEffect(() => {
    if (scheduleData?.length !== 0) {
      const setTime = scheduleData.map((item) => item.possibleTimeData);

      let combinedTime = [];
      for (let i = 0; i < setTime.length; i++) {
        const arr = setTime[i];
        if (arr?.length > 0) {
          combinedTime = combinedTime.concat(arr);
        }
        setSchedule(combinedTime);
      }
    }
  }, [scheduleData]);

  const ScheduleUpdate = async (schedule) => {
    await axios.put(
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
    );

    fetchMySchedule();
    fetchSchedule();
  };

  const getId = (getTime) => {
    if (scheduleData?.length !== 0) {
      const getUser = scheduleData.filter((item) =>
        item.possibleTimeData.some((it) => it === getTime)
      );
      setUser(getUser);

      const getLeftUser = scheduleData.filter(
        (item) => !item.possibleTimeData.includes(getTime)
      );
      setLeftUser(getLeftUser);
    } else {
      setLeftUser(scheduleData);
    }
  };

  const scheduleHandler = (newSchedule) => {
    setMySchedule(newSchedule);
    ScheduleUpdate(newSchedule);
  };

  const ResetSchedule = () => {
    setMySchedule([]);
  };
  const startDate = new Date("2023-03-26T09:00:00.000Z");
  const renderCustomDateCell = (datetime, selected, innerRef) => {
    const value = JSON.stringify(datetime).replaceAll('"', "");
    const ValueArr = schedule.filter((item) => item === value).length;
    const ValueRate = ValueArr / 10;

    return (
      <>
        {isEdit ? (
          <>
            <ScheduleDateCell
              selected={selected}
              ref={innerRef}
              onMouseOver={() => {
                setIsHover(true);
                setLeftUser([]);
                // getId(JSON.stringify(datetime).replaceAll('"', ""));
                setSelect({
                  value: selected,
                  date: JSON.stringify(datetime).substr(1, 10),
                  time: JSON.stringify(
                    datetime.toLocaleTimeString()
                  ).replaceAll('"', ""),
                });
              }}
              onMouseLeave={() => {
                setIsHover(false);
                setSelect({ time: "" });
              }}
            />
          </>
        ) : (
          <>
            <ScheduleDateCell
              className={
                (ValueRate === 0.2 && "middle") || (ValueRate >= 0.5 && "high")
              }
              state={state}
              selected={selected}
              ref={innerRef}
              onMouseOver={() => {
                setIsHover(true);
                getId(JSON.stringify(datetime).replaceAll('"', ""));
                setSelect({
                  value: selected,
                  date: JSON.stringify(datetime).substr(1, 10),
                  time: JSON.stringify(
                    datetime.toLocaleTimeString()
                  ).replaceAll('"', ""),
                });
              }}
              onMouseLeave={() => {
                setIsHover(false);
                setSelect({ time: "" });
              }}
            />
          </>
        )}
      </>
    );
  };
  return (
    <div>
      {isEdit ? (
        <ScheduleTableDiv>
          <p>시간을 선택해주세요</p>
          <button onClick={ResetSchedule}>리셋하기</button>
          <ScheduleSelector
            selection={mySchedule}
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
      ) : (
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
            rowGap="0"
            columnGap="0"
            renderDateCell={renderCustomDateCell}
          />
        </ScheduleTableDiv>
      )}
    </div>
  );
};

export default ScheduleTable;
