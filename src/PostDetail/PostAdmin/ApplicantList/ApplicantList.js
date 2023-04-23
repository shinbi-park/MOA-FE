import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ApplicantListItem from "./ApplicantListItem";
import { useParams } from "react-router-dom";
import axios from "axios";

const ApplicantListDiv = styled.div`
  margin-bottom: 70px;
`;

const ApplicantListBox = styled.div`
  margin-left: 30px;
`;

const ApplicantNull = styled.div`
  background-color: #e8e8e8;
  width: 1000px;
  padding: 30px 0;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

const ApplicantDiv = styled.div`
  background-color: #e8e8e8;
  width: 1000px;
  display: flex;
  padding: 30px 0;
  flex-wrap: wrap;
  gap: 50px 0;
`;

const AppliCantWrap = styled.div`
  margin: 0 auto;
  display: flex;
  border: 1px solid gray;
  border-radius: 5px;
  width: 800px;
`;
const ApplycantPosition = styled.h4`
  padding-left: 20px;
`;

const ApplycantItemDiv = styled.div`
  padding-bottom: 20px;
  margin-left: 100px;
`;

const ApplicantList = () => {
  const [toggle, setToggle] = useState(false);
  const { postId } = useParams();
  const [applyMember, setApplyMember] = useState([]);
  useEffect(() => {
    fetchApplicant();
  }, []);

  const fetchApplicant = async () => {
    const params = {
      statusCode: 1,
    };

    await axios
      .get(`http://13.125.111.131:8080/recruitment/${postId}/apply/members`, {
        headers: {
          // 로그인 후 받아오는 인증토큰값
          Authorization: window.localStorage.getItem("Authorization"),

          AuthorizationRefresh: window.localStorage.getItem(
            "AuthorizationRefresh"
          ),
        },
        params,
      })
      .then((response) => {
        console.log(response.data.value);
        setApplyMember(response.data.value);
      });
  };

  const fetchApproved = async (applyId) => {
    const params = {
      statusCode: 2,
    };
    if (window.confirm("지원요청을 수락하시겠습니까?")) {
      await axios.post(
        `http://13.125.111.131:8080/recruitment/${postId}/apply/${applyId}`,
        null,
        {
          headers: {
            // 로그인 후 받아오는 인증토큰값
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
          params,
        }
      );
      fetchApplicant();
    }
  };

  const fetchRefuse = async (applyId) => {
    const params = {
      statusCode: 3,
    };
    if (window.confirm("지원요청을 거부하시겠습니까?")) {
      await axios.post(
        `http://13.125.111.131:8080/recruitment/${postId}/apply/${applyId}`,
        null,
        {
          headers: {
            // 로그인 후 받아오는 인증토큰값
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
          params,
        }
      );
      fetchApplicant();
    }
  };

  return (
    <ApplicantListDiv>
      <h1>지원자 현황</h1>

      <ApplicantListBox>
        <ApplicantDiv>
          {applyMember.length >= 1 ? (
            <AppliCantWrap>
              <ApplycantPosition>
                {applyMember.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.recruitField}

                    <ApplycantItemDiv>
                      <ApplicantListItem
                        item={item}
                        fetchApproved={fetchApproved}
                        fetchRefuse={fetchRefuse}
                      />
                    </ApplycantItemDiv>
                  </React.Fragment>
                ))}
              </ApplycantPosition>
            </AppliCantWrap>
          ) : (
            <ApplicantNull>현재 지원자가 없습니다</ApplicantNull>
          )}
        </ApplicantDiv>
      </ApplicantListBox>
    </ApplicantListDiv>
  );
};

export default ApplicantList;
