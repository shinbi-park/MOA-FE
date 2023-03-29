import React, { useState } from "react";
import styled from "styled-components";

const CategoryBlock = styled.div`
  text-align: left;
  display: flex;
  margin-left: 40px;
  font-weight: bold;
`;

const Label = styled.label`
  display: block;
  margin-top: 3px;
`;

export const Select = styled.select`
  margin-left: 28px;
  display: block;
  width: 30%;
  padding: 2px 5px;
  font-size: inherit;
  text-align: center;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
`;

export default function Category({handleCategoriesChange}) {
  
  return (
    <CategoryBlock>
      <Label htmlFor="category"> 카테고리 </Label>
      <Select name="select-category" id="category" 
      defaultValue="programming" onChange = {handleCategoriesChange}>
        <option value="programming">프로그래밍</option>
        <option value="language"> 어학 </option>
        <option value="job">취업</option>
        <option value="public">고시/공무</option>
        <option value="hobby">자율</option>
        <option value="etc">기타</option>
      </Select>
    </CategoryBlock>
  );
}
