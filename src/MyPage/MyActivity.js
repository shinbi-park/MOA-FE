import React, {useState} from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const H3 = styled.h3`
  text-shadow: 0px 0px 10px #5d5fef;
`;

const Container = styled.div`
  display: "flex";
  flex: 2;
  margin-top: 50px;
  margin-left: 65px;
  font-size: 17px;
  text-decoration: none;
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
  box-shadow: 2px 1px 2px #707070;
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

    const pastProject = [{
      title: "완료한 프로젝트 1",
      link: "www.link1.com"
    },
    {
      title: "완료한 프로젝트 2",
      link: "www.link2.com"
    },]

    return (
        <Wrapper>
            <Sidebar />
            <Container>
              <H3>현재 참여중인 프로젝트</H3>
              <ProjectList color = '#5d5fef' projects={currentProject} className="current"/>

              <H3>지원한 프로젝트</H3>
              <ApplyList projects = {applyProject}/>

              <H3>완료한 프로젝트</H3>
              <ProjectList color = '#707070' projects={pastProject} className="past"/>
                
            </Container>
        </Wrapper>
    )
}

export default MyActivity; 
