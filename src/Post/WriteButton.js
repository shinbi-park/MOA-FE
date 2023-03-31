import styled from "styled-components";

const WriteButtonBlock = styled.div`
  width: 500px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 3rem;
    margin-right: 10rem;
    cursor: pointer;
    button + button {
        margin-left: 0.5rem;
    }
`;
const StyledButton = styled.button`
    
    font-weight: bold;
    border: none;
    border-radius: 6px;
    height: 2rem;
    width: 4rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = ({ onCancel, onPublish }) => {
  return (
    <WriteButtonBlock>
        <StyledButton onClick={onCancel}>취소</StyledButton>
        <StyledButton onClick={onPublish}>글쓰기</StyledButton>
    </WriteButtonBlock>
  );
};

export default WriteActionButton;
