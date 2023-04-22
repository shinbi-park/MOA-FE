import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MemberListItem from "./MemberListItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userActivity } from "../../../common/atoms";

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
  const { postId } = useParams();
  const [members, setMembers] = useRecoilState(userActivity);
  const fetchMember = async () => {
    await axios
      .get(
        `http://13.125.111.131:8080/recruitment/${postId}/approved/members`,
        {
          headers: {
            // 로그인 후 받아오는 인증토큰값
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
        }
      )
      .then((response) => {
        setMembers(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    fetchMember();
  }, []);
  const memberArr = members.filter((item) => item.recruitField !== "LEADER");

  return (
    <MemberListDiv>
      <h1>멤버 현황</h1>
      <MemeberDiv>
        <MemberWrap>
          {memberArr.map((item) => (
            <React.Fragment key={item.applyId}>
              {item.recruitField}
            </React.Fragment>
          ))}
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
