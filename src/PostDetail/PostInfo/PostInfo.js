import React from "react";

import PostInfoAbout from "./PostInfoAbout";
import PostInfoComment from "./PostInfoCommnet/PostInfoComment";
import PostInfoCurrent from "./PostInfoCurrent";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { getPostData } from "../../common/selector";

const PostInfo = () => {
  const [curPost, setCurPost] = useState("");
  const myPost = useRecoilValue(getPostData);

  useEffect(() => {
    if (myPost.length >= 1) {
      const targetPost = myPost.find((item) => item.id === 1);
      if (targetPost) {
        setCurPost(targetPost.company);
      }
    }
  }, [myPost]);

  return (
    <div>
      <PostInfoCurrent />
      <PostInfoAbout curPost={curPost} />
      <PostInfoComment />
    </div>
  );
};

export default PostInfo;
