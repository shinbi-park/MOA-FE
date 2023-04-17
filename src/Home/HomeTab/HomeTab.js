import styled from "styled-components";
import React, { useState, useEffect, lazy, Suspense } from "react";

const HomeTabComponent = lazy(() => import("./HomeTabComponent"));

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const TabContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 50px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: 1px solid #b2b2b2;
`;

const TabList = styled.div`
  width: 137px;
  height: 53px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b2b2b2;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  &.active {
    color: black;
    border-bottom: 3px solid #5d5fef;
    z-index: 1;
  }
  & + & {
    margin-left: 10px;
  }
`;

const PostContainer = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
`;

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onClickTab = (tabId) => {
    setActiveTab(tabId);
  };
  const tabList = [
    {
      Title: <div onClick={() => onClickTab(0)}>새로운 글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent type="new" />
        </Suspense>
      )
    },
    {
      Title: <div onClick={() => onClickTab(1)}>모집 중인 글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent type="recruiting" />
        </Suspense>
      )
    },
    {
      Title: <div onClick={() => onClickTab(2)}>추천 글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent type="recommend" />
        </Suspense>
      )
    },
    {
      Title: <div onClick={() => onClickTab(3)}>인기글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent type="popular" />
        </Suspense>
      )
    }
  ];

  return (
    <Wrapper>
      <TabContainer>
        {tabList.map((tab, index) => {
          return (
            <TabList
              className={activeTab === index ? "active" : ""}
              key={index}
            >
              {tab.Title}
            </TabList>
          );
        })}
      </TabContainer>
      <PostContainer>{tabList[activeTab].Content}</PostContainer>
    </Wrapper>
  );
};

export default HomeTab;
