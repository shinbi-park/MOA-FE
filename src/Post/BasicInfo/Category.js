import React, { useState } from "react";
import styled from "styled-components";

const CategoryBlock = styled.div`
  text-align: left;
  display: flex;
  margin-left: 45px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  align-items: center;
  margin-top: 3px;
  font-size: 19px;
`;

export const Select = styled.select`
  margin-left: 32px;
  display: block;
  width: 312px;
  height: 30px;
  padding: 2px 5px;
  font-size: inherit;
  text-align: center;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  box-shadow: 2px 1px 5px #bdbdbd;
`;

export default function Category({ handleCategoriesChange, isEdit, Editdata }) {
  return (
    <CategoryBlock>
      {!isEdit ? (
        <>
          {" "}
          <Label htmlFor="category"> 카테고리 </Label>
          <Select
            name="select-category"
            id="category"
            defaultValue="PROGRAMMING"
            onChange={handleCategoriesChange}
          >
            <option value="PROGRAMMING">프로그래밍</option>
            <option value="LANGUAGE"> 어학 </option>
            <option value="EMPLOYMENT">취업</option>
            <option value="EXAMINATION">고시/공무</option>
            <option value="HOBBY">자율</option>
            <option value="CERTIFICATE">기타</option>
          </Select>
        </>
      ) : (
        <>
          {" "}
          <Label htmlFor="category"> 카테고리 </Label>
          <Select
            name="select-category"
            id="category"
            defaultValue={Editdata.category}
            onChange={handleCategoriesChange}
          >
            <option value="PROGRAMMING">프로그래밍</option>
            <option value="LANGUAGE"> 어학 </option>
            <option value="EMPLOYMENT">취업</option>
            <option value="EXAMINATION">고시/공무</option>
            <option value="HOBBY">자율</option>
            <option value="CERTIFICATE">기타</option>
          </Select>
        </>
      )}
    </CategoryBlock>
  );
}
