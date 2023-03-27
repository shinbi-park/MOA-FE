import React, { useState } from "react";
import styled from "styled-components";

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

const ReplyUserName = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  margin-top: 10px;
`;

const ReplyTime = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #818181;
`;

const ReplyContent = styled.li`
  white-space: pre-line;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin: 10px 0;
  padding-left: 1%;
`;

const ReplyEditBtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ReplyEditBtn = styled.button`
  border: none;
  background-color: #fff;
  color: #707070;
  font-size: 12px;
`;

const PostInfoReply = ({ commentId, replyToggle, curCommentId }) => {
  const [reply, setReply] = useState({
    userName: "user2",
    content: "",
    created_time: "",
    replyId: 0,
  });

  const [newReply, setNewReply] = useState([]);

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

  const onDeleteReply = (id) => {
    setNewReply(newReply.filter((it) => it.replyId !== id));
  };

  return (
    <div>
      {commentId === curCommentId && replyToggle && (
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
            <ReplyUserName>{item.userName}</ReplyUserName>
            <ReplyTime> {item.created_time}</ReplyTime>
            <ReplyContent> {item.content}</ReplyContent>
            <ReplyEditBtnWrap>
              <ReplyEditBtn>수정</ReplyEditBtn>
              <ReplyEditBtn onClick={() => onDeleteReply(item.replyId)}>
                삭제
              </ReplyEditBtn>
            </ReplyEditBtnWrap>
          </ReplyUl>
        );
      })}
    </div>
  );
};

export default PostInfoReply;
