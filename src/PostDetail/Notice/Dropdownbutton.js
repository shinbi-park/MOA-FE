import React, { useState } from "react";
import styled from "styled-components";

const DropdownDiv = styled.div`
  position: absolute;
  width: 87px;
  height: 123px;
  background-color: #efefef;
  border: 1px solid gray;
  margin: 0 auto;
  padding: 10px;
  line-height: 2;
`;

const DropDownList = styled.div``;

const Dropdownbutton = ({ dropOpen }) => {
  const [menu, setMenu] = useState([
    { id: 1, text: "수정" },
    { id: 2, text: "참여도 수정" },
    { id: 3, text: "투표마감" },
    { id: 4, text: "삭제" },
  ]);

  return (
    <div>
      {dropOpen && (
        <DropdownDiv>
          {menu.map((item) => (
            <div key={item.id}> {item.text}</div>
          ))}
        </DropdownDiv>
      )}
    </div>
  );
};

export default Dropdownbutton;
