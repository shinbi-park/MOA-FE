import React, { useState } from "react";

const PostInfoReply = ({
  commentId,
  replyToggle,
  curCommentId,
  onCommentSubmit,
  newComment,
}) => {
  const [reply, setReply] = useState({
    userName: "user2",
    content: "",
    created_time: "",
  });

  const [newReply, setNewReply] = useState([]);

  const onReplySubmit = (e) => {
    e.preventDefault();
    reply.created_time = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    setNewReply((newReply) => {
      return [reply, ...newReply];
    });
    setReply({
      ...reply,
      replyId: reply.replyId + 1,
      content: "",
    });
    replyToggle(!replyToggle);
  };

  const onDeleteReply = (id) => {
    setNewReply(newReply.filter((it) => it.replyId !== id));
  };

  return (
    <div>
      {commentId === curCommentId && replyToggle && (
        <form onSubmit={onReplySubmit}>
          <textarea
            placeholder="답글을 입력해주세요"
            value={reply.content}
            onChange={(e) =>
              setReply({
                ...reply,
                content: e.target.value,
              })
            }
          />
          <div>
            <button>확인</button>
          </div>
        </form>
      )}

      {newReply.map((item) => {
        return (
          <ul key={item.replyId}>
            <li>{item.userName}</li>
            <li> {item.created_time}</li>
            <li> {item.content}</li>
            <button>수정하기</button>
            <button onClick={() => onDeleteReply(item.replyId)}>
              삭제하기
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default PostInfoReply;
