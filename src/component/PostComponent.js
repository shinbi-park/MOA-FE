import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profileImg from "./profileImg.png";
import { AiOutlineComment, AiFillHeart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";

const Wrapper = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid #5d5fef;
  border-radius: 20px;
  position: relative;
  h3 {
    font-size: 19px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  > * {
    margin: 10px 20px 0 25px;
  }
  margin-right: 20px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px 5px 25px;
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 20px;
    width: 20px;
    margin-left: 20px;
    color: #d2d2d2;
    &:hover {
      cursor: pointer;
    }
  }
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
  color: #d2d2d2;
  &.liked {
    fill: red;
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
  p {
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
  color: gray;
  p {
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
  margin-right: 8px;
  margin-bottom: 0.5rem;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  padding: 3px 7px 3px 7px;
  background-color: ${(props) => props.backgroundColor || "#FFD700"};
  color: ${(props) => props.color || "black"};
  font-weight: 520;
  align-items: center;
`;
const MenuList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  top: 10%;
  right: -18%;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  width: 50px;
  height: 50px;
  z-index: 1;
  font-size: 16px;
`;

const MenuItem = styled.li`
  cursor: pointer;
  margin-bottom: 10px;
  display: inline-block;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const PostComponent = ({ type }) => {
  //Title 최대 50자까지
  //Tag 최대 5개
  const posts = {
    id: "user1",
    category: "프로그래밍",
    title:
      "IT직군 포폴 + 블로그 서비스를 함께 만들어갈 크루원들을 모집 합니다! 글자 수는 최대 50까지",
    date: "2022-03-29",
    tags: ["프론트엔드", "리액트", "앱개발", "웹개발", "디자이너", "백엔드"],
    comments: 2,
    status: "모집 중"
  };
  const [isMypost, setIsMypost] = useState(false);
  const [isMyLiked, setIsMyLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  let recruitmentId = 1; //수정하기

  useEffect(() => {
    if (type === "MyPost") setIsMypost(true);
    else if (type === "MyLike") setIsMyLiked(true);
  }, []);

  const handleLikeClick = () => {
    setIsMyLiked(!isMyLiked);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleEditClick = () => {
    console.log("Edit clicked");
    fetch(`/recruitment/${recruitmentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {});

  };

  const handleDeleteClick = () => {
    console.log("Delete clicked");
    const result = window.confirm("글을 정말 삭제할까요?");
    if (result) {
      fetch(`/recruitment/${recruitmentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => response === 200 ? alert("글이 삭제되었습니다!") : alert("글 삭제에 실패하였습니다"))
    };
    }

  return (
    <Wrapper>
      {showMenu && (
        <MenuList>
          <MenuItem onClick={handleEditClick}>글 수정</MenuItem>
          <MenuItem onClick={handleDeleteClick}>글 삭제</MenuItem>
        </MenuList>
      )}
      <Top>
        <CatergoryBlock>
          <Tag backgroundColor="#EAEAEA" color="#5D5FEF">
            {posts.category}
          </Tag>
          <Tag color="black">{posts.status}</Tag>
        </CatergoryBlock>
        {isMypost ? (
          <>
            <CiMenuKebab onClick={handleMenuClick} />{" "}
          </>
        ) : (
          <LikeIcon
            onClick={handleLikeClick}
            className={isMyLiked ? "liked" : ""}
          />
        )}
        <Date>게시일 | {posts.date}</Date>
      </Top>

      <h3>{posts.title}</h3>
      <TagListBlock>
        {posts.tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagListBlock>

      <Line />
      <Bottom>
        <Profile>
          <UserImg src={profileImg} alt="프로필 사진" />
          <p>{posts.id}</p>
        </Profile>
        <CommentBox>
          <CommentIcon />
          {posts.comments}
        </CommentBox>
      </Bottom>
    </Wrapper>
  );
};

export default PostComponent;
