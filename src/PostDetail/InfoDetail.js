import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserPopularity from "../component/UserPopularity";
import TransAddress from "./TransAddress";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 30px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 600px;
  font-size: 16px;
  margin-bottom: 10px;
  box-shadow: 2px 1px 5px #bdbdbd;

  th,
  td {
    text-align: center;
    border: 1px solid #bbb9b9;
    font-weight: 500;
    height: 40px;
    line-height: 20px; 
  }

  td:nth-child(odd),
  th:nth-child(odd) {
    background-color: #e2e3ff;
  }

  td:first-child,
  th:first-child {
    width: 20%;
  }

  th:nth-child(2) {
    width: 30%;
  }

  th:nth-child(3) {
    width: 20%;
  }

  th:last-child {
    width: 30%;
  }
`;


const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: solid #bbb9b9;
  border-radius: 4px;
  width: 500px;
  min-height: 200px;
  margin-left: 20px;
  margin-bottom: 25px;
  padding-left: 20px;
  padding-top: 10px;
`;

const Container = styled.div`
  display: inline-block;
  flex-direction: row;
  border-bottom: 1px solid #bbb9b9;
  width: 450px;
  margin-left: 20px;
  margin-bottom: 25px;
  padding-left: 20px;
  padding-bottom: 5px;
  align-items: center;
  font-size: 17px;
  font-weight: 550;
  a {
    color: blue;
    text-decoration: none;
  }
  a:visited {
    color: gray;
  }
`;

const StarContaienr = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  h3 {
    margin-right: 10px;
    width: 150px;
  }
  span {
    width: 200px;
    margin-right: 5px;
    font-size: 17px;
    font-weight: 500;
  }
`;

const ButtonContaienr = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 8px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  font-weight: 600;
  color: #ffffff;
  font-size: 16px;
  margin-left: 10px;
  margin-top: 30px;
`;

const LinkList = React.memo(({ links }) => (
  <>
    {links.map((link) => (
      <LinkItem key={link} link={link} />
    ))}
  </>
));

const LinkItem = React.memo(({ link }) => (
  <Container>
    <a href={`http://${link}`} target="_blank" rel="noreferrer">
      {link}
    </a>
  </Container>
));

const InfoDetail = () => {
  /*
  useEffect( () => {
    fetch(`/user/info/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      console.log(response);
    });
  }, [])
*/
  const [userInfo, setUserInfo] = useState({
    email: "userId@email.com",
    name: "username",
    nickname: "nickname",
    locationLatitude: 34.545,
    locationLongitude: 126.9779451,
    popularity : {
      "rate" : 2.3,
      "count" : 3
  },
    details: "details",
    interests: ["백엔드", "자바"]
  });
  
  const [links, setLinks] = useState(["naver.com", "github.com"]);

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>지원자</th>
            <th>{userInfo.nickname}</th>
            <th>지원 포지션</th>
            <th>포지션</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>이메일</td>
            <td rowSpan="3" colSpan="3">
              {userInfo.email}
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </Table>

      <StarContaienr>
        <h3>지원자 별점</h3> <span>총 {userInfo.popularity.count}개의 평가 중</span>{" "}
        <UserPopularity rate={userInfo.popularity.rate} />
      </StarContaienr>

      <h3>지원자 상세 소개</h3>
      <IntroContainer>{userInfo.details}</IntroContainer>
      <h3>링크</h3>
      <LinkList links={links} />

      <h3>선호지역</h3>
      <Container>
        <TransAddress
          lat={userInfo.locationLatitude}
          lng={userInfo.locationLongitude}
        />
      </Container>
      <ButtonContaienr>
        <Button backgroundColor={"#63B730"}>수락하기</Button>
        <Button backgroundColor={"#FF5E5E"}>거절하기</Button>
      </ButtonContaienr>
    </Wrapper>
  );
};

export default InfoDetail;
