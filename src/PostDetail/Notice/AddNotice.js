import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeItem from "./NoticeItem";
import axios from "axios";
import { useParams } from "react-router-dom";

const NoticeWrap = styled.div`
  width: 1025px;
  border: 2px solid #000;
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
  background-color: black;
  color: #fff;
  font-weight: 600;
  width: 87px;
  height: 28px;
`;

const AddNotice = () => {
  const [notice, setNotice] = useState("");
  const { postId } = useParams();

  const [newNotice, setNewNotice] = useState([]);
  const [isChecked, setisChecked] = useState(false);

  const fetchNotice = async () => {
    const response = await axios
      .get(`http://13.125.111.131:8080/recruitment/${postId}/notice`, {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
      })
      .then((response) => {
        setNewNotice(response.data.notices);
        console.log(response.data.notices);
      });
  };

  useEffect(() => {
    fetchNotice();
  }, []);

  const onSubmitNotice = async (e) => {
    e.preventDefault();
    await axios.post(
      `http://13.125.111.131:8080/recruitment/${postId}/notice`,
      {
        content: notice,
        checkVote: isChecked,
      },
      {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
      },
      { responseType: "json" }
    );
    fetchNotice();
    setNotice("");
    setisChecked(false);
  };

  const onNoticeDelete = async (id) => {
    axios.delete(
      `http://13.125.111.131:8080/recruitment/${postId}/notice/${id}`,

      {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
      },
      { responseType: "json" }
    );
    setNewNotice(newNotice.filter((item) => item.noticeId !== id));
  };

  const onEditNotice = async (id, newContent) => {
    await axios
      .patch(
        `http://13.125.111.131:8080/recruitment/${postId}/notice/${id}`,
        {
          content: newContent,
          checkVote: "",
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
        }
      )
      .then((response) => {
        console.log(response);
      });

    setNewNotice(
      newNotice.map((item) =>
        item.noticeId === id ? { ...item, content: newContent } : item
      )
    );
  };
  const onVoteFinish = (id, votestate) => {
    setisChecked(votestate);
    setNewNotice(
      newNotice.map((item) =>
        item.noticeId === id ? { ...item, check: isChecked } : item
      )
    );
  };

  return (
    <div>
      <h1>공지사항 추가</h1>
      <div>
        <form>
          <NoticeWrap>
            <NoticeInput
              placeholder="공지사항을 입력하세요"
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
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
            <NoticeAddBtn onClick={onSubmitNotice}> 등록하기</NoticeAddBtn>
          </NoticeAddBtnDiv>
        </form>
      </div>
      {newNotice.map((newnotice) => (
        <div key={newnotice.noticeId}>
          <NoticeItem
            newnotice={newnotice}
            onNoticeDelete={onNoticeDelete}
            onEditNotice={onEditNotice}
            onVoteFinish={onVoteFinish}
          />
        </div>
      ))}
    </div>
  );
};

export default AddNotice;
