import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const Block = styled.div`
  color: black;
`;

const InputText = styled.input`
  margin-left: 5px;
  margin-bottom: 10px;
  padding: 2px 5px;
  font-size: inherit;
  text-align: center;
  line-height: inherit;
  height: 28px;
  width: 300px;
  border: 1px solid black;
  border-radius: 4px;
  color: inherit;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  box-shadow: 2px 1px 5px #bdbdbd;
`;
const Button = styled.button`
  margin: 10px;
  border: none;
  display: inline;
  text-align: center;
  & + & {
    margin-left: 15px;
  }
`;

const PositionListItem = ({
  position,
  onPositionChange,
  field,
  total,
  isEdit,
}) => {
  const [num, setNum] = useState(1);
  const [positionName, setPositionName] = useState("");
  const [curNum, setCurNum] = useState();
  const [curPositon, setCurPositon] = useState("");

  useEffect(() => {
    if (isEdit) {
      setCurNum(total);
      setCurPositon(field);
    }
  }, [isEdit]);

  const onChange = useCallback(
    (e) => {
      if (!isEdit) {
        setPositionName(e.target.value);
        onPositionChange(position.recruitMemberId, num, positionName);
      } else {
        setCurPositon(e.target.value);
        onPositionChange(position.recruitMemberId, curNum, curPositon);
      }
    },
    [position.recruitMemberId, num, onPositionChange, positionName]
  );

  const addPeople = (event) => {
    event.preventDefault();
    if (!isEdit) {
      if (num < 8) {
        // 최대 8명까지
        const newNum = num + 1;
        onPositionChange(position.recruitMemberId, newNum, positionName);
        setNum(newNum);
      } else return 8;
    } else {
      if (curNum < 8) {
        // 최대 8명까지
        setCurNum(curNum + 1);
        onPositionChange(position.recruitMemberId, curNum, curPositon);
      } else return 8;
    }
  };

  const removePeople = (event) => {
    event.preventDefault();

    if (num > 1) {
      //최소 1명
      const newNum = num - 1;
      onPositionChange(position.recruitMemberId, newNum, positionName);
      setNum(newNum);
    } else return 1;
  };

  return (
    <>
      {!isEdit ? (
        <>
          <Block>
            <InputText
              placeholder="예시) 프론트엔드"
              value={positionName}
              onChange={onChange}
              required
            />
            <Button onClick={removePeople}> - </Button> {num}
            <Button onClick={addPeople}> + </Button>{" "}
          </Block>
        </>
      ) : (
        <>
          <Block>
            <InputText
              placeholder="예시) 프론트엔드"
              value={curPositon}
              onChange={onChange}
              required
            />
            <Button onClick={removePeople}> - </Button> {curNum}
            <Button onClick={addPeople}> + </Button>{" "}
          </Block>
        </>
      )}
    </>
  );
};

export default PositionListItem;
