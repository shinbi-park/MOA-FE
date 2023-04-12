import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { postData } from "../../../common/atoms";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../../../Post/Post";

const PostEdit = () => {
  const data = useRecoilValue(postData);
  const [curData, setCurData] = useState([]);

  return (
    <div>
      <div>
        <Post isEdit={true} data={data} />
      </div>
    </div>
  );
};

export default PostEdit;
