import React, { useState, useCallback } from "react";
import styled from "styled-components";
import BasicInfo from "./BasicInfo/BasicInfo";
import Editor from "./Editor/Editor";
import WriteActionButton from "./WriteButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Post = ({ isEdit, Editdata }) => {
  const [categoryName, setCategoryName] = useState("programming");
  const [memberFields, setMemberFields] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleCategoriesChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleFieldsChange = useCallback((updatedFields) => {
    setMemberFields(updatedFields.map(({ id, ...rest }) => rest));
  }, []);

  const handleTagsChange = (tagslist) => {
    setTags(tagslist);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() === "") {
      alert("프로젝트 소개를 입력해주세요!");
      return;
    }

    if (tags.length === 0) {
      alert("태그를 적어도 하나 추가해주세요!");
      return;
    }

    if (!isEdit) {
      axios
        .post(
          "http://13.125.111.131:8080/recruitment",

          {
            title: title,
            content: content,
            memberFields: memberFields,
            categoryName: categoryName,
            tags: tags,
          },

          {
            headers: {
              // 로그인 후 받아오는 인증토큰값
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",

              AuthorizationRefresh:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
            },
          }
        )
        .then((response) => {
          console.log(response.data.value);
          navigate(`/detail/${response.data.value}`);
        });
    } else {
      //   axios
      //     .patch(
      //       `http://13.125.111.131:8080/recruitment/${postId}`,
      //       {
      //         title: title,
      //         content: content,
      //         memberFields: memberFields,
      //         categoryName: categoryName,
      //         tags: tags,
      //       },
      //       {
      //         headers: {
      //           Authorization:
      //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjoxLCJleHAiOjE2ODE3MTUyNzV9.362KsyL9_yL4_iGS2yOYykyhvqhXpcmYlgMceC1dz-QitdRV0kKGABNIjXIGh6a8CvCEjlRfEqNvNuqgZQQRMw",
      //           AuthorizationRefresh:
      //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODI5MTM0NzV9.WPvt3vEN59SmSIesqLav_rdYErS_axBIuzQpOzm5E3l1YHafElctLjqT920H6ETRlEnnmimSOzWqF3Q3jMT1EQ",
      //         },
      //       }
      //     )
      //     .then((response) => {
      //       console.log(response.data.value);
      //       console.log("수정완료;;");
      //       // navigate(`/detail/${response.data.value}`);
      // });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <BasicInfo
          handleCategoriesChange={handleCategoriesChange}
          handleFieldsChange={handleFieldsChange}
          handleTagsChange={handleTagsChange}
          isEdit={isEdit}
          Editdata={Editdata}
        />

        <Editor
          handleTitleChange={handleTitleChange}
          handleContentChange={handleContentChange}
          isEdit={isEdit}
          Editdata={Editdata}
        />
        <WriteActionButton isEdit={isEdit} />
      </form>
    </Wrapper>
  );
};

export default Post;
