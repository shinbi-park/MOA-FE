import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled from "styled-components";
import React, { useState } from "react";
import { useEffect } from "react";

const EditorWrapper = styled.div`
  margin-top: 40px;
  h2 {
    text-align: left;
    margin-left: 15px;
    margin-bottom: 5px;
  }
`;

const Line = styled.hr`
  width: 750px;
  margin: 10px 15px 30px;
  border: 1px solid #5d5fef;
  box-shadow: 2px 1px 2px #bdbdbd;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  border: 1px solid #495057;
  border-radius: 3px;
  width: 700px;
  height: 40px;
  padding-left: 5px;
  margin-bottom: 1rem;
  justify-content: left;
  margin-left: 30px;
  display: flex;
`;

const Editor = ({
  handleTitleChange,
  handleContentChange,
  isEdit,
  Editdata,
}) => {
  const [curTitle, setCurTitle] = useState("");
  const [curContent, setCurContent] = useState("");
  useEffect(() => {
    if (isEdit) {
      setCurTitle(Editdata.title);
      setCurContent(Editdata.content);
    }
  }, [isEdit, Editdata]);

  const curTitleHandle = (e) => {
    setCurTitle(e.target.value);
    handleTitleChange(e.target.value);
  };

  const curContentHandle = (e) => {
    setCurContent(e);
    handleContentChange(e);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block", "link", "image"],
    ],
  };

  return (
    <EditorWrapper>
      <h2>프로젝트 소개</h2>
      <Line />
      {!isEdit ? (
        <>
          <TitleInput
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요"
            required
          />
          <ReactQuill
            style={{ height: "300px", width: "710px", marginLeft: "30px" }}
            onChange={handleContentChange}
            modules={modules}
            placeholder="내용을 입력해주세요"
          ></ReactQuill>
        </>
      ) : (
        <>
          <TitleInput value={curTitle} onChange={curTitleHandle} required />
          <ReactQuill
            style={{ height: "300px", width: "710px", marginLeft: "30px" }}
            onChange={curContentHandle}
            modules={modules}
            value={curContent}
            placeholder="내용을 입력해주세요"
          ></ReactQuill>
        </>
      )}
    </EditorWrapper>
  );
};

export default Editor;
