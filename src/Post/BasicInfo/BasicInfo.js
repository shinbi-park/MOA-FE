import React, { useState } from "react";
import Category from "./Category";
import Postion from "./Position/Position";
import styled from "styled-components";
import TagBox from "./TagBox";

const ProjectIntro = styled.h2`
  text-align: left;
  margin-left: 15px;
  margin-bottom: 5px;
`;

const Line = styled.hr`
  width: 95%;
  margin: 16px 15px;
  border: 1px solid #ddd;
`;

const BasicInfo = ({ setCategories, handleFieldsChange, setTags }) => {

    return (
        <>
            <ProjectIntro>프로젝트 기본 정보</ProjectIntro>
            <Line />

            <Category setCategories={setCategories}/>
            <Postion handleFieldsChange={handleFieldsChange}/>
            <TagBox setTags={setTags}/>

        </>
    )
    

}

export default BasicInfo;