import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled from "styled-components";

const EditorWrapper = styled.div`
  margin-top: 40px;

  h2{
    text-align: left;
    margin-left: 15px;
    margin-bottom: 5px;
  }
`;


const Line = styled.hr`
  width: 95%;
  margin: 16px 15px;
  border: 1px solid #ddd;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  border: 1px solid #495057;
  border-radius: 3px;
  width: 79%;
  height: 40px;
  padding-left: 5px;
  margin-bottom: 1rem;
  justify-content: left;
  margin-left: 30px;
  display: flex;
`;

const Editor = () => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block", "link", "image"]
    ]
  };

  return (
    <EditorWrapper>
      <h2>프로젝트 소개</h2>
      <Line />
      <TitleInput placeholder="제목을 입력해주세요" />
      <ReactQuill
        style={{ height: "300px", marginLeft: "30px", width: "80%" }}
        modules={modules}
        placeholder="내용을 입력해주세요"
      ></ReactQuill>
    </EditorWrapper>
  );
};

export default Editor;
