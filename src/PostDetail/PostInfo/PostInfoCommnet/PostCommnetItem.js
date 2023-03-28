import React, { useState } from "react";
import styled from "styled-components";
const CommentUserName = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;

const CommentTime = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #818181;
`;

const CommentEditBtn = styled.button`
  border: none;
  background-color: #fff;
  color: #707070;
  font-size: 12px;
`;

const CommentContent = styled.li`
  white-space: pre-line;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin: 10px 0;
`;

const PostCommnetItem = ({ item, onDeleteComment, onEditComment }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [curContent, setCurContent] = useState(item.content);

  const editCommentHandelr = (id, curContent) => {
    onEditComment(id, curContent);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <CommentUserName>{item.userName}</CommentUserName>
      <CommentTime>{item.created_time}</CommentTime>
      {isEdit ? (
        <>
          <CommentEditBtn
            onClick={() => editCommentHandelr(item.commentId, curContent)}
          >
            수정완료
          </CommentEditBtn>
          <CommentEditBtn onClick={() => setIsEdit(!isEdit)}>
            취소
          </CommentEditBtn>
        </>
      ) : (
        <>
          <CommentEditBtn onClick={() => setIsEdit(!isEdit)}>
            수정
          </CommentEditBtn>
          <CommentEditBtn onClick={() => onDeleteComment(item.commentId)}>
            삭제
          </CommentEditBtn>
        </>
      )}

      {!isEdit ? (
        <CommentContent> {item.content} </CommentContent>
      ) : (
        <CommentContent>
          <textarea
            value={curContent}
            onChange={(e) => setCurContent(e.target.value)}
          />
        </CommentContent>
      )}
    </div>
  );
};

export default PostCommnetItem;
