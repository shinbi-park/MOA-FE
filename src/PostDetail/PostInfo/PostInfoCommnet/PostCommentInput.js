import React from "react";
import styled from "styled-components";

const CommentForm = styled.form`
  width: 1116px;
`;

const CommentInput = styled.textarea`
  background: #ffffff;
  border: 3px solid #d9d9d9;
  border-radius: 10px;
  width: 1096px;
  height: 102px;
  resize: none;
  padding: 10px;

  :focus {
    outline: none;
  }
`;

const CommentBtnWrap = styled.div`
  display: flex;
  justify-content: end;
`;

const CommentBtn = styled.button`
  width: 87px;
  background: #d9d9d9;
  border-radius: 10px;
  height: 30px;
  border: none;
  margin-top: 7px;
`;

const PostCommentInput = ({ onCommentSubmit, comment, onCommentChange }) => {
  return (
    <div>
      <CommentForm>
        <CommentInput value={comment} onChange={onCommentChange} />
        <CommentBtnWrap>
          <CommentBtn onClick={onCommentSubmit}>확인</CommentBtn>
        </CommentBtnWrap>
      </CommentForm>
    </div>
  );
};

export default PostCommentInput;
