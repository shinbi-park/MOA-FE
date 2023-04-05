import React, {useState} from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";

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


const ProjectItem = React.memo(({ title, link , color, className }) => (
  <Project color= {color}> {title} 
  <Button 
    style={{color: className==='past' ? color : 'black',
    borderColor: className === 'past' ? color : 'black'}}> 상세보기 </Button> 
  </Project>
));

const ProjectList = React.memo(({ projects, color, className }) => (
  <ProjectListBlock>
    {projects.map((project, index) => (
      <ProjectItem key={index} title={project.title} link={project.link} color = {color} className={className} />
    ))}
  </ProjectListBlock>
));

const ApplyItem = React.memo(({ title, position, status }) => (
  <Project className="Apply"> 
    <span className="title">{title}</span> <span>{position}</span> 
    <span style={{ color: 
    status === '수락' ? 'green' : 
    status === '거절' ? 'red' : 
    'black'}}>{status}
  </span>
  <ButtonContainer>
    <Button style={{visibility: status==='승인 대기중' ? "visible" : "hidden"}}> 지원취소 </Button> <Button> 상세보기 </Button>
    </ButtonContainer> 
  </Project>
));

const ApplyList = React.memo(({ projects }) => (
  <ProjectListBlock>
    {projects.map((project) => (
      <ApplyItem key={project.title} 
      title = {project.title}
      position = {project.position}
      status = {project.status}
      />
    ))}
  </ProjectListBlock>
));



const MyActivity = () => {
  
  const currentProject = [{
    title: "현재 참여중인 프로젝트 1",
    link: "www.link1.com"
  },
  {
    title: "현재 참여중인 프로젝트 2",
    link: "www.link2.com"
  },

  ]
    
  const applyProject = [
    {
      title: "지원한 프로젝트 1",
      position: "프론트엔드",
      status: "승인 대기중"
    },
    {
      title: "지원한 프로젝트 2",
      position: "백엔드",
      status: "거절"
    },
    {
      title: "지원한 프로젝트 3",
      position: "디자이너",
      status: "수락"
    }]
    const pastProject = [{}];
    /*
    const pastProject = [{
      title: "완료한 프로젝트 1",
      link: "www.link1.com"
    },
    {
      title: "완료한 프로젝트 2",
      link: "www.link2.com"
    },]
*/
    return (
        <Wrapper>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
            <Container>
              <h3>현재 참여중인 프로젝트</h3>
              {
                currentProject.length > 1 ?
                <ProjectList color = '#5d5fef' projects={currentProject} className="current"/>:
                <EmptyProject> 현재 참여중인 프로젝트가 없습니다 </EmptyProject>
              }
             

              <h3>지원한 프로젝트</h3>
              {
                applyProject.length > 1 ? 
                <ApplyList projects = {applyProject}/> : 
                <EmptyProject> 지원한 프로젝트가 없습니다 </EmptyProject>
              }
              

              <h3>완료한 프로젝트</h3>
              {
                pastProject.length > 1 ? 
                <ProjectList color = '#707070' projects={pastProject} className="past"/> :
                 <EmptyProject> 완료한 프로젝트가 없습니다 </EmptyProject>
              }
              
                
            </Container>
        </Wrapper>
    )
}

export default MyActivity; 
