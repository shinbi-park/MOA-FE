import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Block = styled.div`
  color: black;
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

const PositionListItem = ({ position, onPositionChange }) => {
  const [num, setNum] = useState(1);
  const [positionName, setPositionName] = useState("");

  const onChange = useCallback((e) => {
    setPositionName(e.target.value);
    onPositionChange(position.id, num, e.target.value);

  }, [position.id, num, onPositionChange]);
  

  const addPeople = (event) => {
    event.preventDefault();
    setNum((prevNum) => {
      const newNum = prevNum + 1;
      onPositionChange(position.id, newNum, positionName);
      return newNum;
    });
  };

  const removePeople = (event) => {
    event.preventDefault();
    event.preventDefault();
    setNum((prevNum) => {
      const newNum = prevNum - 1;
      onPositionChange(position.id, newNum, positionName);
      return newNum;
    });
    
  };

  return (
    <>
      <Block>
        <InputText
          placeholder="ex. 프론트엔드"
          value={positionName}
          onChange={onChange}
        />
        <Button onClick={removePeople}> - </Button> {num}
        <Button onClick={addPeople}> + </Button>
      </Block>
    </>
  );
};

export default PositionListItem;
