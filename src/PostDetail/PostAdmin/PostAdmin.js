import React from "react";
import ApplicantList from "./ApplicantList/ApplicantList";
import MemberList from "./MemberList/MemberList";
import PostUpdate from "./PostUpdate/PostUpdate";

const PostAdmin = () => {
  return (
    <div>
      <PostUpdate />
      <ApplicantList />
      <MemberList />
    </div>
  );
};

export default PostAdmin;
