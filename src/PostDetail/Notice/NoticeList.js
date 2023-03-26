import React, { useState } from "react";
import Dropdownbutton from "./Dropdownbutton";

const NoticeList = ({ item, isChecked }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [btnOpen, setBtnOpen] = useState(false);
  const [menu, setMenu] = useState([
    { id: 1, text: "수정" },
    { id: 2, text: "참여도 수정" },
    { id: 3, text: "삭제" },
  ]);
  return (
    <div>
      <div>
        <div>
          <span>{date}</span>
          <button onClick={() => setBtnOpen(!btnOpen)}>=</button>
          <div>
            {btnOpen &&
              menu.map((item) => (
                <ul key={item.id}>
                  <Dropdownbutton item={item} />
                </ul>
              ))}
          </div>
        </div>
        <div>{item}</div>
      </div>
    </div>
  );
};

export default NoticeList;
