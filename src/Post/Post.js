import React, { useState } from "react";
import BasicInfo from "./BasicInfo/BasicInfo";
import Editor from "./Editor/Editor";
import WriteActionButton from "./WriteButton";


const Post = () => {
    const [categories, setCategories] = useState("programming");
    const [memberFields, setMemberFields] = useState([
        {
          id: 1,
          total: 1,
          field: ""
        }
      ]);
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleFieldsChange = (newFields) => {
        setMemberFields(newFields);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const postData = {
          title: title,
          content: content,
          memberFields: memberFields,
          categories: categories,
          tags: tags,
        };
        //데이터 전송
        fetch("/recruitment", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
              "Content-Type": "application/json"
            }
          })
      };
    return(
        <form onSubmit={handleSubmit}>

            <BasicInfo 
                setCategories = {setCategories}
                handleFieldsChange = {handleFieldsChange}
                setTags = {setTags}
            />
            
            <Editor 
                setTitle={setTitle} 
                setContent={setContent}
            />
            <WriteActionButton/>
        </form>
    )
}

export default Post;