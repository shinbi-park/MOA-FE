import React from "react";
import PositionListItem from "./PositionListItem";
import styled from "styled-components";

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

const PostionList = ({ positions, onInsert, onRemove, onPositionChange }) => {
  const lastPosition = positions[positions.length - 1];
  const lastId = lastPosition ? lastPosition.id : 0;

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
    <PositionBlock className="PositionList">
      {positions.map((position) => (
        <PositionListItem
          position={position}
          key={position.id}
          onRemove={onRemove}
          onInsert={onInsert}
          field={position.field}
          total={position.total}
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
    </PositionBlock>
  );
};

export default PostionList;
