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

const ParticipantRate = () => {
  const [rate, setRate] = useState(85);
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
