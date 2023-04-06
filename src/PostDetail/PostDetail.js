import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recruitDummy } from "../common/DummyData";
import axios from "axios";
import PostTab from "./PostTab/PostTab";
import PostTitle from "./PostTitle";
import { useRecoilValue } from "recoil";
import { postData } from "../common/atoms";

const PostDetailDiv = styled.div`
  padding-bottom: 5%;
`;

const PostDetail = () => {
  const data = useRecoilValue(postData);

  // const tokenA = window.localStorage.getItem("Authorization");
  // const tokenB = window.localStorage.getItem("AuthorizationRefresh");

  // useEffect(() => {
  //   axios
  //     .get("http://192.168.0.26:8080/recruitment/2", {
  //       headers: {
  //         Authorization: tokenA,
  //         AuthorizationRefresh: tokenB,
  //       },
  //     })
  //     .then((response) => {
  //       setPostData(response.data);
  //       console.log(postData.postUser);
  //     })

  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <PostDetailDiv>
      <PostTitle />
      <PostTab />
    </PostDetailDiv>
  );
};

export default PostDetail;
