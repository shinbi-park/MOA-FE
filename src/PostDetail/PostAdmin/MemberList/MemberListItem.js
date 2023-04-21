import React, { useState } from "react";
import { TiStar } from "react-icons/ti";
import styled from "styled-components";
import ParticipantRate from "./ParticipantRate";

const RatingStar = styled(TiStar)`
  cursor: pointer;
  &.inactive_rating {
    color: gray;
  }
  &.active_rating {
    color: #f8a400;
  }
`;

const MemberListItemDiv = styled.div`
  border-bottom: 1px solid gray;
  width: 700px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin: 20px 0;
`;

const MemberKickOut = styled.button`
  border: none;
  width: 87px;
  border-radius: 10px;
  background-color: #ff4040;
  color: #fff;
  cursor: pointer;
`;

const MemberListItem = ({ name }) => {
  const starArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);

  const onClickRate = (array) => {
    setRating(array);
    sendRatingData(array);
  };

  const recruitmentId = 1;
  const applyId = 2;

  const sendRatingData = async (popularity) => {
    try {
      const response = await fetch(
        `http://13.125.111.131:8080/recruitment/${recruitmentId}/approved/${applyId}/popularity`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
          body: JSON.stringify({ popularity: popularity }),
        }
      );
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MemberListItemDiv>
        <div>{name}</div>
        <div>
          {starArray.map((array, index) => (
            <RatingStar
              size={20}
              key={index}
              className={array <= rating ? "active_rating" : "inactive_rating"}
              onClick={() => onClickRate(array)}
            />
          ))}
        </div>

        <div style={{ display: "flex" }}>
          현재 참여도 <ParticipantRate />
        </div>

        <MemberKickOut>강퇴하기</MemberKickOut>
      </MemberListItemDiv>
    </div>
  );
};

export default MemberListItem;
