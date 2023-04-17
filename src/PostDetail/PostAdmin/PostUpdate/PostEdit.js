import React from "react";
import { useRecoilValue } from "recoil";
import { myPostData } from "../../../common/atoms";

import Post from "../../../Post/Post";
import { useState } from "react";

const PostEdit = () => {
  const data = useRecoilValue(myPostData);
  const [Editdata, setEditData] = useState(data);
  // 작성한 글 =  EditData
  return (
    <div>
      <div>
        <Post isEdit={true} Editdata={Editdata} />
      </div>
    </div>
  );
};

export default PostEdit;
