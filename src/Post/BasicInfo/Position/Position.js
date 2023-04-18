import React, { useState, useRef, useCallback, useEffect } from "react";
import PostionList from "./PositionList";
import PostionTemplate from "./PositionTemplate";
import { useRecoilValue } from "recoil";
import { myPostData } from "../../../common/atoms";

const Position = ({ handleFieldsChange, isEdit, Editdata }) => {
  const nextId = useRef(2);

  const [positions, setPosition] = useState([
    {
      recruitMemberId: 1,
      total: 1,
      field: "",
    },
  ]);

  useEffect(() => {
    if (isEdit) {
      const member = Editdata.members.filter(
        (item) => item.recruitField !== "LEADER"
      );
      setPosition(member);
    }
  }, [isEdit]);

  const onInsert = useCallback(() => {
    const position = {
      recruitMemberId: nextId.current,
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
      positionArr.field = value;
      positionArr.total = num;
      const updatedPositions = [...positions];
      handleFieldsChange(updatedPositions);
    },
    [handleFieldsChange, positions]
  );

  return (
    <PostionTemplate>
      <PostionList
        isEdit={isEdit}
        positions={positions}
        onRemove={onRemove}
        onInsert={onInsert}
        onPositionChange={onPositionChange}
      />
    </PostionTemplate>
  );
};

export default Position;