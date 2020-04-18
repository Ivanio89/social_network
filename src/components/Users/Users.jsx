import React from "react";
import userPhoto from "../../assets/images/user.png";
import ClassUser from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  console.log(props);
  let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={ClassUser["wrapp-users__page"]}>
      <div className={ClassUser["wrapp-users"]}>
        <div className={ClassUser["wrapp-users__items"]}>
          {props.users.map((user) => {
            return (
              <div className={ClassUser["wrapp-users__item"]} key={user.id}>
                <div className={ClassUser["wrapp-users__person"]}>
                  <NavLink to={`/profile/${user.id}`}>
                    <img
                      src={
                        user.photos.small != null
                          ? user.photos.small
                          : userPhoto
                      }
                      alt="images"
                      className={ClassUser["img-photo"]}
                    />
                  </NavLink>
                </div>
                <div className={ClassUser["wrapp-users__btn"]}>
                  {user.followed ? (
                    <button
                      disabled={props.folowindInProgress.some(
                        (id) => id === user.id
                      )}
                      onClick={() => {
                        props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.folowindInProgress.some(
                        (id) => id === user.id
                      )}
                      onClick={() => {
                        props.follow(user.id);
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
          })}
        </div>
        <div className={ClassUser["number-users__items"]}>
          {pages.map((page) => {
            return (
              <span
                onClick={() => {
                  props.onPageChanged(page);
                }}
                className={
                  ClassUser["number-user__item"] &&
                  props.currentPage === page &&
                  ClassUser["number-user__item-active"]
                }
              >
                {page}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
