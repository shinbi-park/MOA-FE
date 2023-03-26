import React, { useCallback, useState } from "react";
import PostInfoReply from "./PostInfoReply";

const PostInfoComment = () => {
  const [comment, setComment] = useState({
    userName: "user1",
    content: "",
    created_time: "",
    commentId: 0,
  });
  const date = new Date().toString().slice(0, 25).replace("T", " ");
  console.log(date);

  const [comment_count, setComment_count] = useState(0);
  const [newComment, setNewComment] = useState([]);

  const [replyToggle, setReplyToggle] = useState(false);
  const [curCommentId, setCurCommentId] = useState();

  const onCommentSubmit = (e) => {
    e.preventDefault();
    comment.created_time = new Date()
      .toLocaleString()
      .slice(0, 23)
      .replace("T", " ");
    setNewComment((newComment) => {
      return [comment, ...newComment];
    });
    setComment({
      ...comment,
      commentId: comment.commentId + 1,
      content: "",
    });
    setComment_count(comment_count + 1);
  };

  const onDeleteComment = useCallback(
    (id) => {
      setNewComment(newComment.filter((it) => it.commentId !== id));
      setComment_count(comment_count - 1);
    },
    [comment_count, newComment]
  );

  const onReplyToggle = (id) => {
    setCurCommentId(id);
    setReplyToggle(true);
    if (id === curCommentId) {
      setReplyToggle(!replyToggle);
    }
  };

  return (
    <div>
      <h1>{comment_count}개의 댓글</h1>
      <form onSubmit={onCommentSubmit}>
        <textarea
          placeholder="댓글을 입력해주세요"
          value={comment.content}
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
        />
        <div>
          <button>확인</button>
        </div>
      </form>

      {newComment.map((item) => (
        <ul key={item.commentId}>
          <li>{item.userName}</li>
          <li> {item.created_time}</li>
          <li> {item.content}</li>
          <button onClick={() => onReplyToggle(item.commentId)}>답글</button>
          <button onClick={() => onDeleteComment(item.commentId)}>삭제</button>

          {
            <PostInfoReply
              commentId={item.commentId}
              replyToggle={replyToggle}
              curCommentId={curCommentId}
              newComment={newComment}
              onCommentSubmit={onCommentSubmit}
            />
          }
        </ul>
      ))}
    </div>
  );
};

export default PostInfoComment;
