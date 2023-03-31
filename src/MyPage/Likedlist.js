import React from "react";
import styled from "styled-components";
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
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;
const Th = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #E2E3FF;
  &:first-child {
    width: 70%;
  }
  &:nth-child(2) {
    width: 30%;
  }
`;

const Td = styled.td`
  padding: 8px;
  padding-left:20px;
  text-align: left;
  border: 1px solid #ddd;
  &:first-child {
    width: 70%;
  }
  &:nth-child(2) {
    width: 30%;
    text-align: center;
  }
`;


const Link = styled.a`
  text-decoration: none;
  color: #0077cc;
`;

const EmptyPost = styled.div`
  display: flex;
  width: 650px;
  height: 100px;
  background: #E8E8E8;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 18px;
`;

const Likedlist = () => {
  const posts = [];

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <h3>내 관심글</h3>
        {posts.length < 1 ? <EmptyPost>관심글을 등록해보세요!</EmptyPost> :
            <Table>
            <thead>
            <tr>
                <Th>제목</Th>
                <Th>작성일</Th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post) => (
                <tr key={post.id}>
                <Td>
                    <Link href={`/post/${post.id}`}>{post.title}</Link>
                </Td>
                <Td>{post.date}</Td>
                </tr>
            ))}
            </tbody>
        </Table>
        }
        
      </Content>
    </Wrapper>
  );
};

export default Likedlist;