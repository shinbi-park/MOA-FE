import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "./profileImg.png";
import { AiOutlineComment, AiFillHeart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid #5d5fef;
  border-radius: 20px;
  justify-content: left;
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
  margin-left: 10px;
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
  position: absolute;
  top: 5px;
  left: 200px;
  align-items: center;
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

const PostComponent = ({
  id,
  type,
  title,
  author,
  category,
  tags,
  recruitStatus,
  date,
  profileImg,
  replyCount,
}) => {
  const [isMypost, setIsMypost] = useState(false);
  const [isMyLiked, setIsMyLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  if (tags.length > 5) {
    tags = tags.slice(0, 5);
  }
  if (title.length > 50) {
    title = title.slice(0, 47) + "...";
  }

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
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = () => {
    console.log("Delete clicked");
    const result = window.confirm("글을 정말 삭제할까요?");
    if (result) {
      axios
        .delete(`http://13.125.111.131:8080/recruitment/${id}`, {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo2LCJleHAiOjE2ODE4NzYwMzF9.B26grmvt3VpiLv919ZO8b5_OW9xrqMS8JpAWm_mZG8LyngyRpwL4t8cePiLPq7CPoDkh5udOjvURr56qarGJig",

            AuthorizationRefresh:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODMwNzQyMzF9.msnxlc-h-3J8JQJyrSK2L_Rv2GV85zUqMR2J4VJiPOO0WUuk9-UFHeXwNl8d2vanQ-12JDFSyOZhlWFMhAIsfA",
          },
        })
        .then((response) => console.log("글이 삭제되었습니다!"));
    }
  };

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
            {category}
          </Tag>
          <Tag color="black">{recruitStatus}</Tag>
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
        <Date>게시일 | {date}</Date>
      </Top>

      <h3>{title}</h3>
      <TagListBlock>
        {tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagListBlock>

      <Line />
      <Bottom>
        <Profile>
          <UserImg src={profile} alt="프로필 사진" />
          <p>{author}</p>
        </Profile>
        <CommentBox>
          <CommentIcon />
          {replyCount}
        </CommentBox>
      </Bottom>
    </Wrapper>
  );
};

export default PostComponent;
