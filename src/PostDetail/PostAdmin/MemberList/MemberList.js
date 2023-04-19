import React, { useEffect } from "react";
import styled from "styled-components";
import MemberListItem from "./MemberListItem";
import axios from "axios";
import { useParams } from "react-router-dom";

const MemberListDiv = styled.div`
  margin-bottom: 70px;
`;

const MemeberDiv = styled.div`
  background-color: #e8e8e8;
  width: 1000px;
  margin-left: 30px;
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 0;
`;

const MemberWrap = styled.div`
  margin: 0 auto;
  width: 800px;
`;

const MemberItemDiv = styled.div`
  margin-left: 50px;
`;

const MemberList = () => {
  // const { postId } = useParams();
  // const fetchMember = async () => {
  //   await axios
  //     .get(
  //       `http://13.125.111.131:8080/recruitment/${postId}/approved/members`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",

  //           AuthorizationRefresh:
  //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

  // useEffect(() => {
  //   fetchMember();
  // });

  return (
    <MemberListDiv>
      <h1>멤버 현황</h1>
      <MemeberDiv>
        <MemberWrap>
          <h4>Position 1</h4>
          <MemberItemDiv>
            <MemberListItem name={"member1"} />
            <MemberListItem name={"member2"} />
          </MemberItemDiv>
        </MemberWrap>
        <MemberWrap>
          <h4>Position 2</h4>
          <MemberItemDiv>
            <MemberListItem name={"member1"} />
          </MemberItemDiv>
        </MemberWrap>
      </MemeberDiv>
    </MemberListDiv>
  );
};

export default MemberList;
