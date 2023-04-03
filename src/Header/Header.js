import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Modal from "../LogIn/Modal";
import SignupForm from "../LogIn/SignupForm";
import SignInForm from "../LogIn/SignInForm";

const Nav = styled.nav`
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 40px;
`;

const Logo = styled.h1`
  margin: 0px;
  margin-left: 50px;
  font-size: 30px;
  color: #5d5fef;
  a {
    text-decoration: none;
    border-bottom: none;
    &.visited, &:visited {
      text-decoration: none;
      border-bottom: none;
      color: #5d5fef;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  margin-right: 10px;
  font-weight: 600;
  font-size: 17px;
`;

const NavItem = styled.li`
  cursor: pointer;
  margin-left: 10px;
  font-weight: 600px;
  &:first-child {
    margin-left: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover{
    border-bottom: 2px solid #5d5fef;
  }
`;

const Header = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [userLogIn, setUserLogIn] = useState('');

  return (
    <>
      <Nav>
        <Logo><Link to="/">MO:A</Link></Logo>
        <NavList>
          <NavItem><Link to="/post">새 글쓰기</Link></NavItem>
          <NavItem><Link to="/mypage">마이페이지</Link></NavItem>
          <NavItem><Link to="/signout">로그아웃</Link></NavItem>
          <NavItem onClick={() => setSignInModal(true)}>로그인</NavItem>
          <NavItem onClick={() => setSignUpModal(true)}>회원가입</NavItem>
          
        </NavList>
      </Nav>

      {signUpModal && (
        <Modal onClose={() => setSignUpModal(false)}>
          <SignupForm />
        </Modal>
      )}

      {signInModal && (
        <Modal onClose={() => setSignInModal(false)}>
          <SignInForm />
        </Modal>
      )}
    </>
  );
};

export default Header;
