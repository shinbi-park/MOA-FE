import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  ScheduleHover,
  ScheduleLeftUser,
  ScheduleSelect,
  ScheduleUser,
} from "../../common/atoms";

const ScheduleInfoDiv = styled.div`
  margin-left: 200px;
`;

const SchduleColorBarDiv = styled.div`
  width: 400px;
  height: 30px;
  border: 1px solid #000;
  display: flex;
`;

const SchduleColorBar = styled.div`
  width: 100px;
  height: 30px;

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

const ScheduleSelected = styled.div`
  margin-top: 30px;
  text-align: center;
  height: 30px;
`;

const SelectedTime = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const AvailableTableDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const AvailableTableUl = styled.ul`
  list-style: none;
`;

const AvailableTableTitle = styled.li`
  text-decoration: underline;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const ScheduleInfo = () => {
  const user = useRecoilValue(ScheduleUser);
  const leftUser = useRecoilValue(ScheduleLeftUser);
  const isHover = useRecoilValue(ScheduleHover);
  const select = useRecoilValue(ScheduleSelect);

  const customDay = new Date(select.date).getDay();
  const weekList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const customToday = weekList[customDay];

  return (
    <ScheduleInfoDiv>
      <h3>Availability</h3>
      <SchduleColorBarDiv>
        <SchduleColorBar className="first_range" />
        <SchduleColorBar className="second_range" />
        <SchduleColorBar className="third_range" />
        <SchduleColorBar className="last_range" />
      </SchduleColorBarDiv>
      <ScheduleSelected>
        <div>
          {isHover ? (
            <SelectedTime>
              {customToday} {select.time}
            </SelectedTime>
          ) : (
            <div></div>
          )}
        </div>
      </ScheduleSelected>
      <AvailableTableDiv>
        <div>
          <AvailableTableUl>
            <AvailableTableTitle>Available</AvailableTableTitle>
            {isHover && select.value && (
              <>
                {user.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </>
            )}
          </AvailableTableUl>
        </div>

        <div>
          <AvailableTableUl>
            <AvailableTableTitle>Unavailable</AvailableTableTitle>
            {isHover && leftUser.length >= 1 && (
              <>
                {leftUser.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </>
            )}
          </AvailableTableUl>
        </div>
      </AvailableTableDiv>
    </ScheduleInfoDiv>
  );
};

export default ScheduleInfo;
