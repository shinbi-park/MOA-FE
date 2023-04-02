import React, { createContext, useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import PostTab from "./PostTab/PostTab";
import PostTitle from "./PostTitle";

const PostDetailDiv = styled.div`
  padding-bottom: 5%;
`;

export const titleContext = createContext();

const PostDetail = () => {
  const [titleState, setTitleState] = useState("모집 중");

  return (
    <titleContext.Provider value={{ titleState, setTitleState }}>
      <PostDetailDiv>
        <PostTitle />
        <PostTab />
      </PostDetailDiv>
    </titleContext.Provider>
  );
};

export default PostDetail;
