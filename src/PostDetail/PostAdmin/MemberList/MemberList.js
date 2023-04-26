import React, { useEffect } from "react";
import styled from "styled-components";
import MemberListItem from "./MemberListItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userActivity } from "../../../Recoil/atoms";

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

  const fetchMemberKick = async (applyId) => {
    const params = {
      statusCode: 4,
    };
    await axios.post(
      `http://13.125.111.131:8080/recruitment/${postId}/apply/${applyId}`,
      null,
      {
        headers: {
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
        params,
      }
    );
    fetchMember();
  };

  useEffect(() => {
    fetchMember();
  }, []);
  const memberArr = members.filter((item) => item.recruitField !== "LEADER");
  const FieldArr = memberArr.reduce((newArr, current) => {
    if (!newArr.some((item) => item.recruitField === current.recruitField)) {
      newArr.push(current);
    }
    return newArr;
  }, []);

  return (
    <MemberListDiv>
      <h1>멤버 현황</h1>
      {memberArr.length === 0 ? (
        <MemeberDiv>
          {" "}
          <div>현재 멤버가 없습니다</div>
        </MemeberDiv>
      ) : (
        <MemeberDiv>
          <MemberWrap>
            {FieldArr.map((item, index) => (
              <React.Fragment key={index}>
                <h4>{item.recruitField}</h4>
                <MemberItemDiv>
                  {memberArr.map(
                    (member) =>
                      item.recruitField === member.recruitField && (
                        <React.Fragment key={member.applyId}>
                          <MemberListItem
                            member={member}
                            fetchMemberKick={fetchMemberKick}
                          />
                        </React.Fragment>
                      )
                  )}
                </MemberItemDiv>
              </React.Fragment>
            ))}
          </MemberWrap>
        </MemeberDiv>
      )}
    </MemberListDiv>
  );
};

export default MemberList;
