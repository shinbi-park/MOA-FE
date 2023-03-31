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

const MyPostList = () => {
  const posts = [
    {
      id: 1,
      title: "첫 번째 글",
      date: "2022-03-29",
    },
    {
      id: 2,
      title: "두 번째 글",
      date: "2022-03-30",
    },
    {
      id: 3,
      title: "세 번째 글",
      date: "2022-03-31",
    },
  ];

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <h3>내가 작성한 글</h3>
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
      </Content>
    </Wrapper>
  );
};

export default MyPostList;