import React, { useEffect, useState } from "react";

const PostInfoCurrent = () => {
  const [data, setData] = useState([]);
  // useEffect(async() => {
  //   const response = await axios.get(`http://localhost:8080/recruitment/${recruitmentId}`);
  // setData(response.data);
  // },[])

  return (
    <div>
      <h1>모집 현황</h1>
      <div>
        <span>프론트엔드</span> <span>1/3</span> <button>지원하기</button>
      </div>
      <div>
        <span>백엔드</span> <span>4/4</span> <span>모집완료</span>
      </div>
    </div>
  );
};

export default PostInfoCurrent;
