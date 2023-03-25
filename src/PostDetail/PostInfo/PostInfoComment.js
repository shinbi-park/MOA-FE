import React, { useState } from "react";
import PostInfoReply from "./PostInfoReply";

const PostInfoComment = () => {
  const [comment, setComment] = useState({
    userName: "user1",
    content: "",
    created_time: "",
  });

  const [reply, setReply] = useState({
    userName: "user2",
    content: "",
    created_time: "",
  });

  const [comment_count, setComment_count] = useState(0);
  const [newComment, setNewComment] = useState([]);
  const [newReply, setNewReply] = useState([]);

  const [replyToggle, setReplyToggle] = useState(false);

  const onCommentSubmit = (e) => {
    e.preventDefault();
    comment.created_time = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    setNewComment((newComment) => {
      return [comment, ...newComment];
    });
    setComment({ ...comment, content: "" });
    setComment_count(comment_count + 1);
  };

  const onReplyToggle = () => {
    setReplyToggle(!replyToggle);
  };

  const onReplySubmit = (e) => {
    e.preventDefault();
    reply.created_time = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    setNewReply((newReply) => {
      return [reply, ...newReply];
    });
    setReply({ ...reply, content: "" });
    setReplyToggle(!replyToggle);
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

      {newComment.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.userName}</li>
            <li> {item.created_time}</li>
            <li> {item.content}</li>
            <button onClick={onReplyToggle}>답글</button>
            {replyToggle ? (
              <form onSubmit={onReplySubmit}>
                <textarea
                  placeholder="답글을 입력해주세요"
                  value={reply.content}
                  onChange={(e) =>
                    setReply({ ...reply, content: e.target.value })
                  }
                />
                <div>
                  <button>확인</button>
                </div>
              </form>
            ) : (
              ""
            )}
            {<PostInfoReply newReply={newReply} />}
          </ul>
        );
      })}
    </div>
  );
};

export default PostInfoComment;
