import React, { useState } from "react";
import styled from "styled-components";
import profileImg from "./profileImg.png";
import { AiOutlineComment, AiFillHeart } from "react-icons/ai";

const Wrapper = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid #5D5FEF;
  border-radius: 20px;
  position: relative;
  h3 {
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  > * {
    margin: 10px 20px 0 25px;
  }
  
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px 5px 25px;
`;

const CatergoryBlock = styled.div`
    display: inline-flex;
    margin: 10px 0px 3px 0px;
    font-size: 17px;
`;

const LikeIcon = styled(AiFillHeart)`
    position: absolute;
    top: 20px;
    right: 30px;
    height: 20px;
    width: 20px;
    margin-left: 20px;
    color: #D2D2D2;
    &:hover{
        color: red;
    }
`;

const Date = styled.div`
    display: inline;
    color: black;
    font-size: 15px;
`;

const Bottom = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

const Line = styled.hr`
    position: absolute;
    bottom: 70px;
    width: 250px;
    border: 1px solid #ddd;
    align-items: center;
`;


const Profile = styled.div`
    display: flex;
    color: gray;
    margin-left: 5px;
    p{
        margin: 8px;
    }
`;

const UserImg = styled.img`
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0px;
`;

const CommentIcon = styled(AiOutlineComment)`
  flex: auto;
  height: 25px;
  width: 25px;
  color: gray;
  margin-right: 5px;
`;

const CommentBox = styled.div`
    display: inline-flex;
    
    align-items: center;
    margin-left: 110px;
    color:gray;
    p{
        margin: 8px;
    }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 8px;
  margin-left: 25px;
  margin-right: 0.2rem;
  font-size: 17px;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Tag = styled.div`
  display: flex;
  margin-right: 0.2rem;
  margin-bottom: 0.5rem;
  font-size: 15px;
  border: none;
  border-radius:10px;
  padding: 3px 7px 3px 7px;
  background-color: ${(props) => props.backgroundColor || '#FFD700'};
  color: ${(props) => props.color || 'black'};
  font-weight: 550;
  align-items: center;
  & ~ & {
    margin-right: 10px;
  }
`;

  
const PostComponent = () => {
    //Title 최대 50자까지
    //Tag 최대 5개
    const posts = 
        {
          id: "user1",
          category: "프로그래밍",
          title: "IT직군 포폴 + 블로그 서비스를 함께 만들어갈 크루원들을 모집 합니다! 글자 수는 최대 50까지",
          date: "2022-03-29",
          tags: ["프론트엔드", "리액트", "앱개발", "웹개발", "디자이너", "백엔드"],
          comments: 2,
        }
      ;

    return(
            <Wrapper>
                <Top>
                    <CatergoryBlock>
                        <Tag backgroundColor='#EAEAEA' 
                        color = '#5D5FEF'>{posts.category}</Tag>
                    </CatergoryBlock>
                    <LikeIcon/>
                    <Date>게시일 | {posts.date}</Date>
                </Top>
                
                <h3>{posts.title}</h3>
                <TagListBlock>
                    {posts.tags.map(tag => <Tag key={tag}>#{tag}</Tag>)}
                </TagListBlock>
                
                <Line/>
                <Bottom>
                    <Profile>
                        <UserImg src={profileImg} alt="프로필 사진"/>
                        <p>{posts.id}</p>
                    </Profile>
                    <CommentBox><CommentIcon/>{posts.comments}</CommentBox>
                </Bottom>
            </Wrapper>
    )
}

export default PostComponent;