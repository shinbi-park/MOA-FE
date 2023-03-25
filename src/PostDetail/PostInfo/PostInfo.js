import React from "react";
import PostInfoAbout from "./PostInfoAbout";
import PostInfoComment from "./PostInfoComment";
import PostInfoCurrent from "./PostInfoCurrent";

const PostInfo = () => {
  return (
    <div>
      <PostInfoCurrent />
      <PostInfoAbout />
      <PostInfoComment />
    </div>
  );
};

export default PostInfo;
