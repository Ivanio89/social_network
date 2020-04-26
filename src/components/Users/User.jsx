import React from "react";
import ClassUser from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

const User = ({ user, folowindInProgress, unfollow, follow, id }) => {
  return (
    <div className={ClassUser["wrapp-users__item"]}>
      <div className={ClassUser["wrapp-users__person"]}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt="images"
            className={ClassUser["img-photo"]}
          />
        </NavLink>
      </div>
      <div className={ClassUser["wrapp-users__btn"]}>
        {user.followed ? (
          <button
            disabled={folowindInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={folowindInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className="">
        <div className="">{user.name}</div>
        <div className="">{user.status}</div>
      </div>
      <div className="">
        <div className="">{"user.location.contry"}</div>
        <div className="">{"user.location.sity"}</div>
      </div>
    </div>
  );
};

export default User;
