import React from "react";
import ClassUser from "./UserInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../PrifileStatusWithHooks";

const UserInfo = (props) => {
  // console.log(props);
  if (!props.profile) {
    return (
      <div className={ClassUser["wrapp-profile"]}>
        <ProfileStatus status={props.status} />
        <div className={ClassUser["wrapp-profile__preloader"]}>
          <Preloader />
        </div>
      </div>
    );
  } else {
    return (
      <div className={ClassUser["wrapp-profile"]}>
        <div className={ClassUser["wrapp-profile__items"]}>
          <div className={ClassUser["wrapp-profile__item"]}>
            <div className={ClassUser["user-profile__photos"]}>
              <img
                src={
                  props.profile.photos.large != null
                    ? props.profile.photos.large
                    : userPhoto
                }
              />
            </div>
          </div>
          <div className={ClassUser["wrapp-profile__item"]}>
            <div className={ClassUser["user-profile__info"]}>
              <ul>
                <li>
                  {props.profile.contacts.facebook != null
                    ? props.profile.contacts.facebook
                    : "not info"}
                </li>
                <li>
                  {props.profile.contacts.vk != null
                    ? props.profile.contacts.vk
                    : "not info"}
                </li>
                <li>
                  {props.profile.contacts.instagram != null
                    ? props.profile.contacts.instagram
                    : "not info"}
                </li>
                <li>
                  {props.profile.contacts.github != null
                    ? props.profile.contacts.github
                    : "not info"}
                </li>
                <li>
                  {props.profile.aboutMe != null
                    ? props.profile.aboutMe
                    : "not info"}
                </li>
              </ul>
            </div>
          </div>
          <div className={ClassUser["wrapp-profile__item"]}>
            <div className={ClassUser["user-profile__name"]}>
              {props.profile.fullName != null
                ? props.profile.fullName
                : "not name"}
            </div>
            <div className={ClassUser["wrapp-profile__status"]}>
              {/* <ProfileStatus */}
              <ProfileStatusWithHooks
                status={props.status}
                updateUserStatus={props.updateUserStatus}
              />
            </div>
          </div>
          <div className={ClassUser["wrapp-profile__item"]}>
            <div className={ClassUser["wrapp-profile__name-page"]}>
              <h1>Profile</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserInfo;
