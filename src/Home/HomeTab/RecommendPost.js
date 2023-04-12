import styled from "styled-components";
import React, {useState, useEffect} from "react";
import PostComponent from "../../component/PostComponent"

const PostContainerWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  & > * {
    width: calc((100 - 2 * 10px) / 4); 
    margin: 10px; 
  }
`;

const RecommendPost = () => {
    const [recommendPost, setRecommendPost] = useState([
        {
            title : "title1",
            author : "username1",
            category : "프로그래밍",
            tags : [
                "tag1",
                "tag2"
            ],
            recruitStatus : "모집중",
            createAt : "2023-04-01",
            profileImage : "image", // 추후 이미지 기능 추가 후 변경 예정
            replyCount : 5,
        }
    ])
return(

    <PostContainerWrapper>
        {recommendPost.map((post, index)=> (
              <PostComponent key={index} 
              type="main"
              title={post.title}
              author={post.author} category={post.category} tags={post.tags} recruitStatus={post.recruitStatus} date={post.createDate}replyCount={post.replyCount}
              />
            ))}
  
    </PostContainerWrapper>
)

}

export default RecommendPost;