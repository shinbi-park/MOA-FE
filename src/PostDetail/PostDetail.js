import React, { useState } from "react";
import styled from "styled-components";
import PostTab from "./PostTab/PostTab";
import PostTitle from "./PostTitle";
import { useRecoilState } from "recoil";
import { myPostComment, myPostData, titleState } from "../common/atoms";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetailDiv = styled.div`
  padding-bottom: 5%;
`;

const PostDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useRecoilState(myPostData);
  const [postComment, setPostComment] = useRecoilState(myPostComment);
  const [text, setText] = useState();
  const [titles, setTitles] = useRecoilState(titleState);
  const { postId } = useParams();

  // const tokenA = window.localStorage.getItem("Authorization");
  // const tokenB = window.localStorage.getItem("AuthorizationRefresh");

  //recoil + axios 예시
  const fetchData = async () => {
    axios
      .get(`http://13.125.111.131:8080/recruitment/${postId}`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",

          AuthorizationRefresh:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
        },
      })
      .then((response) => {
        setPost(response.data.recruitInfo);

        setIsLoading(false);
        setTitles(response.data.state);
        setPostComment(response.data.repliesInfo.info);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <PostDetailDiv>
          <PostTitle />

          <PostTab />
        </PostDetailDiv>
      )}
    </>
  );
};

export default PostDetail;
