import React from "react";
import ApplicantList from "./ApplicantList";
import MemberList from "./MemberList";
import PostStateSetting from "./PostStateSetting";

const PostAdmin = () => {
  return (
    <div>
      <PostStateSetting />
      <ApplicantList />
      <MemberList />
    </div>
  );
};

export default PostAdmin;
