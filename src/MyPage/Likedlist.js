import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostComponent from "../component/PostComponent";
import Sidebar from "./Sidebar/Sidebar";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Content = styled.div`
  flex: 2;
  margin: 20px;
  h3{
    margin-left: 30px;
    font-size:23px;
  }
`;

const EmptyPost = styled.div`
  display: flex;
  width: 650px;
  height: 300px;
  background: #E8E8E8;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 550;
`;

const ComponentWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;

  & > * {
    width: calc((100 - 2 * 10px) / 3); 
    margin: 10px; 
  }
`;

const Likedlist = () => {
  const [likedPost, setLikedPost] = useState([]);

  useEffect(() => {
    fetch("http://13.125.111.131:8080/user/info/concern", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo4LCJleHAiOjE2ODEyNzcwOTF9.qNFbSaIv_fUcJ4BV-gPIRY_t5u84zbEFahx4FdgSukw7qnvV-OdnVifFdxBg0Zk5cs1I0VfO1YBTjaJJUwSmbA",
        AuthorizationRefresh:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyNzcxOTF9.fhkN47qnZY-Xqgik3RRWH_BXYjy1y95nYBzFwp77Wz1m81ZA_9PbJmb6sTWMciNXkOTenWEg100694CEDApEww"
      }
    })
      .then((response) => {
        if (response !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setLikedPost(response.value);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <h3>내 관심글</h3>
        {likedPost.length < 1 ? <EmptyPost>관심글을 등록해보세요!</EmptyPost> :
            <ComponentWrapper>
              {likedPost.map((post, index)=> (
              <PostComponent key={index} 
              type="MyLike"
              title={post.title}
              author={post.author} category={post.category} tags={post.tags} recruitStatus={post.recruitStatus} date={post.createDate}replyCount={post.replyCount}
              />
            ))}
            </ComponentWrapper>
        }
        
      </Content>
    </Wrapper>
  );
};

export default Likedlist;