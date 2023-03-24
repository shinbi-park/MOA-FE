import React, { useState, useCallback } from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`
  width: 60%;
  margin-left: 40px;
  h4 {
    text-align: left;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  width: 80%;
  overflow: hidden;
  display: flex;
  border: 1px solid;
  input,
  button {
    outline: none;
    border: none;
    font-size: 0.8rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    font-weight: bold;
    align-content: right;
  }
  
`;

const Tag = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.2rem;
  font-size: 1rem;
  color: gray;
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

const TagBox = () => {
  const [input, setInput] = useState("");
  const [localTags, setLocalTags] = useState(["태그를 입력하세요"]);

  const intertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      setLocalTags([...localTags, tag]);
    },
    [localTags]
  );

  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
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
      <h4> 태그 </h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요!"
          value={input}
          onChange={onChange}
        />
        <button type="submit"> 추가 </button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
