import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Testdatacontext } from "../../App";

const Detail = () => {
  const { id } = useParams();
  const data = useContext(Testdatacontext);
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (data) {
      const currentData = data.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      setPost(currentData);
    }
  }, [id, data]);

  return (
    <div>
      <h1>{id}번째 글입니다</h1>
      <div>{post.title}</div>
      <div>{post.quote}</div>
    </div>
  );
};

export default Detail;
