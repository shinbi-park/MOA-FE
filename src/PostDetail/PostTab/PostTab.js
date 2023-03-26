import React, { useState } from "react";
import styled from "styled-components";
import Notice from "../Notice/Notice";
import PostInfo from "../PostInfo/PostInfo";

const Tabwrap = styled.div`
  height: 84px;
  border: 1px solid #000;
  border-left: none;
  border-right: none;
`;

const PostTab = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const tabArr = [
    {
      tabTitle: <div onClick={() => onClickTab(0)}>정보</div>,
      tabContent: (
        <div>
          <PostInfo />
        </div>
      ),
    },
    {
      tabTitle: <div onClick={() => onClickTab(1)}>회의시간 조사</div>,
      tabContent: <div>회의시간 조사 내용</div>,
    },
    {
      tabTitle: <div onClick={() => onClickTab(2)}>공지사항</div>,
      tabContent: (
        <div>
          <Notice />
        </div>
      ),
    },
    {
      tabTitle: <div onClick={() => onClickTab(3)}>관리자</div>,
      tabContent: <div>관리자내용</div>,
    },
  ];

  const onClickTab = (tabId) => {
    setActiveTabId(tabId);
  };
  return (
    <div>
      <Tabwrap>
        {tabArr.map((tab, index) => {
          return <div key={index}>{tab.tabTitle}</div>;
        })}
      </Tabwrap>
      <div>{tabArr[activeTabId].tabContent}</div>
    </div>
  );
};

export default PostTab;
