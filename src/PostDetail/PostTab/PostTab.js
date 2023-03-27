import React, { useState } from "react";
import styled from "styled-components";
import Notice from "../Notice/Notice";
import PostInfo from "../PostInfo/PostInfo";

const Tabwrap = styled.div`
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const TabList = styled.div`
  width: 25%;
  line-height: 50px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  border-right: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  color: #000;

  &:last-child {
    border-right: none;
  }

  &.active_tab {
    border-bottom: none;
    background-color: #5d5fef;
    color: #fff;
  }
`;

const PostTabContent = styled.div`
  padding: 0 5%;
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
          return (
            <TabList
              key={index}
              className={activeTabId === index && "active_tab"}
            >
              {tab.tabTitle}
            </TabList>
          );
        })}
      </Tabwrap>
      <PostTabContent>{tabArr[activeTabId].tabContent}</PostTabContent>
    </div>
  );
};

export default PostTab;
