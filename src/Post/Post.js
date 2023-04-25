import React, { useState, useCallback, useEffect} from "react";
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

const Post = ({ isEdit }) => {
  const [categoryName, setCategoryName] = useState("PROGRAMMING");
  const [memberFields, setMemberFields] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editData, setEdit] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isEdit){
      axios
      .get(
        `http://13.125.111.131:8080/recruitment/${postId}`,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh")
          },
        }
      )
      .then((response) => {
        console.log(response.data.recruitInfo.members);
        setEdit(response.data.recruitInfo);
      });
    }
    else{
      setEdit("not Edit Mode");
    }
  },[postId, isEdit])

  const handleCategoriesChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleFieldsChange = useCallback((updatedFields) => {
    setMemberFields(updatedFields.map(({ id, ...rest }) => rest));
    console.log(updatedFields.map(({ id, ...rest }) => rest));
  }, []);

  const handleTagsChange = (tagslist) => {
    setTags(tagslist);
  };

  const handleTitleChange = (title) => {
    console.log(title);
    if(isEdit){
      setTitle(title);
    }
    else{
      setTitle(title.target.value);
    }
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
      console.log(
        {
          title: title,
          content: content,
          memberFields: memberFields,
          categoryName: categoryName,
          tags: tags,
        }
      )
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
              Authorization: localStorage.getItem("Authorization"),
              AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh")
            },
          }
        )
        .then((response) => {
          console.log(response.data.value);
          navigate(`/detail/${response.data.value}`);
        });
    } else {
      console.log(memberFields);
      
      let members = [];
      memberFields.map((member) => {
        members.push({
          "field": member.recruitField,
          "total": member.totalCount
        })
      });
      console.log(members);
      console.log({
        title: title,
        content: content,
        state: 1,
        memberFields: members,
        categoryName: categoryName,
        tags: tags,
      });
         axios
           .patch(
             `http://13.125.111.131:8080/recruitment/${postId}`,
             {
              title: title,
              content: content,
              state: 1,
              memberFields: members,
              categoryName: categoryName,
              tags: tags,
            },
            {
              headers: {
                Authorization: localStorage.getItem("Authorization"),
                AuthorizationRefresh: localStorage.getItem("AuthorizationRefresh")
              },
            }
          )
          .then((response) => {
            console.log(response);
            console.log("수정완료;;");
            // navigate(`/detail/${response.data.value}`);
      });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        {editData && (
        <>
        <BasicInfo
          handleCategoriesChange={handleCategoriesChange}
          handleFieldsChange={handleFieldsChange}
          handleTagsChange={handleTagsChange}
          isEdit={isEdit}
          Editdata={editData}
        />

        <Editor
          handleTitleChange={handleTitleChange}
          handleContentChange={handleContentChange}
          isEdit={isEdit}
          Editdata={editData}
        />
        </>)
        }
        <WriteActionButton isEdit={isEdit} />
      </form>
    </Wrapper>
  );
};

export default Post;
