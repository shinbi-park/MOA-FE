import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  h3 {
    margin: 0;
    margin-bottom: 1.5rem;
    font-size: 20px;
  }

  label {
    text-align: left;
    display: block;
  }
  span {
    color: red;
    margin-left: 1px;
  }
  div{
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  margin-right: 15px;
  align-items: left;
  display: block;
`;

const Input = styled.input`
  flex: 2;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  margin-bottom: 15px;
  padding: 10px;
  display: block;
  width: 90%;
  &:focus {
    color: #5d5fef;
  }
`;

const SubmitButton = styled.button`
  background-color: #5d5fef;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(password.length < 8) return;
    if (password !== checkpassword) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    }

    if(nickname.trim()=== '') { //닉네임이 빈칸이면 username으로
      setNickname(username);
    }

    const signUpData = {
      email: email,
      password: password,
      name: username,
      nickname: nickname,
    };

    fetch("/user/sign-up", {
      method: "POST",
      body: JSON.stringify(signUpData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (response !== 201) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <h3>회 원 가 입</h3>
        <div>
          <Label htmlFor="email">이메일 <span>*</span></Label>
          <Input
            placeholder="example@gmail.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="username">사용자 이름<span>*</span></Label>
          <Input
            placeholder="이름을 입력하세요!"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            placeholder="닉네임을 입력해주세요!"
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">비밀번호<span>*</span> </Label>
          <Input
            placeholder="비밀번호를 8자리 이상 입력하세요!"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">
            비밀번호 확인 <span>*</span>
            {error && <span>{error}</span>}{" "}
          </Label>
          <Input
            placeholder="비밀번호를 다시 한번 입력하세요!"
            type="password"
            id="checkpassword"
            value={checkpassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            required
          />
        </div>
        <SubmitButton type="submit">가입하기</SubmitButton>
      </Form>
    </div>
  );
};

export default SignupForm;
