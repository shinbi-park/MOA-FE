import React, { useState, useCallback } from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`
  margin-bottom: 10px;
`;

const TagForm = styled.div`
  display: flex;
  font-size: inherit;
  input {
    padding: 0.5rem;
    height: 25px;
    font-size: inherit;
    width: 500px;
    border-radius: 4px;
    border: 1px solid #707070;
    box-shadow: 2px 1px 5px #BDBDBD;
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
    box-shadow: 2px 1px 5px #BDBDBD;
    &:hover{
        cursor: pointer;
    }
  }
  
`;

const Tag = styled.div`
  margin-left: 20px;
  margin-right: 0.2rem;
  font-size: 17px;
  color: gray;
  &:hover{
      cursor: pointer;
  }
`;

const TagListBlock = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;

const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}> #{tag} </Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const ProfileTag = () => {
  const [input, setInput] = useState("");
  const [localTags, setLocalTags] = useState(["태그를 입력하세요"]);

  const intertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const newTags = [...localTags, tag];
      setLocalTags(newTags);
    },
    [localTags]
  );

  const onRemove = useCallback(
    (tag) => {
      const newTags = localTags.filter((t) => t !== tag);
      setLocalTags(newTags);
      
    },
    [localTags]
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      intertTag(input.trim());
      setInput("");
    },
    [input, intertTag]
  );
  return (
    <TagBoxBlock>
        <TagForm>
        <input
            placeholder="태그를 입력하세요!"
            value={input}
            onChange={onChange}
        />
        <button type="submit" onClick={onSubmit}> 추가 </button>
        </TagForm>
        <TagList tags={localTags} onRemove={onRemove} />
  </TagBoxBlock>

  );
};

export default ProfileTag;
