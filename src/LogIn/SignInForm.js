import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 10px;
  z-index: 20;
  h3 {
    margin: 0;
    margin-bottom: 1.5rem;
    font-size: 20px;
  }

  label {
    text-align: left;
    display: block;
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
  margin-bottom: 30px;
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

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const logInData = {
      email: email,
      password: password
    };

    fetch("/user/login", {
      method: "POST",
      body: JSON.stringify(logInData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
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
        <h3>로 그 인</h3>
        <div>
          <Label htmlFor="email">이메일</Label>
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
          <Label htmlFor="password">비밀번호</Label>
          <Input
            placeholder="비밀번호를 입력하세요!"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <SubmitButton type="submit">로그인하기</SubmitButton>
      </Form>
    </div>
  );
};

export default SignInForm;
