import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Input = styled.input`
  align-items: center;
  margin-bottom: 15px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  width: 500px;

`;

const AddButton = styled.button`
  width: 50px;
  height: 40px;
  padding: 8px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  font-weight: bold;
  color: black;
  font-size: 16px;
  margin-left: 10px;
`;

const RemoveButton = styled.button`
  border: none;
  background-Color: white;
  margin-left: 10px;
  margin-right: 10px;
  &:hover{
    cursor: pointer;
  }
`;

const ItemContainer = styled.div`
  display: inline-flex;
`;

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: inline-block;
  flex-direction: column;
`;

const Tag = styled.div`
  font-size: 1rem;
  color: black;
  text-decoration: underline;
  &+&{
    margin-left: 20px;
  }
  
`;

const TagListBlock = styled.div`
  margin-left: 20px;
  margin-bottom: 35px;
  display: flex;
  align-items: column;
`;

const TagItem = React.memo(({ tag, onRemove }) => (
    <ItemContainer>
    <Tag > <a href = { "http://" + tag} target="_blank" rel="noreferrer">{tag}</a></Tag>
    <RemoveButton onClick={() => onRemove(tag)}> x </RemoveButton>
    </ItemContainer>
  ));
  
  const TagList = React.memo(({ tags, onRemove }) => (
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </TagListBlock>
  ));

const ProfileLink = () => {
    const [input, setInput] = useState("");
    const [localLink, setLocalLinks] = useState(["LINK"]);
    
    const intertLink = useCallback(
        (tag) => {
          if (!tag) return;
          if (localLink.includes(tag)) return;
          if(localLink.length > 2 ) {
              alert('링크는 최대 3개까지만 등록 가능합니다!'); 
              return;
            }
          setLocalLinks([...localLink, tag]);
        },
        [localLink]
      );
    
      const onRemove = useCallback(
        (tag) => {
            setLocalLinks(localLink.filter((t) => t !== tag));
        },
        [localLink]
      );
    
      const onChange = useCallback((e) => {
        setInput(e.target.value);
      }, []);
    
      const onSubmit = useCallback(
        (e) => {
          e.preventDefault();
          intertLink(input.trim());
          setInput("");
        },
        [input, intertLink]
      );

    return(
        <Wrapper>
        <Container >
            <Input type="text"
                placeholder="링크를 추가하세요!"
                value={input}
                onChange={onChange}/>
            <AddButton type="submit" onClick={onSubmit}>추가</AddButton>
        </Container>

        <TagList tags={localLink} onRemove={onRemove} />
        </Wrapper>
        
    )
}

export default ProfileLink;