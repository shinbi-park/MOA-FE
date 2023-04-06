import React, { useState, useRef, useCallback } from "react";
import PostionList from "./PositionList";
import PostionTemplate from "./PositionTemplate";

export default function Position({ handleFieldsChange, isEdit, data }) {
  const nextId = useRef(2);

  const [positions, setPosition] = useState([
    {
      id: 1,
      total: 1,
      field: "",
    },
  ]);

  const onInsert = useCallback(() => {
    const position = {
      id: nextId.current,
      total: 1,
      field: "",
    };
    const newPosition = (positions) => positions.concat(position);
    setPosition(newPosition);
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setPosition((positions) => {
      if (positions.length > 1) {
        const newPosition = positions.filter((position) => position.id !== id);
        return newPosition;
      } else return positions;
    });
  }, []);

  const onPositionChange = useCallback(
    (id, num, value) => {
      if (value.trim() === "") return;
      setPosition((positions) => {
        const index = positions.findIndex((position) => position.id === id);
        const updatedPositions = [...positions];
        updatedPositions[index].field = value;
        updatedPositions[index].total = num;
        handleFieldsChange(updatedPositions);
        return updatedPositions;
      });
    },
    [handleFieldsChange]
  );

  return (
    <PostionTemplate>
      <PostionList
        positions={positions}
        onRemove={onRemove}
        onInsert={onInsert}
        onPositionChange={onPositionChange}
      />
    </PostionTemplate>
  );
}
