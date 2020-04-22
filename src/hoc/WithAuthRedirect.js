import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const WithAuthRedirect = (Component) => {
  class RedirectCompontn extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }

  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectCompontn
  );

  return connectedAuthRedirectComponent;
};
