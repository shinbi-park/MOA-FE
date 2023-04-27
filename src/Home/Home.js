import React from "react";
import styled from "styled-components";
import HomeTab from "./HomeTab/HomeTab";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <HomeTab />
    </Wrapper>
  );
};

export default Home;
