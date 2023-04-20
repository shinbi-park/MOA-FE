import React, { useState } from "react";
import styled from "styled-components";
import PageCommentInput from "./PostCommentInput";
import PostInfoReply from "./PostInfoReply";
import PostCommentItem from "./PostCommentItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { myPostComment } from "../../../common/atoms";

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
  const postComment = useRecoilValue(myPostComment);
  const [comment, setComment] = useState("");

  const exCom = postComment[1];

  const { postId } = useParams();

  const [comment_count, setComment_count] = useState(0);
  const [newComment, setNewComment] = useState([]);

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const onCommentSubmit = () => {
    //e.preventDefault();

    axios
      .post(
        `http://13.125.111.131:8080/recruitment/${postId}/reply?content=`,
        {
          params: {
            content: comment,
          },
        },

        {
          headers: {
            // 로그인 후 받아오는 인증토큰값
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",

            AuthorizationRefresh:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });

    // comment.created_time = new Date()
    //   .toLocaleString()
    //   .slice(0, 24)
    //   .replace("T", " ");

    // setNewComment((newComment) => {
    //   return [comment, ...newComment];
    // });
    // setComment({
    //   ...comment,
    //   commentId: comment.commentId + 1,
    //   content: "",
    // });
    // setComment_count(comment_count + 1);
  };

  const onEditComment = (id, newContent) => {
    setNewComment(
      newComment?.map((item) =>
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

      <PageCommentInput
        onCommentSubmit={onCommentSubmit}
        comment={comment}
        onCommentChange={onCommentChange}
      />

      <CommentUl>
        <PostCommentItem
          exCom={exCom}
          onDeleteComment={onDeleteComment}
          onEditComment={onEditComment}
        />
      </CommentUl>

      {/* {newComment.map((item) => (
        <CommentUl key={item.commentId}>
          <PostCommentItem
            item={item}
            onDeleteComment={onDeleteComment}
            onEditComment={onEditComment}
          />

          {<PostInfoReply commentId={item.commentId} />}
          <HrCommentLine />
     
      ))} */}
    </div>
  );
};

export default PostInfoComment;