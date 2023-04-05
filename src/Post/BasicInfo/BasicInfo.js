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
  width: 750px;
  margin: 10px 15px 30px;
  border: 1px solid #5d5fef;
  box-shadow: 2px 1px 2px #BDBDBD;
`;

const BasicInfo = ({ handleCategoriesChange, handleFieldsChange, handleTagsChange }) => {

    return (
        <>
            <ProjectIntro>프로젝트 기본 정보</ProjectIntro>
            <Line />

            <Category handleCategoriesChange={handleCategoriesChange}/>
            <Postion handleFieldsChange={handleFieldsChange}/>
            <TagBox handleTagsChange={handleTagsChange}/>

        </>
    )
    

}

export default BasicInfo;