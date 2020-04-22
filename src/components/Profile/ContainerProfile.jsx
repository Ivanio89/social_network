import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../redux/ProfileReducer";
import { withRouter, Redirect } from "react-router";
import { compose } from "redux";
import { getUserStatus, updateUserStatus } from "../redux/ProfileReducer";

class ContainerProfile extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizeduserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    // console.log(this.props.profile);
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizeduserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});
export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter
  // WithAuthRedirect
)(ContainerProfile);
