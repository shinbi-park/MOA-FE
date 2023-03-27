import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Container = styled.div`
  display: "flex";
  flex: 2;
  margin-top: 50px;
  margin-left: 65px;
  font-size: 17px;
  text-decoration:
`;

const CurrentProject = styled.div`
  display: flex;
`;

const ApplyProject = styled.div`
  display: flex;
`;

const PreviousProject = styled.div`
  display: flex;
`;

const MyActivity = () => {
    return (
        <Wrapper>
            <Sidebar />
            <Container>
              <h3>현재 참여중인 프로젝트</h3>
              <CurrentProject>
                <p>Current PAGE</p>
              </CurrentProject>

              <h3>지원한 프로젝트</h3>
              <ApplyProject>
              <p>지원한 프로젝트 리스트</p>
              </ApplyProject>

              <h3>완료한 프로젝트</h3>
              <PreviousProject>
                <p>Previous PAGE</p>
              </PreviousProject>
                
            </Container>
        </Wrapper>
    )
}

export default MyActivity; 
