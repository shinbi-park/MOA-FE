import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "./Sidebar/Sidebar";
import ProfileLink from "./Component/ProfileLink"
import ProfileTag from "./Component/ProfileTag"

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const EditorWrapper = styled.div`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #A2A2A2;
  width: 570px;
  padding-top: 0;
  min-height: 300px;
  font-size: 30px;
  .ql-container {
    border: none !important;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 2;
  margin-top: 50px;
  margin-left: 65px;
  align-items: left;
  flex-direction: column;
  
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  margin-right: 15px;
  align-items: left;
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  align-items: center;
  margin-bottom: 30px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #A2A2A2;
  font-size: 16px;
  width: 500px;
  height: 20px;
`;

const SaveButton = styled.button`
  width: 100px;
  padding: 8px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 40px;
`;

const SaveButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 580px;
  margin-top: 30px;
`;


const Profile = () => {
    const [introduce, setIntroduce] = useState("");
    const handleContentChange = (value) => {
      setIntroduce(value);
    };
    const modules = {
      toolbar: false,
    };
    return (
        <Wrapper>
        <Sidebar />
      <Container>
        <Label>선호 지역</Label>
        <Input placeholder="지하철역을 입력해주세요!" />

        <Label>링크</Label>
        <ProfileLink />

        <ProfileTag /> 

        <Label>상세 소개</Label>
        <EditorWrapper>
        <ReactQuill
          value={introduce}
          onChange={handleContentChange}
          modules={modules}
          theme="snow"
        />
      </EditorWrapper>

        <SaveButtonContainer>
        <SaveButton type="submit" backgroundColor={"black"} >저장하기</SaveButton>
        </SaveButtonContainer>
      </Container>
      </Wrapper>
  );
}

export default Profile; 
