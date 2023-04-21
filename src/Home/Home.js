import React from "react";
import styled from "styled-components";
import HomeTab from "./HomeTab/HomeTab";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const IntroContainer = styled.div`
  display: flex;
  border: 3px solid #5d5fef;
  border-radius: 30px;
  width: 800px;
  height: 300px;
  color: #808080;
  font-size: 28px;
  font-weight: 600;
  box-sizing: border-box;
  padding: 40px 0 40px 20px;
  margin: 30px 0 50px 0;
  box-shadow: 1px 1px 5px 1px #c0c0c0;
`;

const Home = () => {
  return (
    <Wrapper>
      <IntroContainer>플랫폼 소개글</IntroContainer>
      <HomeTab />
    </Wrapper>
  );
};

export default Home;
