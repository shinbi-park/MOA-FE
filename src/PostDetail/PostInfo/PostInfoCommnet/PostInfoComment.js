import React, { useState } from "react";
import styled from "styled-components";
import PostCommentInput from "./PostCommentInput";
import PostCommnetItem from "./PostCommnetItem";
import PostInfoReply from "./PostInfoReply";

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

const PostInfoComment = () => {
  const [comment, setComment] = useState({
    userName: "user1",
    content: "",
    created_time: "",
    commentId: 0,
  });

  const [comment_count, setComment_count] = useState(0);
  const [newComment, setNewComment] = useState([]);

  const onCommentChange = (e) => {
    setComment({ ...comment, content: e.target.value });
  };

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

  const onEditComment = (id, newContent) => {
    setNewComment(
      newComment.map((item) =>
        item.commentId === id ? { ...item, content: newContent } : item
      )
    );
  };

  const onDeleteComment = (id) => {
    setNewComment(newComment.filter((item) => item.commentId !== id));
    setComment_count(comment_count - 1);
  };

  return (
    <div>
      <h1>{comment_count}개의 댓글</h1>

      <PostCommentInput
        onCommentSubmit={onCommentSubmit}
        comment={comment}
        onCommentChange={onCommentChange}
      />

      {newComment.map((item) => (
        <CommentUl key={item.commentId}>
          <PostCommnetItem
            item={item}
            onDeleteComment={onDeleteComment}
            onEditComment={onEditComment}
          />

          {<PostInfoReply commentId={item.commentId} />}
          <HrCommentLine />
        </CommentUl>
      ))}
    </div>
  );
};

export default PostInfoComment;
