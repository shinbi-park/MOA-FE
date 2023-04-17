import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../component/profileImg.png";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Main = styled.div`
  display: "flex";
  flex: 2;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 680px;
  border: 0.5px solid #a2a2a2;
  padding: 20px;
  border-radius: 20px;
  padding-top: 15px;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 100px;
  box-shadow: 1px 1px 5px 1px #c0c0c0;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  text-decoration: underline;
  margin-left: 10px;
`;

const ProfileImgContainer = styled.div`
  display: flex;
  position: relative;
`;

const EditIcon = styled.label`
  position: absolute;
  right: 0px;
  bottom: 10px;
  z-index: 1;
  cursor: pointer;
`;

const Avatar = styled.img`
  margin-top: 15px;
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  align-items: left;
  font-weight: bold;
  flex-direction: column;
  display: flex;
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const inputStyle = `
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  width: 400px;
  border: 1px solid #A2A2A2;
`;

const PwdInput = styled.input`
  ${inputStyle}
  margin-bottom: 5px;
  margin-top: 5px;
`;

const Input = styled.input`
  ${inputStyle}
  margin-bottom: 16px;
`;

const EmailInput = styled.input`
  align-items: center;
  padding: 8px;
  font-size: 16px;
  width: 400px;
  border: none;
  background-color: #d1d1d1;
  margin-bottom: 5px;
  pointer-events: none;
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
  margin-top: 30px;
  &:hover {
    cursor: pointer;
  }
`;

function UserEdit() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    nickname: "",
    password: "",
  });
  const [file, setFile] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newPwdConfirm, setPwdConfirm] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");

  // const handleUsernameChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     [name]: value,
  //   }));
  // };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNicknameChange = (event) => {
    setNicknameInput(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handlePwdChange = (event) => {
    const { nickname, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [nickname]: value,
    }));
  };

  const handleNewPwdChange = (event) => {
    const { nickname, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [nickname]: value,
    }));
  };

  const handleNewPwdConfirmChange = (event) => {
    const { nickname, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [nickname]: value,
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();

    reader.onloadend = () => {
      const profileImgDataUrl = reader.result;
      setProfileImg(profileImgDataUrl);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    if (nicknameInput.trim() !== "" && nicknameInput !== user.nickname)
      setUser({ ...user, nickname: nicknameInput });

    //새 비밀번호와 비밀번호 확인이 다르면 리턴
    if (newPwd !== newPwdConfirm) {
      setError("새 비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }

    //새로운이름이 빈칸이면 비밀번호만 변경
    if (newUsername.trim() !== "") {
      //유저 네임 변경시
    }

    if (newPwd.trim() !== "" && currentPwd.trim() === "") {
      //현재 비밀번호를 입력하지 않고 새 비밀번호 입력시
      setError("현재 비밀번호를 입력해주세요!");
    } else if (newPwd.trim() !== "" && currentPwd.trim() !== "") {
      //현재 비밀번호가 맞는지 확인
      //서버로 바뀐 정보 전송
    }
    /*
    try {
      const response = await updateUser(user);
      console.log(response);
      alert("유저 정보가 수정되었습니다.");
    } catch (error) {
      console.error(error);
      alert("유저 정보 수정에 실패하였습니다.");
    }
    */
  };

  const fetchInfo = async () => {
    const response = await axios
      .get("http://13.125.111.131:8080/user/info/profile", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo4LCJleHAiOjE2ODEyNzcwOTF9.qNFbSaIv_fUcJ4BV-gPIRY_t5u84zbEFahx4FdgSukw7qnvV-OdnVifFdxBg0Zk5cs1I0VfO1YBTjaJJUwSmbA",
          AuthorizationRefresh:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyNzcxOTF9.fhkN47qnZY-Xqgik3RRWH_BXYjy1y95nYBzFwp77Wz1m81ZA_9PbJmb6sTWMciNXkOTenWEg100694CEDApEww",
        },
      })
      .then((response) => {
        setUser({
          email: response.data.email,
          name: response.data.name,
          nickname: response.data.nickname,
          password: "12345678",
        });
        setNicknameInput(user.nickname);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Center>
      <Sidebar />
      <Main>
        <Wrapper>
          <ProfileImgContainer>
            <Avatar src={profileImg || profile} alt="프로필 사진" />
            <EditIcon htmlFor="profile-image-upload">
              <AiOutlineEdit />
              <input
                type="file"
                id="profile-image-upload"
                onChange={handleFileChange}
                accept="image/*" // 이미지 파일만 선택 가능하도록 설정
                style={{ display: "none" }} // 실제로 보이지 않도록 숨김 처리
              />
            </EditIcon>
          </ProfileImgContainer>
          <Profile>
            {isEditing ? (
              <Input
                type="text"
                value={usernameInput}
                onChange={handleUsernameChange}
              />
            ) : (
              <h3 onClick={handleEditClick}>
                <Input value={usernameInput} />{" "}
                <AiOutlineEdit onClick={handleEditClick} />
              </h3>
            )}
          </Profile>

          <InputContainer>
            <h4>E-mail</h4>
            <EmailInput
              type="email"
              name="email"
              placeholder="이메일"
              value={user.email}
            />
          </InputContainer>

          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <h4>닉네임 변경</h4>
              <Input
                type="text"
                name="name"
                placeholder="닉네임 변경하기"
                value={nicknameInput}
                onChange={handleNicknameChange}
              />
            </InputContainer>

            <InputContainer>
              <h4>비밀번호 변경</h4>
              <Input
                type="password"
                name="Currentpassword"
                placeholder="현재 비밀번호"
                onChange={handlePwdChange}
              />
              <PwdInput
                type="password"
                name="Newpassword"
                placeholder="새 비밀번호"
                onChange={handleNewPwdChange}
              />
              <PwdInput
                type="password"
                name="NewpasswordConfirm"
                placeholder="새 비밀번호 확인"
                onChange={handleNewPwdConfirmChange}
              />
            </InputContainer>
            <SaveButton type="submit" backgroundColor={"black"}>
              저장하기
            </SaveButton>
          </Form>
        </Wrapper>
      </Main>
    </Center>
  );
}

export default UserEdit;
