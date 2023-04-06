import React, {useState} from "react";
import styled from "styled-components";
import UserPopularity from "../component/UserPopularity";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 30px;
  
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 600px;
  height: 40px;
  font-weight: 550;
  margin-bottom: 10px;
  box-shadow: 2px 1px 5px #BDBDBD;
  
  td {
    text-align: center;
    border: 1px solid #bbb9b9;
  }
  td:nth-child(odd) {
    background-color: #e2e3ff;
  }
  td:first-child {
    width: 20%;
  }
  td:nth-child(2) {
    width: 30%;
  }
  td:nth-child(3) {
    width: 20%;
  }
  td:last-child {
    width: 30%;
  }
`;

const IntroContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: solid #BBB9B9;
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
    border-bottom: 1px solid #BBB9B9;
    width: 450px;
    margin-left: 20px;
    margin-bottom: 25px;
    padding-left: 20px;
    padding-bottom: 5px;
    align-items: center;
    font-size: 17px;
    font-weight: 550;
    a{
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
    h3{
      margin-right: 10px;
      width: 120px;
    }
    span{
      width: 140px;
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
        <LinkItem key={link} link={link}  />
      ))}
    </>
));

const LinkItem = React.memo(({ link }) => (
    <Container>
      <a href={`http://${link}`} target="_blank" rel="noreferrer">{link}</a>
    </Container>
  ));

const InfoDetail = () => {

    const [applicant, setApplicant] = useState('user1');
    const [popularityCnt, setPopularityCnt] = useState(5); //평가 받은 프로젝트 수
    const [applyPosition, setApplyPosition] = useState('프론트엔드');
    const [introDetail, setIntroDetail] = useState('지원자 상세 소개');
    const [links, setLinks] = useState(["naver.com", "github.com"]);
    const [location, setLocation] = useState('지하철역');

    return(
        <Wrapper>
            <Table>
                <tbody>
                    <tr>
                    <td>지원자</td>
                    <td>{applicant}</td>
                    <td>지원 포지션</td>
                    <td>{applyPosition}</td>
                    </tr>
                </tbody>
            </Table>
            <StarContaienr>
            <h3>지원자 별점</h3> <span>총 {popularityCnt}개의 평가 중</span> <UserPopularity />
            </StarContaienr>

            <h3>지원자 상세 소개</h3>
            <IntroContainer>{introDetail}</IntroContainer>
            <h3>링크</h3>
            <LinkList links={links} />
                
            <h3>선호지역</h3>
            <Container>{location}</Container>
            <ButtonContaienr>
                <Button backgroundColor={"#63B730"}>수락하기</Button>
                <Button backgroundColor={"#FF5E5E"}>거절하기</Button>
            </ButtonContaienr>
        </Wrapper>
    )
}

export default InfoDetail;