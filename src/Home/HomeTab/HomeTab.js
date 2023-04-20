import styled from "styled-components";
import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

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
  width: 130%;
  align-content: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: center;
  svg {
    height: 50px;
    width: 30px;
    margin-left: 10px;
    fill: #5d5fef;
  }
`;

const SearchBox = styled.input`
  border-radius: 20px;
  border: 1.5px solid #b2b2b2;
  font-size: 20px;
  width: 600px;
  height: 30px;
  padding: 10px 0 10px 30px;
  justify-items: center;
  align-items: center;
`;

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [placeholderComment, setPlaceholderComment] = useState("검색어를 입력하세요");
  const [cachedResults, setCachedResults] = useState({}); //검색 결과 캐싱

  const onClickTab = useCallback((tabId) => {
    setActiveTab(tabId);
    setPlaceholderComment("검색어를 입력하세요");
  }, []);

  const onHandleChange = useCallback((event) => {
    setKeyword(event.target.value);
  }, []);

  const searchByTitle = useCallback(() => {
    setPlaceholderComment(keyword + " 키워드 검색 결과");

    if (cachedResults[keyword]) {
      setSearchData(cachedResults[keyword]);
    } else {
      axios
        .get(
          "http://13.125.111.131:8080/recruitment/search/page?title=" + keyword
        )
        .then((response) => {
          setSearchData(response.data.value);
          setCachedResults({ ...cachedResults, [keyword]: response.data.value });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [keyword, cachedResults]);

  const searchByTagOrCategory = useCallback(
    (type, searchValue) => {
      const searchType = type === "tag" ? "tag" : "category";
      const endpoint = `http://13.125.111.131:8080/recruitment/search/page?${searchType}=${searchValue}`;

      setPlaceholderComment(searchValue + ` ${searchType} 검색 결과`);

      if (cachedResults[endpoint]) {
        setSearchData(cachedResults[endpoint]);
      } else {
        axios
          .get(endpoint)
          .then((response) => {
            setSearchData(response.data.value);
            setCachedResults({ ...cachedResults, [endpoint]: response.data.value });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [cachedResults]
  );

  const onClickSearch = useCallback(() => {
    searchByTitle();
  }, [searchByTitle]);

  const onClickTag = useCallback(
    (searchTag) => {
      searchByTagOrCategory("tag", searchTag);
    },
    [searchByTagOrCategory]
  );

  const onClickCategory = useCallback(
    (searchCategory) => {
      searchByTagOrCategory("category", searchCategory);
    },
    [searchByTagOrCategory]
  );

  useEffect(() => {
    setActiveTab(null);
  }, [searchData]);

  useEffect(() => {
    setActiveTab(0);
  }, []);


  const tabList = [
    {
      Title: <div onClick={() => onClickTab(0)}>새로운 글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent
            type="new"
            onClickCategory={onClickCategory}
            onClickTag={onClickTag}
          />
        </Suspense>
      )
    },
    {
      Title: <div onClick={() => onClickTab(1)}>모집 중인 글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent
            type="recruiting"
            onClickCategory={onClickCategory}
            onClickTag={onClickTag}
          />
        </Suspense>
      )
    },
    {
      Title: <div onClick={() => onClickTab(2)}>추천 글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent
            type="recommend"
            onClickCategory={onClickCategory}
            onClickTag={onClickTag}
          />
        </Suspense>
      )
    },
    {
      Title: <div onClick={() => onClickTab(3)}>인기글</div>,
      Content: (
        <Suspense>
          <HomeTabComponent
            type="popular"
            onClickCategory={onClickCategory}
            onClickTag={onClickTag}
          />
        </Suspense>
      )
    }
  ];

  useEffect(() => {
    setActiveTab(0);
  }, []);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchBox value={keyword} placeholder={placeholderComment} onChange={onHandleChange} />
        <BiSearch onClick={onClickSearch} />
      </SearchContainer>
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
      <PostContainer>
        {activeTab === null ? (
          <HomeTabComponent searchData={searchData} />
        ) : (
          tabList[activeTab].Content
        )}
      </PostContainer>
    </Wrapper>
  );
};

export default HomeTab;
