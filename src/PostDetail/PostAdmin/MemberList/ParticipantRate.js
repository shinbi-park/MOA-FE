import React, { useState } from "react";
import styled from "styled-components";

const RateBar = styled.div`
  margin-left: 10px;
  width: 120px;
  height: 25px;
  background-color: white;
  display: flex;
`;

const CurrentRate = styled.div`
  background-color: ${(props) => (props.rate ? "#5D5FEF" : "")};
  width: ${(props) => props.rate + "%"};
  height: 100%;
`;

const ParticipantRate = ({ member }) => {
  const [total, setTotal] = useState(member.totalAttend);
  const [attend, setAttend] = useState(member.attend);
  const rate = attend / total;
  return (
    <>
      <RateBar>
        <CurrentRate rate={rate}></CurrentRate>
      </RateBar>
      {rate}%
    </>
  );
};

export default ParticipantRate;
