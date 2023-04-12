import styled from "styled-components";
import React, {useState, useEffect} from "react";
import PostComponent from "../../component/PostComponent"

const PostContainerWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items:center;

  & > * {
    width: calc((100 - 2 * 10px) / 3); 
    margin: 10px; 
  }
`;

const NewPost = () => {
    const [newPost, setNewPost] = useState([
        {
            "title" : "50자가 넘는 제목 테스트 [사이드 모집] 기획자 프론트엔드 개발자 백엔드 분들 프로젝트 같이",
            "author" : "username1",
            "category" : "프로그래밍",
            "tags" : [
                "tag1",
                "tag2",
                "tag3",
                "tag4",
                "tag5",
                "tag6"
            ],
            "recruitStatus" : "모집중",
            "createAt" : "2023-04-01",
            "profileImage" : "image", // 추후 이미지 기능 추가 후 변경 예정
            "replyCount" : 5,
        },
        {
            "title" : "title2",
            "author" : "username2",
            "category" : "어학",
            "tags" : [
                "tag1",
                "tag2"
            ],
            "recruitStatus" : "모집완료",
            "createAt" : "2023-04-03",
            "profileImage" : "image", // 추후 이미지 기능 추가 후 변경 예정
            "replyCount" : 4,
        },{
            "title" : "title1",
            "author" : "username1",
            "category" : "프로그래밍",
            "tags" : [
                "tag1",
                "tag2"
            ],
            "recruitStatus" : "모집중",
            "createAt" : "2023-04-01",
            "profileImage" : "image", // 추후 이미지 기능 추가 후 변경 예정
            "replyCount" : 5,
        },
        {
            "title" : "title2",
            "author" : "username2",
            "category" : "어학",
            "tags" : [
                "tag1",
                "tag2"
            ],
            "recruitStatus" : "모집완료",
            "createAt" : "2023-04-03",
            "profileImage" : "image", // 추후 이미지 기능 추가 후 변경 예정
            "replyCount" : 4,
        }
    ])
return(

    <PostContainerWrapper>
       {newPost.map((post, index)=> (
              <PostComponent key={index} 
              type="main"
              title={post.title}
              author={post.author} category={post.category} tags={post.tags} recruitStatus={post.recruitStatus} date={post.createAt}replyCount={post.replyCount}
              />
            ))}
  
    </PostContainerWrapper>
)

}

export default NewPost;