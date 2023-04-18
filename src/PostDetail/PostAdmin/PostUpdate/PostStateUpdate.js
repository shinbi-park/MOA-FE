import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { titleState } from "../../../common/atoms";
import { useEffect } from "react";
import axios from "axios";

const SelectDiv = styled.div`
  margin-bottom: 70px;
`;
const SelectOption = styled.select`
  width: 700px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  padding-left: 1%;
  margin-right: 15px;
  margin-left: 30px;
`;

const SelectBtn = styled.button`
  width: 80px;
  font-size: 16px;
  height: 40px;
  font-weight: 600;
  border: none;
  background-color: #d9d9d9;
`;

const PostStateUpdate = () => {
  const [titles, setTitles] = useRecoilState(titleState);
  const [setting, setSetting] = useState(titles);
  const stateArr = [1, 2, 3];

  // useEffect(() => {
  //   fetchState();
  // }, []);

  // const fetchState = async () => {
  //   await axios
  //     .post(`http://13.125.111.131:8080/recruitment/2?statusCode=${setting}`, {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo5LCJleHAiOjE2ODEyODc5NDl9.T-2IXekDbG9a0y8TaSepcWfpOSxJgpUPZvlkkeXWQ3EucSwgWgmWafudaxelZPSSl3xcWGH8hbpfY_0GIMRYHg",

  //         AuthorizationRefresh:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyODgwNDl9.KXHwTPY1HvTwhfZo9PdCPdMWgRElud6mh18ymofGyi65ozWAVLAPqpcYB1LRTRzqX5J0iDtt3IS_w8VZa2eLsQ",
  //       },
  //     })
  //     .then((response) => console.log(response));
  // };

  const onChangeSetting = () => {
    setTitles(parseInt(setting));
    setSetting(setting);
  };

  return (
    <SelectDiv>
      <h1>상태 변경</h1>
      <SelectOption
        value={setting}
        onChange={(e) => setSetting(e.target.value)}
      >
        <option value={stateArr[0]}>모집 중</option>
        <option value={stateArr[1]}>모집 완료 </option>
        <option value={stateArr[2]}>프로젝트 완료</option>
      </SelectOption>
      <SelectBtn onClick={onChangeSetting}>변경하기</SelectBtn>
    </SelectDiv>
  );
};

export default PostStateUpdate;
