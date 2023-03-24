import React, { useState, useRef } from "react";
import PostionList from "./PositionList";
import PostionTemplate from "./PositionTemplate";

export default function Position() {
  const nextId = useRef(2);

  const [positions, setPosition] = useState([
    {
      id: 1,
      people: 1,
      position: ""
    }
  ]);

  const onInsert = () => {
    const position = {
      id: nextId.current,
      people: 1,
      position: ""
    };
    setPosition((positions) => positions.concat(position));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setPosition((positions) => {
      if (positions.length > 1) {
        return positions.filter((position) => position.id !== id);
      }
      else return positions;
    });
  };

  const handlePositionChange = (id, num, value) => {
    setPosition((positions) => {
      const index = positions.findIndex((position) => position.id === id);
      const updatedPositions = [...positions];
      updatedPositions[index].position = value;
      updatedPositions[index].people = num;
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
