import React, { useState } from "react";
import styled from "styled-components";
import PostTab from "./PostTab/PostTab";
import PostTitle from "./PostTitle";
import { useRecoilState, useRecoilValue } from "recoil";
import { myPostData, postData } from "../common/atoms";
import { getPostData } from "../common/selector";
import { useEffect } from "react";
import axios from "axios";

const PostDetailDiv = styled.div`
  padding-bottom: 5%;
`;

const PostDetail = () => {
  const data = useRecoilValue(postData);
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useRecoilState(myPostData);

  const tokenA = window.localStorage.getItem("Authorization");
  const tokenB = window.localStorage.getItem("AuthorizationRefresh");

  //recoil + axios 예시
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setPost(response.data);
    setIsLoading(false);

    // axios
    //   .get("http://13.125.111.131:8080/recruitment/1", {
    //     headers: {
    //       Authorization: tokenA,
    //       AuthorizationRefresh: tokenB,
    //     },
    //   })
    //   .then((response) => {
    //     setPost(response.data);
    //     console.log(data);
    //     setIsLoading(false);
    //   })

    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
