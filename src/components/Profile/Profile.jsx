import React from "react";
import ProfileClasses from "./Profile.module.css";
import ContainerMyPost from "./MyPosts/ContainerMyPost";
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
  // console.log(props.profile);
  return (
    <div className={ProfileClasses.content}>
      <div className={ProfileClasses.background}></div>
      <UserInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <ContainerMyPost />
    </div>
  );
};

export default Profile;
