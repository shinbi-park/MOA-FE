import styled from "styled-components";

const WriteButtonBlock = styled.div`
    width: 750px;
    display: flex;
    justify-content: center;
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
    background-color: ${(props) => props.backgroundColor };
    color: ${(props) => props.color };
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = ({ onCancel, onPublish }) => {
  return (
    <WriteButtonBlock>
        <StyledButton backgroundColor = {'#D9D9D9'} color = {'black'} onClick={onCancel}>취소</StyledButton>
        <StyledButton backgroundColor = {'#5d5fef'} color = {'white'} onClick={onPublish}>글쓰기</StyledButton>
    </WriteButtonBlock>
  );
};

export default WriteActionButton;
