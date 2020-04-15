import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setIsFetching,
} from "../redux/UsersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

import ClassUser from "./Users.module.css";

class usersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div className={ClassUser["preloader"]}>
            <Preloader />
          </div>
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pagesSize={this.props.pagesSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pagesSize: state.UsersPage.pagesSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setIsFetching,
})(usersContainer);
