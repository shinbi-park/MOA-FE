import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import PositionListItem from "./PositionListItem";

const Wrapper = styled.div`
  display: flex;
  align-content: left;
  margin-top: 7px;
  margin-left: 40px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  text-align: left;
  margin-top: 10px;
  font-weight: bold;
  font-size: 19px;
`;

const PositionBlock = styled.div`
  text-align: left;
  display: inline-block;
  margin-left: 10px;
  margin-top: 0px;
  & > & {
    display: inline;
  }
`;

const Button = styled.button`
  align-items: left;
  margin-left: 5px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 13px;
  margin-left: 325px;
  background-color: ${(props) => props.backgroundColor};
  font-weight: bold;
  border: ${(props) => props.border};
  border-radius: 4px;
  height: 1.5rem;
  width: 3rem;
  box-shadow: 2px 1px 5px #bdbdbd;
  & + & {
    margin-left: 10px;
  }
`;

const Position = ({ handleFieldsChange, isEdit, Editdata }) => {
  const nextId = useRef(2);
  const [positions, setPosition] = useState([
    {
      recruitMemberId: 1,
      totalCount: 1,
      recruitField: "",
    },
  ]);
  const lastPosition = positions[positions?.length - 1];
  const lastId = lastPosition ? lastPosition.recruitMemberId : 0;

  useEffect(() => {
    if (isEdit) {
      const member = Editdata.members?.filter(
        (item) => item.recruitField !== "LEADER"
      );
      setPosition(member);
    }
  }, [isEdit, Editdata]);

  const onInsert = useCallback(() => {
    const position = {
      recruitMemberId: nextId.current,
      totalCount: 1,
      recruitField: "",
    };
    const newPosition = (positions) => positions.concat(position);
    setPosition(newPosition);
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setPosition((positions) => {
      if (positions.length > 1) {
        const newPosition = positions.filter(
          (position) => position.recruitMemberId !== id
        );
        return newPosition;
      } else return positions;
    });
  }, []);

  const onPositionChange = useCallback(
    (id, num, value) => {
      if (value.trim() === "") return;

      const positionArr = positions.find(
        (position) => position.recruitMemberId === id
      );
      positionArr.recruitField = value;
      positionArr.totalCount = num;
      const updatedPositions = [...positions];
      handleFieldsChange(updatedPositions);
    },
    [handleFieldsChange, positions]
  );

  const handlePositionChange = (id, total, field) => {
    onPositionChange(id, total, field);
  };

  const onClickInsert = (e) => {
    e.preventDefault();
    onInsert();
  };
  const onClickRemove = (e) => {
    e.preventDefault();
    onRemove(lastId);
  };

  return (
    <Wrapper>
    <Label> 모집 포지션 </Label>
    <PositionBlock>
      {!isEdit ? (
        <>
          {positions.map((position) => (
            <PositionListItem
              position={position}
              key={position.recruitMemberId}
              onRemove={onRemove}
              onInsert={onInsert}
              onPositionChange={handlePositionChange}
            />
          ))}
          <div>
            <Button
              backgroundColor={"white"}
              border={"1px solid black"}
              onClick={onClickInsert}
            >
              {" "}
              추가{" "}
            </Button>
            <Button
              backgroundColor={"#D9D9D9"}
              border={"none"}
              onClick={onClickRemove}
            >
              {" "}
              삭제{" "}
            </Button>
          </div>
        </>
      ) : (
        <>
          {positions.map((position) => (
            <PositionListItem
              isEdit={isEdit}
              position={position}
              key={position.recruitMemberId}
              onRemove={onRemove}
              onInsert={onInsert}
              onPositionChange={handlePositionChange}
              field={position.recruitField}
              total={position.totalCount}
            />
          ))}
          <div>
            <Button
              backgroundColor={"white"}
              border={"1px solid black"}
              onClick={onClickInsert}
            >
              {" "}
              추가{" "}
            </Button>
            <Button
              backgroundColor={"#D9D9D9"}
              border={"none"}
              onClick={onClickRemove}
            >
              {" "}
              삭제{" "}
            </Button>
          </div>
        </>
      )}
    </PositionBlock>
      </Wrapper>
  );
};

export default Position;
