import React from "react";
import ClassUser from "./UserInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";

const UserInfo = (props) => {
  console.log(props);
  if (!props.profile) {
    return (
      <div className={ClassUser["wrapp-profile"]}>
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
              <img src={props.profile.photos.large} />
            </div>
          </div>
          <div className={ClassUser["wrapp-profile__item"]}>
            <div className={ClassUser["user-profile__info"]}>
              <ul>
                <li>{props.profile.contacts.facebook}</li>
                <li>{props.profile.contacts.vk}</li>
                <li>{props.profile.contacts.instagram}</li>
                <li>{props.profile.contacts.github}</li>
                <li>{props.profile.aboutMe}</li>
              </ul>
            </div>
          </div>
          <div className={ClassUser["wrapp-profile__item"]}>
            <div className={ClassUser["user-profile__name"]}>
              {props.profile.fullName}
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
