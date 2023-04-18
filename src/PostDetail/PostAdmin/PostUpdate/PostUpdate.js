import React from "react";
import PostStateUpdate from "./PostStateUpdate";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";

const EditTitle = styled.h1`
  margin-top: 50px;
`;

const EditLinkDiv = styled.div`
  margin-left: 30px;
  margin-bottom: 70px;
`;

const EditLink = styled(Link)`
  text-decoration: underline;
  color: red;
  font-size: 22px;
  font-weight: 600;
`;

const PostUpdate = () => {
  const { postId } = useParams();
  return (
    <div>
      <h1>모집글 관리</h1>
      <EditTitle>글 수정하기</EditTitle>
      <EditLinkDiv>
        <EditLink to={`/edit/${postId}`}>
          <FaRegEdit />
          수정 페이지로
        </EditLink>
      </EditLinkDiv>
      <div>
        <PostStateUpdate />
      </div>
    </div>
  );
};

export default PostUpdate;
