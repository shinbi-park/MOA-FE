import React, {useState} from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import PostComponent from "../component/PostComponent";

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


const MyPostList = () => {
  const [myPost, setMyPost] = useState([{
    id : "1",
    title : "title1",
    author : "username1",
    createDate : "2023-04-01",
    recruitStatus : "모집중",
    category : "프로그래밍",
    tags : [
        "tag1",
        "tag2"
    ],
    totalCount : 10,
    approvedCount : 5,
    profileImage : "image", // 추후 이미지 기능 추가 후 변경 예정
    replyCount : 5
},
{
    "id" : "2",
    "title" : "title2",
    "author" : "username1",
    "createDate" : "2023-04-04",
    "recruitStatus" : "모집중",
    "category" : "프로그래밍",
    "tags" : [
        "tag1",
        "tag2"
    ],
    "totalCount" : 10,
    "approvedCount" : 5,
    "profileImage" : "image", // 추후 이미지 기능 추가 후 변경 예정
    "replyCount" : 5
}]);

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <h3>내 작성글</h3>
        {myPost.length < 1 ? <EmptyPost>글을 작성해보세요!</EmptyPost> 
          : <ComponentWrapper>
            {myPost.map((post, index)=> (
              <PostComponent key={index} 
              type="MyPost"
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

export default MyPostList;