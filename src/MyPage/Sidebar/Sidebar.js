import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import profile from "../../component/profileImg.png";

const Side = styled.div`
  display: flex;
  border-right: 1.5px solid #e0e0e0;
  box-shadow: 2.5px 0 5px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 220px;
  height: 110vh;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 16px;
  font-weight: 650;
  font-size: 19px;
  h3 {
    display: flex;
    margin: 0px;
  }
`;
const Profile = styled.img`
  width: 50%;
  height: auto;
  border-radius: 100%;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 200px;
  flex-direction: column;
  .active {
    color: black;
    text-decoration: underline;
  }
  p{
    margin-bottom: 18px;
    margin-top: 18px;
  }
`;

const activeStyle = {
  color: "#5d5fef",
  textDecoration: "underline"
};
const deactiveStyle = {
  color: "#292929",
  textDecoration: "none"
};

function Sidebar() {
  const menus = [
    { name: "프로필", path: "/mypage/profile" },
    { name: "내 활동", path: "/mypage/activity" },
    { name: "작성한 글", path: "/mypage/mylist" },
    { name: "관심글", path: "/mypage/likedlist" },
    { name: "정보설정", path: "/mypage/setting" },
    { name: "회원탈퇴", path: "/withdraw" }
  ];
  return (
    <Side>
      <Profile src={profile} alt="프로필 사진"></Profile>
      <h3>username</h3>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
              to={menu.path}
              key={index}
            >
              <p>{menu.name}</p>
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;
