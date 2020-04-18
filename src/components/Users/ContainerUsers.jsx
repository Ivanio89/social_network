import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setIsProgress,
  getUsers,
} from "../redux/UsersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

import ClassUser from "./Users.module.css";

class usersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pagesSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pagesSize);
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
            setIsProgress={this.props.setIsProgress}
            folowindInProgress={this.props.folowindInProgress}
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
    folowindInProgress: state.UsersPage.folowindInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  setIsProgress,
  getUsers,
})(usersContainer);
