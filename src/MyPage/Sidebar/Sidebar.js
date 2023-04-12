import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import profile from "../../component/profileImg.png";
import UserPopularity from "../../component/UserPopularity";

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
  a, a:visited {
    text-decoration: none;
    color: #292929;
  }
  h3 {
    display: flex;
    margin: 0px;
    font-size: 20px;
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
  color: #292929;
  .active {
    color: #5d5fef !important;
    text-decoration: underline;
  }
  p{
    margin-bottom: 18px;
    margin-top: 18px;
    cursor: pointer;
  }
`;

const PopularityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Sidebar() {
  const menus = [
    { name: "프로필", path: "/mypage/profile" },
    { name: "내 활동", path: "/mypage/activity" },
    { name: "작성한 글", path: "/mypage/mylist" },
    { name: "관심글", path: "/mypage/likedlist" },
    { name: "정보설정", path: "/mypage/setting" },
  ];

  const onClickWithdraw = () => {
    const result = window.confirm("정말 탈퇴하시겠습니까?");
    if (result) {
      fetch(`http://13.125.111.131:8080/user/withdraw`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo4LCJleHAiOjE2ODEyNzcwOTF9.qNFbSaIv_fUcJ4BV-gPIRY_t5u84zbEFahx4FdgSukw7qnvV-OdnVifFdxBg0Zk5cs1I0VfO1YBTjaJJUwSmbA",
          AuthorizationRefresh:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyNzcxOTF9.fhkN47qnZY-Xqgik3RRWH_BXYjy1y95nYBzFwp77Wz1m81ZA_9PbJmb6sTWMciNXkOTenWEg100694CEDApEww",
        },
      })
        .then((response) =>
          response === 200
            ? alert("회원 탈퇴가 되었습니다!")
            : alert("회원 탈퇴에 실패하였습니다")
        );
    }
  };
  return (
    <Side>
      <Profile src={profile} alt="프로필 사진"></Profile>
      <PopularityContainer>
        <UserPopularity />
      </PopularityContainer>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              to={menu.path}
              key={index}
            >
              <p>{menu.name}</p>
            </NavLink>
          );
        })}
        <div onClick={onClickWithdraw}>
          <p>회원탈퇴</p>
        </div>
      </Menu>
    </Side>
  );
}

export default Sidebar;
