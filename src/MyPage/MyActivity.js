import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  text-decoration: none;
  h3 {
    display: inline-block;
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

const Project = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.2rem;
  font-size: 18px;
  border: solid 2px #a2a2a2;
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: 600px;
  font-weight: 650;
  justify-content: space-between;
  padding-left: 30px;
  align-items: center;
  color: ${(props) => props.color || "black"};
  box-shadow: 2px 1px 2px #bdbdbd;
  .Apply {
    font-size: 16px;
    .title{
      width: 200px;
    }
    &.status{
      width: 50px;
    }
    &.positoin{
      width: 50px;
    }
  }
`;

const Title = styled.div`
  width: 200px;
`;
const Position = styled.div`
  width: 100px;
`;

const Status = styled.div`
  width: 50px;
`;

const ProjectListBlock = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  width: 85px;
  padding: 5px;
  border: 1.5px solid ${(props) => props.color || "black"};
  background-color: white;
  color: ${(props) => props.color || "black"};
  font-size: 16px;
  margin-left: 10px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;

const EmptyProject = styled.div`
  display: flex;
  flex: 1;
  min-width: 650px;
  min-height: 150px;
  margin: 20px 150px 20px 0px;
  background: #e8e8e8;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 2px 1px 2px #bdbdbd;
`;

const ProjectItem = React.memo(({ title, link, color, className }) => (
  <Project color={color}>
    {title}
    <Button
      style={{
        color: className === "past" ? color : "black",
        borderColor: className === "past" ? color : "black"
      }}
      onClick={() => {
        window.location.href = link;
      }}
    >
      상세보기
    </Button>
  </Project>
));

const ProjectList = React.memo(({ projects, color, className }) => (
  <ProjectListBlock>
    {projects.map((project, index) => (
      <ProjectItem
        key={index}
        title={project.title}
        link={project.detailsUri}
        color={color}
        className={className}
      />
    ))}
  </ProjectListBlock>
));

const CancelApply = (recruitmentId) => {
  const result = window.confirm(
    "지원을 취소하겠습니까?"
  );
  if (result) {
    fetch(`http://13.125.111.131:8080/recruitment/${recruitmentId}/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh")
      }
    }).then((response) =>
      {
        console.log(response);
        response === 200
        ? alert("지원이 취소되었습니다!")
        : alert("지원 취소에 실패하였습니다")}
    );
  }
};

const ApplyItem = React.memo(
  ({ recruitmentId,title, position, status, detailsUri }) => (
    <Project className="Apply">
      <Title><span className="title">{title}</span> </Title>
      <Position><span className="position">{position}</span></Position>
      <Status>
      <span className="status"
        style={{
          color:
            status === "수락" ? "green" : status === "거절" ? "red" : "black"
        }}
      >
        {status}
      </span>
      </Status>
      <ButtonContainer>
        <Button
          style={{ visibility: status === "대기중" ? "visible" : "hidden" }}
          onClick={() => CancelApply(recruitmentId)}
        >
          지원취소
        </Button>
        <Button
          onClick={() => {
            window.location.href = detailsUri;
          }}
        >
          상세보기
        </Button>
      </ButtonContainer>
    </Project>
  )
);

const ApplyList = React.memo(({ projects }) => (
  <ProjectListBlock>
    {projects.map((project) => (
      <ApplyItem
        key={project.title}
        recruitmentId= {project.recruitmentId}
        title={project.title}
        position={project.field}
        status={project.status}
        detailsUri={project.detailsUri}
      />
    ))}
  </ProjectListBlock>
));

const MyActivity = () => {
  const [userActivity, setUserActivity] = useState({});

  useEffect(() => {
    fetch("http://13.125.111.131:8080/user/info/activity", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh"),
      }
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setUserActivity(data);
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const currentProject = userActivity?.approvedProjects?.CONCURRENT;
  const applyProject = userActivity?.etcProjects;
  const pastProject = userActivity?.approvedProjects?.FINISH;

  return (
    <Wrapper>
        <h3>현재 참여중인 프로젝트</h3>
        {currentProject?.length > 0 ? (
          <ProjectList
            color="#5d5fef"
            projects={currentProject}
            className="current"
          />
        ) : (
          <EmptyProject> 현재 참여중인 프로젝트가 없습니다 </EmptyProject>
        )}

        <h3>지원한 프로젝트</h3>
        {applyProject?.length > 0 ? (
          <ApplyList projects={applyProject} />
        ) : (
          <EmptyProject> 지원한 프로젝트가 없습니다 </EmptyProject>
        )}

        <h3>완료한 프로젝트</h3>
        {pastProject?.length > 0 ? (
          <ProjectList
            color="#707070"
            projects={pastProject}
            className="past"
          />
        ) : (
          <EmptyProject> 완료한 프로젝트가 없습니다 </EmptyProject>
        )}
    </Wrapper>
  );
};

export default MyActivity;
