import React, { useState } from "react";

const PostInfoReply = ({ newReply }) => {
  return (
    <div>
      {newReply.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.userName}</li>
            <li> {item.created_time}</li>
            <li> {item.content}</li>
            <button>수정하기</button>
          </ul>
        );
      })}
    </div>
  );
};

export default PostInfoReply;
