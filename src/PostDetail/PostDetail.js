import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recruitDummy } from "../common/DummyData";
import axios from "axios";
import PostTab from "./PostTab/PostTab";
import PostTitle from "./PostTitle";

const PostDetailDiv = styled.div`
  padding-bottom: 5%;
`;

const PostDetail = () => {
  const data = recruitDummy;
  const [postData, setPostData] = useState(data);

  // useEffect(() => {
  //  const response = axios.get(`recruitment/${recruitmentId}`);
  // setPostData(response.data);
  // },[])

  return (
    <PostDetailDiv>
      <PostTitle />
      <PostTab />
    </PostDetailDiv>
  );
};

export default PostDetail;
