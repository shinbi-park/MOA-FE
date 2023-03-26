import React, { useState } from "react";
import NoticeList from "./NoticeList";

const AddNotice = () => {
  const [notice, setNotice] = useState();
  const [newNotice, setNewNotice] = useState([]);
  const [isChecked, setisChecked] = useState(false);

  const onSubmitNotice = (e) => {
    e.preventDefault();
    setNewNotice([notice, ...newNotice]);
    setNotice("");
    setisChecked(false);
  };

  return (
    <div>
      <h1>공지사항 추가</h1>
      <div>
        <form onSubmit={onSubmitNotice}>
          <div>
            <textarea
              placeholder="공지사항을 입력하세요"
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
            />
            <label>
              투표기능 포함
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setisChecked(e.target.checked)}
              />
            </label>
          </div>
          <div>
            <button>등록하기</button>
          </div>
        </form>
      </div>
      {newNotice.map((item) => (
        <NoticeList item={item} isChecked={isChecked} />
      ))}
    </div>
  );
};

export default AddNotice;
