import React, { useState } from "react";
import styled from "styled-components";
import PostInfoReply from "./PostInfoReply";

const CommentForm = styled.form`
  width: 1116px;
`;

const CommentInput = styled.textarea`
  background: #ffffff;
  border: 3px solid #d9d9d9;
  border-radius: 10px;
  width: 1096px;
  height: 102px;
  resize: none;
  padding: 10px;

  :focus {
    outline: none;
  }
`;

const CommentBtnWrap = styled.div`
  display: flex;
  justify-content: end;
`;

const CommentBtn = styled.button`
  width: 87px;
  background: #d9d9d9;
  border-radius: 10px;
  height: 30px;
  border: none;
  margin-top: 7px;
`;

const HrCommentLine = styled.hr`
  background: #d9d9d9;
  height: 1px;
  border: 0;
  margin-top: 25px;
`;

const CommentUl = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  width: 1080px;
`;

const CommentUserName = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;

const CommentTime = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #818181;
`;

const CommentContent = styled.li`
  white-space: pre-line;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin: 10px 0;
`;

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

const PostInfoComment = () => {
  const [comment, setComment] = useState({
    userName: "user1",
    content: "",
    created_time: "",
    commentId: 0,
  });

  const [comment_count, setComment_count] = useState(0);
  const [newComment, setNewComment] = useState([]);

  const [replyToggle, setReplyToggle] = useState(false);
  const [curCommentId, setCurCommentId] = useState();

  const onCommentSubmit = (e) => {
    e.preventDefault();
    comment.created_time = new Date()
      .toLocaleString()
      .slice(0, 24)
      .replace("T", " ");
    setNewComment((newComment) => {
      return [comment, ...newComment];
    });
    setComment({
      ...comment,
      commentId: comment.commentId + 1,
      content: "",
    });
    setComment_count(comment_count + 1);
  };

  const onDeleteComment =
    ((id) => {
      setNewComment(newComment.filter((it) => it.commentId !== id));
      setComment_count(comment_count - 1);
    },
    [comment_count, newComment]);

  const onReplyToggle = (id) => {
    setCurCommentId(id);
    setReplyToggle(true);
    if (id === curCommentId) {
      setReplyToggle(!replyToggle);
    }
  };

  return (
    <div>
      <h1>{comment_count}개의 댓글</h1>
      <CommentForm onSubmit={onCommentSubmit}>
        <CommentInput
          value={comment.content}
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
        />
        <CommentBtnWrap>
          <CommentBtn>확인</CommentBtn>
        </CommentBtnWrap>
      </CommentForm>

      {newComment.map((item) => (
        <CommentUl key={item.commentId}>
          <CommentUserName>{item.userName}</CommentUserName>
          <CommentTime> {item.created_time}</CommentTime>
          <CommentContent> {item.content}</CommentContent>
          {/* <button onClick={() => onDeleteComment(item.commentId)}>삭제</button> */}
          <ReplyBtnDiv>
            <ReplyBtn onClick={() => onReplyToggle(item.commentId)}>
              답글
            </ReplyBtn>
          </ReplyBtnDiv>

          {
            <PostInfoReply
              commentId={item.commentId}
              replyToggle={replyToggle}
              curCommentId={curCommentId}
              onCommentSubmit={onCommentSubmit}
              onReplyToggle={onReplyToggle}
            />
          }
          <HrCommentLine />
        </CommentUl>
      ))}
    </div>
  );
};

export default PostInfoComment;
