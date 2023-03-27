import React from "react";
import styled from "styled-components";
import PostTab from "./PostTab/PostTab";
import PostTitle from "./PostTitle";

const PostDetailDiv = styled.div`
  padding-bottom: 5%;
`;

const PostDetail = () => {
  return (
    <PostDetailDiv>
      <PostTitle />
      <PostTab />
    </PostDetailDiv>
  );
};

export default PostDetail;
