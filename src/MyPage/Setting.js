import React, { useState } from "react";
import styled from "styled-components";
import profile from "./Sidebar/profileImg.png";
import Sidebar from "./Sidebar/Sidebar";

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
  height: 100%;
  border: solid black;
  border-radius: 20px;
  padding-top: 20px;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 600px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 32px;
  text-decoration: underline;
`;

const Avatar = styled.img`
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

const PwdContainer = styled.div`
  align-items: left;
  font-weight: bold;
  flex-direction: column;
  display: flex;
  margin-bottom: 20px;
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const PwdInput = styled.input`
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  width: 400px;
`;


const Input = styled.input`
  align-items: center;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  width: 400px;
`;

const Button = styled.button`
  width: 100px;
  padding: 8px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  font-size: 16px;
  margin-left: 10px;
`;

function UserEdit() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: ""
  });

  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newPwdConfirm, setPwdConfirm] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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

  return (
      <Center>
          <Sidebar />
      <Main> 
    <Wrapper>
      <Profile>
        <Avatar src={profile} alt="프로필 사진" />
        <h3>username</h3>
      </Profile>

      <InputContainer>
        <h4>E-mail</h4>
        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={user.email}
          onChange={handleChange}
        />
      </InputContainer>
      
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <h4>닉네임 변경</h4>
          <Input
            type="text"
            name="name"
            placeholder="닉네임 변경하기"
            value={user.name}
            onChange={handleChange}
          />
        </InputContainer>

        <PwdContainer>
          <h4>비밀번호 변경</h4>
          <Input
            type="password"
            name="password"
            placeholder="현재 비밀번호"
            value={user.password}
            onChange={handleChange}
          />
          <PwdInput
            type="password"
            name="password"
            placeholder="새 비밀번호"
            value={user.password}
            onChange={handleChange}
          />
          <PwdInput
            type="password"
            name="password"
            placeholder="새 비밀번호 확인"
            value={user.password}
            onChange={handleChange}
          />
        </PwdContainer>
          <Button type="submit" backgroundColor={"black"}>
            업데이트
          </Button>
      </Form>
    </Wrapper>
    </Main>
    </Center>
  );
}

export default UserEdit;

