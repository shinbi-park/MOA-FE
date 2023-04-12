import styled from "styled-components";
import React, {useState, useEffect} from "react";
import HomeTab from "./HomeTab/HomeTab";
import { BiSearch } from "react-icons/bi"

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

const SearchContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: center;
  svg{
    height: 50px;
    width: 30px;
    margin-left: 10px;
    fill: #5d5fef;
  }

`;

const SearchBox = styled.input`
  border-radius: 20px;
  border: 1.5px solid #B2B2B2;
  font-size: 20px;
  width: 600px;
  height: 30px;
  padding: 10px 0 10px 30px;
  justify-items: center;
  align-items: center;
`;


const Home = () => {
  const [keyword, setKeyword] = useState('');
  const onHandleChange = (event) => {
    setKeyword(event.target.value);
  }

  const onSearch = () => {}

  return (<Wrapper>
      <IntroContainer>
          플랫폼 소개글
        </IntroContainer>
      <SearchContainer>
        <SearchBox value={keyword} onChange={onHandleChange}/> <BiSearch/>
      </SearchContainer>
      <HomeTab/>
    </Wrapper>)
}

export default Home;