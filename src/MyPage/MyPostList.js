import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PostComponent from "../component/PostComponent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 800px;
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
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 550;
`;

const ComponentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, calc((100% - 40px) / 3))
  );
  grid-gap: 10px;
`;


const MyPostList = () => {
  const [myPost, setMyPost] = useState([]);

useEffect(() => {
  fetch("http://13.125.111.131:8080/user/info/writing", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
      AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh"),
    }
  })
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    setMyPost(data.writing);
  })
    .catch((error) => {
      console.error("Error:", error);
    });
}, []);

  return (
    <Wrapper>
        <h3>내 작성글</h3>
        {myPost?.length < 1 ? <EmptyPost>글을 작성해보세요!</EmptyPost> 
          : <ComponentWrapper>
            {myPost?.map((post, index)=> (
              <PostComponent key={index} 
              type="MyPost"
              id = {post.id}
              title={post.title}
              author={post.author} category={post.category} tags={post.tags} recruitStatus={post.recruitStatus} date={post.createdDate}replyCount={post.replyCount}
              />
            ))}
            </ComponentWrapper>
        }
    </Wrapper>
  );
};

export default MyPostList;
