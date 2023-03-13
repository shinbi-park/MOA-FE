import React, { useState, useRef } from "react";
import PostionList from "./PositionList";
import PostionTemplate from "./PositionTemplate";
import styled from "styled-components";
import Category from "../Category";

const Line = styled.hr`
  width: 95%;
  margin: 10px 15px;
  border: 1px solid #ddd;
`;

const ProjectIntro = styled.h2`
  text-align: left;
  margin-left: 15px;
  margin-bottom: 5px;
`;

export default function App() {
  const nextId = useRef(2);

  const [positions, setPosition] = useState([
    {
      id: 1,
      people: 1,
      position: ""
    }
  ]);

  const onInsert = (pos) => {
    const position = {
      id: nextId.current,
      people: 1,
      position: pos
    };
    setPosition((positions) => positions.concat(position));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setPosition((positions) => {
      if (positions.length > 1) {
        positions.filter((position) => position.id !== id);
      }
    });
  };

  console.log(positions);
  return (
    <div className="App">

      <PostionTemplate>
        <PostionList
          positions={positions}
          onRemove={onRemove}
          onInsert={onInsert}
        />
      </PostionTemplate>
    </div>
  );
}
