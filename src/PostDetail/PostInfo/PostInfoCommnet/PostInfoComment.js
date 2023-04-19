import React, { useState } from "react";
import styled from "styled-components";
import PageCommentInput from "./PostCommentInput";
import PostInfoReply from "./PostInfoReply";
import { useRecoilState, useRecoilValue } from "recoil";
import PostCommentItem from "./PostCommentItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
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
  const [Comments, setComments] = useRecoilState(myPostComment);
  const [comment, setComment] = useState("");
  const { postId } = useParams();
  const [comment_count, setComment_count] = useState(Comments.length);
  const [newComment, setNewComment] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      const response = await axios
        .get(`http://13.125.111.131:8080/recruitment/${postId}`, {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",

            AuthorizationRefresh:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
          },
        })
        .then((response) => {
          setNewComment(response.data.repliesInfo.info);
        })

        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchComment();
  }, []);

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const onCommentSubmit = async () => {
    const params = {
      content: comment,
    };

    const response = await axios.post(
      `http://13.125.111.131:8080/recruitment/${postId}/reply`,
      null,

      {
        headers: {
          // 로그인 후 받아오는 인증토큰값
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",

          AuthorizationRefresh:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
        },

        params,
      }
    );

    setComment("");
    setComment_count(comment_count + 1);
  };

  const onEditComment = (id, newContent) => {
    axios.post(
      `http://13.125.111.131:8080/recruitment/${postId}/reply/${id}`,
      {
        content: newContent,
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
    );
  };

  const onDeleteComment = async (id) => {
    await axios.delete(
      `http://13.125.111.131:8080/recruitment/${postId}/reply/${id}`,

      {
        headers: {
          // 로그인 후 받아오는 인증토큰값
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",

          AuthorizationRefresh:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
        },
      }
    );
    setComments(Comments.filter((item) => item.replyId !== id));
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

      {Comments.map((item) => (
        <CommentUl key={item.replyId}>
          <PostCommentItem
            item={item}
            onDeleteComment={onDeleteComment}
            onEditComment={onEditComment}
          />

          <PostInfoReply item={item} />

          <HrCommentLine />
        </CommentUl>
      ))}
    </div>
  );
};

export default PostInfoComment;
