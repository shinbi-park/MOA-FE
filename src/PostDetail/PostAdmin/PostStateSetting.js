import React, { useContext, useState } from "react";
import styled from "styled-components";
import { titleContext } from "../PostDetail";

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
`;

const PostStateSetting = () => {
  const { setTitleState } = useContext(titleContext);
  const [setting, setSetting] = useState();

  const onChangeSetting = () => {
    setTitleState(setting);
  };
  return (
    <SelectDiv>
      <h1>상태 변경</h1>
      <SelectOption onChange={(e) => setSetting(e.target.value)}>
        <option value="모집 중">모집 중</option>
        <option value="모집 완료">모집 완료 </option>
        <option value="프로젝트 완료">프로젝트 완료</option>
      </SelectOption>
      <SelectBtn onClick={onChangeSetting}>변경하기</SelectBtn>
    </SelectDiv>
  );
};

export default PostStateSetting;
