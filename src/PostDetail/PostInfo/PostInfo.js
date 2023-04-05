import React from "react";

import PostInfoAbout from "./PostInfoAbout";
import PostInfoComment from "./PostInfoCommnet/PostInfoComment";
import PostInfoCurrent from "./PostInfoCurrent";
import { useEffect } from "react";
import { useState } from "react";
import { recruitDummy } from "../../common/DummyData";
import axios from "axios";

const PostInfo = () => {
  const data = recruitDummy;
  const [postData, setPostData] = useState(data);
  const [error, setError] = useState();

  return (
    <div>
      <PostInfoCurrent postData={postData} />
      <PostInfoAbout postData={postData} />
      <PostInfoComment />
    </div>
  );
};

export default PostInfo;
