import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Modal from "../LogIn/Modal";
import SignupForm from "../LogIn/SignupForm";
import SignInForm from "../LogIn/SignInForm";

const Nav = styled.nav`
  background-color: #5d5fef;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 35px;
`;

const Logo = styled.h1`
  margin: 0px;
  margin-left: 25px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  margin-right: 10px;
  font-weight: 600;
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
`;

const Header = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [userLogIn, setUserLogIn] = useState('');

  return (
    <header>
      <Nav>
        <Logo>MO:A</Logo>
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
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
    </header>
  );
};

export default Header;
