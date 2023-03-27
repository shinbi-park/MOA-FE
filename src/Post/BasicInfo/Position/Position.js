import React, { useState, useRef } from "react";
import PostionList from "./PositionList";
import PostionTemplate from "./PositionTemplate";

export default function Position({onFieldsChange}) {
  const nextId = useRef(2);

  const [positions, setPosition] = useState([
    {
      id: 1,
      total: 1,
      field: ""
    }
  ]);

  const onInsert = () => {
    const position = {
      id: nextId.current,
      total: 1,
      field: ""
    };
    const newPosition = (positions) => positions.concat(position);
    setPosition(newPosition);
    onFieldsChange(newPosition); 
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setPosition((positions) => {
      if (positions.length > 1) {
        const newPosition = positions.filter((position) => position.id !== id);
        onFieldsChange(newPosition); 
        return newPosition;
      }
      else return positions;
    });
  };

  const handlePositionChange = (id, num, value) => {
    if (value.trim() === '') return;
    setPosition((positions) => {
      const index = positions.findIndex((position) => position.id === id);
      const updatedPositions = [...positions];
      updatedPositions[index].field = value;
      updatedPositions[index].total = num;
      onFieldsChange(updatedPositions); 
      return updatedPositions;
    });
    
  };

  console.log(positions);
  
  
  return (
    <div className="Position">

      <PostionTemplate>
        <PostionList
          positions={positions}
          onRemove={onRemove}
          onInsert={onInsert}
          onPositionChange={handlePositionChange}
        />
      </PostionTemplate>
    </div>
  );
}
