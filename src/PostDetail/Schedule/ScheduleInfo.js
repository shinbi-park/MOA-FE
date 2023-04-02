import React, { useContext } from "react";
import styled from "styled-components";
import { userContext } from "./Schedule";

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

const ScheduleInfo = () => {
  const { user, isHover, select } = useContext(userContext);
  return (
    <ScheduleInfoDiv>
      <h3>Availability</h3>
      <SchduleColorBarDiv>
        <SchduleColorBar className="first_range" />
        <SchduleColorBar className="second_range" />
        <SchduleColorBar className="third_range" />
        <SchduleColorBar className="last_range" />
      </SchduleColorBarDiv>
      <div>
        <div>
          <ul>
            <li>Available</li>
            {isHover && select && <li>{user}</li>}
          </ul>
        </div>

        <div>
          <ul>
            <li>Unavailable</li>
            {isHover && !select && <li>{user}</li>}
          </ul>
        </div>
      </div>
    </ScheduleInfoDiv>
  );
};

export default ScheduleInfo;
