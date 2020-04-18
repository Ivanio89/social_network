import React from "react";
import Nav from "./Nav";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserDataActionCreater } from "../redux/auth-reducer";

class NavContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setUserDataActionCreater(id, email, login);
        }
      });
  }
  render() {
    return (
      <div className="">
        <Nav {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserDataActionCreater })(
  NavContainer
);
