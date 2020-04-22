import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { logout } from "../redux/auth-reducer";

class NavContainer extends React.Component {
  render() {
    // console.log(this.props);
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

export default connect(mapStateToProps, { logout })(NavContainer);
