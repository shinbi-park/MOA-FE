import React, {useState} from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const SidebarContainer = styled.div`
  flex: 1;
`;

const Container = styled.div`
  display: "flex";
  justify-content: center;
  flex: 2;
  margin-top: 23px;
  font-size: 17px;
  text-decoration: none;
  h3{
    display: inline-block;
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const Project = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.2rem;
  font-size: 18px;
  border: solid 2px #A2A2A2;
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
  color: ${(props) => props.color || 'black'};
  box-shadow: 2px 1px 2px #BDBDBD;
  .Apply{
    font-size: 16px;
  }
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
  border: 1.5px solid ${(props) => props.color || 'black'};
  background-color: white;
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  margin-left: 10px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;

const EmptyProject = styled.div`
  display: flex;
  width: 650px;
  height: 150px;
  background: #E8E8E8;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 2px 1px 2px #BDBDBD;
`;


const ProjectItem = React.memo(({ title, link, color, className }) => (
  <Project color={color}>
    {title}
    <Button
      style={{
        color: className === 'past' ? color : 'black',
        borderColor: className === 'past' ? color : 'black'
      }}
      onClick={() => { window.location.href = link; }}
    >
      상세보기
    </Button>
  </Project>
));


const ProjectList = React.memo(({ projects, color, className }) => (
  <ProjectListBlock>
    {projects.map((project, index) => (
      <ProjectItem key={index} title={project.title} link={project.detailsUri} color={color} className={className} />
    ))}
  </ProjectListBlock>
));

const CancelApply = (e) => {
e.preventDefault();
const result = window.confirm("지원을 취소한 이후에는 다시 지원할 수 없습니다. 지원을 취소하겠습니까?");
if(result){
  fetch(`/`, {
    method: "",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => response === 200 ? alert("지원이 취소되었습니다!") : alert("지원 취소에 실패하였습니다"))
}
}

const ApplyItem = React.memo(({ title, position, status,cancelUri, detailsUri }) => (
  <Project className="Apply"> 
    <span className="title">{title}</span> <span>{position}</span> 
    <span style={{ color: 
    status === '수락' ? 'green' : 
    status === '거절' ? 'red' : 
    'black'}}>{status}
  </span>
  <ButtonContainer>
    <Button style={{visibility: status==='대기중' ? "visible" : "hidden"}}> 지원취소 </Button> <Button onClick={() => { window.location.href = detailsUri; }}> 상세보기 </Button>
    </ButtonContainer> 
  </Project>
));

const ApplyList = React.memo(({ projects }) => (
  <ProjectListBlock>
    {projects.map((project) => (
      <ApplyItem key={project.title} 
      title = {project.title}
      position = {project.field}
      status = {project.status}
      cancelUri={project.cancelUri}
      detailsUri={project.detailsUri}
      />
    ))}
  </ProjectListBlock>
));



const MyActivity = () => {
  const [userActivity, setUserActivity] = useState({
    approvedProjects : {
        CONCURRENT : [
            {
                title : "title1",
                detailsUri : "/recruitment/1"
            }
        ],
        FINISH : []
    },
    etcProjects : [
        {
            title : "title2",
            field : "백엔드",
            cancelUri : "/recruitment/2/cancel",
            detailsUri : "/recruitment/2",
            status : "대기중"
        }
    ]
});
const [currentProject, setCurrentProject] = useState(userActivity.approvedProjects.CONCURRENT);
const [applyProject, setApplyProject] = useState(userActivity.etcProjects);
const [pastProject, setPastProject] = useState(userActivity.approvedProjects.FINISH);
console.log(currentProject);
console.log(applyProject);
console.log(currentProject);

    return (
        <Wrapper>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
            <Container>
              <h3>현재 참여중인 프로젝트</h3>
              {
                currentProject.length > 0 ?
                <ProjectList color = '#5d5fef' projects={currentProject} className="current"/>:
                <EmptyProject> 현재 참여중인 프로젝트가 없습니다 </EmptyProject>
              }
             

              <h3>지원한 프로젝트</h3>
              {
                applyProject.length > 0 ? 
                <ApplyList projects = {applyProject}/> : 
                <EmptyProject> 지원한 프로젝트가 없습니다 </EmptyProject>
              }
              

              <h3>완료한 프로젝트</h3>
              {
                pastProject.length > 0 ? 
                <ProjectList color = '#707070' projects={pastProject} className="past"/> :
                 <EmptyProject> 완료한 프로젝트가 없습니다 </EmptyProject>
              }
              
                
            </Container>
        </Wrapper>
    )
}

export default MyActivity; 
