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
  // const [postComment, setPostComment] = useRecoilState(myPostComment);
  const [text, setText] = useState();
  const [titles, setTitles] = useRecoilState(titleState);
  const { postId } = useParams();

  const fetchInfo = async () => {
    await axios
      .get("http://13.125.111.131:8080/user/info/profile", {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    axios
      .get(`http://13.125.111.131:8080/recruitment/${postId}`, {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
      })
      .then((response) => {
        console.log(response);
        setPost(response.data.recruitInfo);
        setIsLoading(false);
        setTitles(response.data.recruitInfo.state);
        console.log(response.data);
      })

      .catch((error) => {
        console.error("Error:", error);
      });

    fetchInfo();
  }, [setPost, setTitles, postId]);

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
