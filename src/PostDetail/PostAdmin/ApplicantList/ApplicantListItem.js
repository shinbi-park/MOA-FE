import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import InfoDetail from "../../UserInfo/InfoDetail";
import { useState } from "react";
import axios from "axios";

const ApplicantItemDiv = styled.div`
  display: flex;
  width: 550px;
  padding-bottom: 10px;
  margin: 20px 0;
  border-bottom: 1px solid gray;
  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
`;

const ApplicantBtnDiv = styled.div`
  margin-left: 300px;
`;

const ApplicantBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
`;

const ApplicantListItem = ({ item }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const handlecloseInfo = () => {
    setOpenInfo(false);
  };
  const { postId } = useParams();

  const fetchApproved = async (e) => {
    const params = {
      statusCode: 2,
    };
    e.preventDefault();
    await axios.post(
      `http://13.125.111.131:8080/recruitment/${postId}/apply/${item.applyId}`,
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
  };

  const fetchRefuse = async (e) => {
    const params = {
      statusCode: 3,
    };
    e.preventDefault();
    await axios
      .post(
        `http://13.125.111.131:8080/recruitment/${postId}/apply/${item.applyId}`,
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
      )
      .then((response) => console.log(response));
  };

  return (
    <>
      <ApplicantItemDiv>
        <div>{item.nickname}</div>
        <ApplicantBtnDiv>
          <ApplicantBtn onClick={() => setOpenInfo(!openInfo)}>
            정보보기
          </ApplicantBtn>

          <ApplicantBtn onClick={fetchApproved}>수락</ApplicantBtn>
          <ApplicantBtn onClick={fetchRefuse}>거부</ApplicantBtn>
        </ApplicantBtnDiv>
      </ApplicantItemDiv>
      {openInfo && <InfoDetail handlecloseInfo={handlecloseInfo} item={item} />}
    </>
  );
};

export default ApplicantListItem;
