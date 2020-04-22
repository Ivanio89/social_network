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
import { compose } from "redux";
import {
  getPageSize,
  getToUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFolowindInProgress,
} from "../redux/usersSelectors";

class UsersContainer extends React.Component {
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
            getUsers={this.getUsers}
          />
        )}
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.UsersPage.users,
//     pagesSize: state.UsersPage.pagesSize,
//     totalUsersCount: state.UsersPage.totalUsersCount,
//     currentPage: state.UsersPage.currentPage,
//     isFetching: state.UsersPage.isFetching,
//     folowindInProgress: state.UsersPage.folowindInProgress,
//   };
// };

const mapStateToProps = (state) => {
  return {
    users: getToUsers(state),
    pagesSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    folowindInProgress: getFolowindInProgress(state),
  };
};

export default compose(
  // WithAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsProgress,
    getUsers,
  })
)(UsersContainer);
