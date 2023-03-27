import React, { useState } from "react";
import styled from "styled-components";
import NoticeList from "./NoticeList";

const NoticeWrap = styled.div`
  width: 1025px;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 10px;
`;

const NoticeInput = styled.textarea`
  resize: none;
  width: 1025px;
  height: 143px;
  border: none;

  :focus {
    outline: none;
  }
`;

const VotingCheckDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const NoticeAddBtnDiv = styled.div`
  width: 1045px;
  display: flex;
  justify-content: end;
`;

const NoticeAddBtn = styled.button`
  margin-top: 14px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  width: 87px;
  height: 28px;
`;

const AddNotice = () => {
  const [notice, setNotice] = useState({
    content: "",
    check: "",
  });
  const [newNotice, setNewNotice] = useState([]);
  const [isChecked, setisChecked] = useState(false);

  const onSubmitNotice = (e) => {
    e.preventDefault();
    notice.check = isChecked;
    setNewNotice([notice, ...newNotice]);
    setNotice({ content: "", check: "" });
    setisChecked(false);
  };

  return (
    <div>
      <h1>공지사항 추가</h1>
      <div>
        <form onSubmit={onSubmitNotice}>
          <NoticeWrap>
            <NoticeInput
              placeholder="공지사항을 입력하세요"
              value={notice.content}
              onChange={(e) =>
                setNotice({ ...notice, content: e.target.value })
              }
            />
            <VotingCheckDiv>
              <label>
                투표기능 포함
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setisChecked(e.target.checked)}
                />
              </label>
            </VotingCheckDiv>
          </NoticeWrap>
          <NoticeAddBtnDiv>
            <NoticeAddBtn>등록하기</NoticeAddBtn>
          </NoticeAddBtnDiv>
        </form>
      </div>
      {newNotice.map((newnotice, index) => (
        <NoticeList key={index} newnotice={newnotice} />
      ))}
    </div>
  );
};

export default AddNotice;
