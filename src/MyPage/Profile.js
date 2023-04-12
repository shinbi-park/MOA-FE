import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "./Sidebar/Sidebar";
import ProfileLink from "./Component/ProfileLink"
import ProfileTag from "./Component/ProfileTag"

import KakaoMap from "../component/KakaoMap";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const SidebarContainer = styled.div`
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex: 2;
  margin-top: 23px;
  align-items: left;
  flex-direction: column;
  h3{
    margin-bottom: 20px;
    font-size: 22px;
  }  
`;

const EditorWrapper = styled.div`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #707070;
  width: 570px;
  padding-top: 0;
  min-height: 300px;
  font-size: 30px;
  box-shadow: 2px 1px 5px #BDBDBD;
  .ql-container {
    border: none !important;
  }
`;

const SaveButton = styled.button`
  width: 100px;
  padding: 8px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 40px;
  &:hover{
      cursor: pointer;
    }
`;

const SaveButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 580px;
  margin-top: 30px;
`;

const MapWrapper = styled.div`
display: flex;
margin-bottom: 20px;
`;

const Profile = () => {
    const [introduce, setIntroduce] = useState("");
    const [location, setLocation] = useState(null);

    const handleUserLocation = (address) => {
      setLocation(address);
      console.log(address);// ex. {lat: 37.4, lng: 126.6783068702164}
    }

    const handleContentChange = (value) => {
      setIntroduce(value);
    };
    const modules = {
      toolbar: false,
    };

    return (
        <Wrapper>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>

          <Container>
            <h3>선호 지역</h3>
            <MapWrapper>
            <KakaoMap handleUserLocation={handleUserLocation}/>
          </MapWrapper>

            <h3>링크</h3>
            <ProfileLink />

            <h3>관심 태그</h3>
            <ProfileTag /> 

            <h3>상세 소개</h3>
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
