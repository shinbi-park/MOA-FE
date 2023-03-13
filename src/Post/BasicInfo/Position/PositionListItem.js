import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Block = styled.div`
  color: red;
`;

const InputText = styled.input`
  margin-left: 5px;
  padding: 2px 5px;
  font-size: inherit;
  text-align: center;
  line-height: inherit;
  height: 23px;
  width: 70%;
  border: 1px solid black;
  border-radius: 4px;
  color: inherit;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
`;
const Button = styled.button`
  margin: 10px;
  border: none;
  display: inline;
  & + & {
    margin: 10px;
  }
`;

const PositionListItem = () => {
  const [num, setNum] = useState(1);
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const addPeople = (event) => {
    event.preventDefault();
    setNum(num + 1);
  };

  const removePeople = (event) => {
    event.preventDefault();
    if (num > 1) setNum(num - 1);
  };

  return (
    <>
      <Block>
        <InputText
          placeholder="ex. 프론트엔드"
          value={value}
          onChange={onChange}
        />
        <Button onClick={removePeople}> - </Button> {num}
        <Button onClick={addPeople}> + </Button>
      </Block>
    </>
  );
};

export default PositionListItem;
