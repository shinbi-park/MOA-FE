import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-content: left;
  margin-top: 7px;
  margin-left: 40px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  text-align: left;
  margin-top: 10px;
  font-weight: bold;
  font-size: 19px;
`;

const PostionTemplate = ({ children }) => {
  return (
    <Wrapper className="PositionTemplate">
      <Label className="title"> 모집 포지션 </Label>
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default PostionTemplate;
