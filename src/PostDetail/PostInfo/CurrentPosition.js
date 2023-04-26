import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userInfo } from "../../Recoil/atoms";
const CurrentPartWrap = styled.div`
  padding-left: 3%;
  display: flex;
  align-items: center;
  height: 35px;
`;

const PartSection = styled.p`
  width: 130px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const PartSectionCount = styled.p`
  width: 37px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const PartApply = styled.button`
  width: 120px;
  height: 28px;

  margin-left: 25px;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: #66b933;
  cursor: pointer;
  &::after {
    content: "지원하기";
  }

  &.applying {
    cursor: no-drop;
    background-color: gray;
    &::after {
      content: "지원완료";
    }
  }

  &.applyDone {
    cursor: no-drop;
    background-color: #ff5e5e;
    &::after {
      content: "모집완료";
    }
  }
`;

const CurrentPosition = ({ item, index, userInfoArr, author, fetchApply }) => {
  const [applyToggle, setApplyToggle] = useState(false);
  const info = useRecoilValue(userInfo);
  const { postId } = useParams();

  const applyHandler = (recruitField) => {
    setApplyToggle(!applyToggle);
    fetchApply(recruitField, applyToggle);
  };

  return (
    <CurrentPartWrap key={index}>
      {author.userId === info.userId ? (
        <>
          <PartSection>{item.recruitField}</PartSection>
          <PartSectionCount>
            {item.currentCount}/{item.totalCount}
          </PartSectionCount>
          <PartApply
            className={item.currentCount === item.totalCount && "applyDone"}
            disabled={item.currentCount === item.totalCount && true}
          />
        </>
      ) : (
        <>
          {item.recruitField === userInfoArr?.field ? (
            <>
              {" "}
              <PartSection>{item.recruitField}</PartSection>
              <PartSectionCount>
                {item.currentCount}/{item.totalCount}
              </PartSectionCount>
              <PartApply
                className={
                  "applying" ||
                  (item.currentCount === item.totalCount && "applyDone")
                }
                disabled={true}
              />
            </>
          ) : (
            <>
              {" "}
              <PartSection>{item.recruitField}</PartSection>
              <PartSectionCount>
                {item.currentCount}/{item.totalCount}
              </PartSectionCount>
              <PartApply
                onClick={() => {
                  applyHandler(item.recruitField);
                }}
                className={
                  applyToggle
                    ? "applying"
                    : "" || item.currentCount === item.totalCount
                    ? "applyDone"
                    : ""
                }
                disabled={item.currentCount === item.totalCount && true}
              />
            </>
          )}
        </>
      )}
    </CurrentPartWrap>
  );
};

export default CurrentPosition;
