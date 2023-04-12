import React from "react";
import ApplicantList from "./ApplicantList";
import MemberList from "./MemberList";
import PageStateSetting from "./PageStateSetting";

const PostAdmin = () => {
  return (
    <div>
      <PageStateSetting />
      <ApplicantList />
      <MemberList />
    </div>
  );
};

export default PostAdmin;
