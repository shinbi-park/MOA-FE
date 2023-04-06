import React from "react";
import PostStateUpdate from "./PostStateUpdate";
import { Link } from "react-router-dom";

const PostUpdate = () => {
  return (
    <div>
      <h1>모집글 관리</h1>

      <Link to="/edit">글 수정하기</Link>
      <PostStateUpdate />
    </div>
  );
};

export default PostUpdate;
