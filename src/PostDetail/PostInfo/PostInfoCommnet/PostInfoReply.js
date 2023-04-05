import React, { useState } from "react";
import styled from "styled-components";
import PostReplyItem from "./PostReplyItem";

const ReplyBtnDiv = styled.div`
  padding-left: 1%;
`;

const ReplyBtn = styled.button`
  background-color: #d9d9d9;
  width: 54px;
  border: none;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
`;

const ReplyForm = styled.form`
  padding-left: 1%;
  margin-top: 10px;
`;

const ReplyInput = styled.textarea`
  resize: none;
  width: 500px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  border: 3px solid #d9d9d9;
  :focus {
    outline: none;
  }
`;

const ReplyAddBtnWrap = styled.div`
  width: 520px;
  display: flex;
  justify-content: end;
`;

const ReplyAddBtn = styled.button`
  margin-top: 7px;
  background-color: #d9d9d9;
  width: 54px;
  border: none;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
`;

const ReplyUl = styled.ul`
  list-style: none;
`;

const PostInfoReply = ({ commentId }) => {
  const [reply, setReply] = useState({
    userName: "user2",
    content: "",
    created_time: "",
    replyId: 0,
  });

  const [newReply, setNewReply] = useState([]);
  const [replyToggle, setReplyToggle] = useState(false);

  const onReplySubmit = (e) => {
    e.preventDefault();
    reply.created_time = new Date()
      .toLocaleString()
      .slice(0, 24)
      .replace("T", " ");
    setNewReply((newReply) => {
      return [reply, ...newReply];
    });
    setReply({
      ...reply,
      replyId: reply.replyId + 1,
      content: "",
    });
  };

  const onReplyToggle = () => {
    setReplyToggle(!replyToggle);
  };

  const onDeleteReply = (id) => {
    setNewReply(newReply.filter((it) => it.replyId !== id));
  };

  const onEditReply = (id, newContent) => {
    setNewReply(
      newReply.map((item) =>
        item.replyId === id ? { ...item, content: newContent } : item
      )
    );
  };

  return (
    <div>
      <ReplyBtnDiv>
        <ReplyBtn onClick={onReplyToggle}>답글</ReplyBtn>
      </ReplyBtnDiv>
      {replyToggle && (
        <ReplyForm onSubmit={onReplySubmit}>
          <ReplyInput
            placeholder="답글을 입력해주세요"
            value={reply.content}
            onChange={(e) =>
              setReply({
                ...reply,
                content: e.target.value,
              })
            }
          />
          <ReplyAddBtnWrap>
            <ReplyAddBtn>확인</ReplyAddBtn>
          </ReplyAddBtnWrap>
        </ReplyForm>
      )}

      {newReply.map((item) => {
        return (
          <ReplyUl key={item.replyId}>
            <PostReplyItem
              item={item}
              onDeleteReply={onDeleteReply}
              onEditReply={onEditReply}
            />
          </ReplyUl>
        );
      })}
    </div>
  );
};

export default PostInfoReply;
