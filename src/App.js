import React from "react";
import NavContainer from "./components/Nav/NavContainer";
import ContainerDialogs from "./components/Dialogs/ContainerDialogs";
import { Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ContainerUsers from "./components/Users/ContainerUsers";
import ContainerProfile from "./components/Profile/ContainerProfile";
import LoginPage from "./components/login/login";
import { initializeApp } from "./components/redux/app-reducer";
import ClassApp from "./App.module.css";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    // console.log(this.props.store);

    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className={ClassApp.container}>
        {/* <Header /> */}
        <NavContainer />
        <div className="content">
          <Route path="/dialogs" render={() => <ContainerDialogs />} />
          <Route path="/users" render={() => <ContainerUsers />} />
          <Route path="/profile/:userId?" render={() => <ContainerProfile />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
