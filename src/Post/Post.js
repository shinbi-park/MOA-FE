import BasicInfo from "./BasicInfo/BasicInfo";
import Editor from "./Editor/Editor";
import styled from "styled-components";
import WriteActionButton from "./WriteButton";


const Post = () => {

    return(
        <>
            <BasicInfo />
            <Editor />
            <WriteActionButton/>
        </>
    )
}

export default Post;