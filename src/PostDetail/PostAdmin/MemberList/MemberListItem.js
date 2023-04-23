import React, { useState } from "react";
import { TiStar } from "react-icons/ti";
import styled from "styled-components";
import ParticipantRate from "./ParticipantRate";
import axios from "axios";
import { useParams } from "react-router-dom";

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

const MemberListItem = ({ member, fetchMemberKick, sendRatingData }) => {
  const starArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(member.popularity);
  const { postId } = useParams();

  const onClickRate = (array, applyId) => {
    setRating(array);
    sendRatingData(array, applyId);
  };

  const applyId = 2;

  const memberKickHandler = (applyId) => {
    fetchMemberKick(applyId);
  };
  return (
    <div>
      <MemberListItemDiv>
        <div>{member.nickname}</div>
        <div>
          {starArray.map((array, index) => (
            <RatingStar
              size={20}
              key={index}
              className={array <= rating ? "active_rating" : "inactive_rating"}
              onClick={() => onClickRate(array, member.applyId)}
              value={rating}
            />
          ))}
        </div>

        <div style={{ display: "flex" }}>
          현재 참여도 <ParticipantRate member={member} />
        </div>

        <MemberKickOut onClick={() => memberKickHandler(member.applyId)}>
          강퇴하기
        </MemberKickOut>
      </MemberListItemDiv>
    </div>
  );
};

export default MemberListItem;
