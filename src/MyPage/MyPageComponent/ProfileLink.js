import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  flex-direction: column;
`;

const Container = styled.div`
  min-width: 570px;
  margin-right: 150px;
  display: flex;
  input {
    display: inline-flex;
    flex: 1;
    align-items: center;
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #707070;
    font-size: 16px;
    min-width: 500px;
    height: 25px;
    box-shadow: 2px 1px 5px #bdbdbd;
  }

  button {
    width: 50px;
    height: 40px;
    padding: 8px;
    border: none;
    background-color: ${(props) => props.backgroundColor};
    font-weight: bold;
    color: black;
    font-size: 16px;
    margin-left: 10px;
    box-shadow: 2px 1px 5px #bdbdbd;
    &:hover {
      cursor: pointer;
    }
  }
`;

const LinkContainer = styled.div`
  display: inline-flex;
  button {
    border: none;
    background-color: white;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Link = styled.div`
  font-size: 1rem;
  color: black;
  text-decoration: underline;
  font-size: 17px;
  & + & {
    margin-left: 20px;
  }
`;

const LinkListBlock = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: column;
`;

const LinkItem = React.memo(({ link, onRemove }) => (
  <LinkContainer>
    <Link>
      {" "}
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    </Link>
    <button onClick={() => onRemove(link)}> x </button>
  </LinkContainer>
));

const LinkList = React.memo(({ links, onRemove }) => (
  <LinkListBlock>
    {links?.map((link) => (
      <LinkItem key={link} link={link} onRemove={onRemove} />
    ))}
  </LinkListBlock>
));

const ProfileLink = ({ data, handleUserLinks }) => {
  const [input, setInput] = useState("");
  const [localLink, setLocalLinks] = useState([]);

  useEffect(() => {
    setLocalLinks([...data]);
  }, [data]);

  const insertLink = useCallback(
    (link) => {
      if (!link) return;
      if (localLink.includes(link)) return;
      if (localLink.length > 2) {
        alert("링크는 최대 3개까지만 등록 가능합니다!");
        return;
      }
      setLocalLinks([...localLink, link]);
    },
    [localLink]
  );

  const onRemove = useCallback(
    (link) => {
      setLocalLinks(localLink.filter((l) => l !== link));
    },
    [localLink]
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let newInput = input;
      if (!input.includes("http://")) {
        //"http://"없으면 추가
        newInput = "http://" + input;
      }
      insertLink(newInput.trim());
      setInput("");
    },
    [input, insertLink]
  );
  useEffect(() => {
    handleUserLinks(localLink);
  }, [localLink, handleUserLinks]);

  return (
    <Wrapper>
      <Container>
        <input
          type="text"
          placeholder="링크를 추가하세요!"
          value={input}
          onChange={onChange}
        />
        <button type="submit" onClick={onSubmit}>
          추가
        </button>
      </Container>

      <LinkList links={localLink} onRemove={onRemove} />
    </Wrapper>
  );
};

export default ProfileLink;
