import React, { useState } from "react";
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
  margin-left: 280px;
  background: none;
  font-weight: bold;
  border: 1px solid;
  border-radius: 4px;
  height: 1.5rem;
  width: 3rem;

  & + & {
    margin-left: 10px;
  }
`;

const PostionList = ({ positions, onInsert, onRemove,  onPositionChange}) => {
  const lastPosition = positions[positions.length - 1];
  const lastId = lastPosition ? lastPosition.id : 0;

  const handlePositionChange = (id, total, field) => {
    onPositionChange(id, total, field);
  };

  return (
    <PositionBlock className="PositionList">
      {positions.map((position) => (
        <PositionListItem
          position={position}
          key={position.id}
          onRemove={onRemove}
          onInsert={onInsert}
          onPositionChange={handlePositionChange}
        />
      ))}
      <div>
        <Button onClick={() => onInsert()}> 추가 </Button>
        <Button onClick={() => onRemove(lastId)}> 삭제 </Button>
      </div>
    </PositionBlock>
  );
};

export default PostionList;
