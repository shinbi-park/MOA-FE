import React from "react";

import PostInfoAbout from "./PostInfoAbout";
import PostInfoComment from "./PostInfoCommnet/PostInfoComment";
import PostInfoCurrent from "./PostInfoCurrent";
import { useEffect } from "react";
import { useState } from "react";
import { recruitDummy } from "../../common/DummyData";
import axios from "axios";

const PostInfo = () => {
  const [error, setError] = useState();

  return (
    <div>
      <PostInfoCurrent />
      <PostInfoAbout />
      <PostInfoComment />
    </div>
  );
};

export default PostInfo;
