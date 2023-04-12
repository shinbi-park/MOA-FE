import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CurrentPosition from "./CurrentPosition";

const CurrentPartTitle = styled.div`
  margin-top: 32px;
  margin-bottom: 23px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
`;

const HrLine = styled.hr`
  color: #dbdbdb;
  margin-top: 25px;
`;

const PageInfoCurrent = ({ postData }) => {
  const [data, setData] = useState([]);

  // useEffect(async() => {
  //   const response = await axios.get(`http://localhost:8080/recruitment/${recruitmentId}`);
  // setData(response.data);
  // },[])

  return (
    <div>
      <CurrentPartTitle>모집 현황</CurrentPartTitle>

      {postData[0].members.map((item, index) => {
        return <CurrentPosition key={index} item={item} />;
      })}

      <HrLine />
    </div>
  );
};

export default PageInfoCurrent;
