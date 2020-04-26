import React from "react";
import ClassUser from "./Users.module.css";
import User from "./User";
import Paginator from "../../common/FormsControl/Paginator/paginator";

const Users = (props) => {
  // console.log(props);
  return (
    <div className={ClassUser["wrapp-users__page"]}>
      <div className={ClassUser["wrapp-users"]}>
        <div className={ClassUser["wrapp-users__items"]}>
          {props.users.map((user) => {
            return (
              <User
                user={user}
                folowindInProgress={props.folowindInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
                key={user.id}
              />
            );
          })}
        </div>
        <Paginator
          totalUsersCount={props.totalUsersCount}
          pagesSize={props.pagesSize}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
        />
      </div>
    </div>
  );
};

export default Users;
