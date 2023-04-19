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

  useEffect(() => {
    axios
      .get(`http://13.125.111.131:8080/recruitment/${postId}`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE4NzI2NzF9.8KM_OoUUPEZ6XdE1ewjpSNmgARmjpVSATlUThQahApglgBNaM6b_56gxm1zhWDqrpBPCxjYr5tvOObmHXG6Wrw",

          AuthorizationRefresh:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODMwNzA4NzF9.IpuiAZaZcWyDuXtCgbxGe9nFoYmlKnx6n3LHj42kaJZX_V_VQ-DsWIWmJ_7VzgGNreeqtVEI1VfkVnqpb4yylg",
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
  }, [setPost, setTitles, setPostComment, postId]);

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
