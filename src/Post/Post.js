import React, { useState, useCallback } from "react";
import styled from "styled-components";
import BasicInfo from "./BasicInfo/BasicInfo";
import Editor from "./Editor/Editor";
import WriteActionButton from "./WriteButton";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Post = ({ isEdit, data }) => {
  const [categories, setCategories] = useState("programming");
  const [memberFields, setMemberFields] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [postData, setPostData] = useState({});

  const handleCategoriesChange = (event) => {
    setCategories(event.target.value);
  };

  const handleFieldsChange = useCallback((updatedFields) => {
    setMemberFields(updatedFields);
  }, []);

  const handleTagsChange = (tagslist) => {
    setTags(tagslist);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event);
  };

  console.log("memberFields", memberFields);

  const handleSubmit = (event) => {
    event.preventDefault();

    setPostData({
      title: title,
      content: content,
      memberFields: memberFields,
      categories: categories,
      tags: tags,
    });

    //������ ����
    fetch("http://13.125.111.131:8080/recruitment", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh"),
      },
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <BasicInfo
          handleCategoriesChange={handleCategoriesChange}
          handleFieldsChange={handleFieldsChange}
          handleTagsChange={handleTagsChange}
          isEdit={isEdit}
          data={data}
        />

        <Editor
          handleTitleChange={handleTitleChange}
          handleContentChange={handleContentChange}
          isEdit={isEdit}
          data={data}
        />
        <WriteActionButton />
      </form>
    </Wrapper>
  );
};

export default Post;
