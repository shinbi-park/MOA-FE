import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ProfileLink from "./MyPageComponent/ProfileLink"
import ProfileTag from "./MyPageComponent/ProfileTag"
import KakaoMap from "../component/KakaoMap";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
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
  const [userTags, setUserTags] = useState([]);
  const [userLinks, setUserLinks] = useState([]);
  useEffect(() => { //데이터 받아오기
    fetch("http://13.125.111.131:8080/user/info/profile", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh"),
      }
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setUserTags(data.interests);
      setUserLinks(data.link);
      setIntroduce(data.details);
      setLocation({lat: data.locationLatitude === 0 ? null : data.locationLatitude
        , lng: data.locationLongitude === 0 ? null : data.locationLongitude})
    })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, []);
  
    const handleUserLocation = (address) => {
      setLocation(address);
    }

    const handleContentChange = (value) => {
      setIntroduce(value);
    };

    const handleUserTags = (value) => {
      setUserTags(value);
    };

    const handleUserLinks = (value) => {
      setUserLinks(value);
    };

    const onSubmit = (e) => { //데이터보내기
      e.preventDefault();
      const userProfileData = {
        "locationLatitude" : location.lat,
        "locationLongitude" : location.lng,
        "details" : introduce,
        "interests" : userTags,
        "link" : userLinks,
      }
      console.log(userProfileData); //

      fetch("http://13.125.111.131:8080/user/info/profile", {
      method: "POST",
      body: JSON.stringify(userProfileData),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh"),
      },
    }).then((response) => {
      console.log(response);
    });
    }
    const modules = {
      toolbar: false,
    };
    return (
        <Wrapper>
          <Container>
            <h3>선호 지역</h3>
            <MapWrapper>
            <KakaoMap handleUserLocation={handleUserLocation} 
            data={location}/>
          </MapWrapper>

            <h3>링크</h3>
            <ProfileLink data={userLinks} handleUserLinks={handleUserLinks}/>

            <h3>관심 태그</h3>
            <ProfileTag data={userTags} handleUserTags={handleUserTags}/> 

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
            <SaveButton type="submit" backgroundColor={"black"} onClick={onSubmit}>저장하기</SaveButton>
            </SaveButtonContainer>
          </Container>
      </Wrapper>
  );
}

export default Profile; 
