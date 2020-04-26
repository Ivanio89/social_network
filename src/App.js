import React, { Suspense } from "react";
import NavContainer from "./components/Nav/NavContainer";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ContainerUsers from "./components/Users/ContainerUsers";
import LoginPage from "./components/login/login";
import { initializeApp } from "./components/redux/app-reducer";
import ClassApp from "./App.module.css";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./common/Preloader/Preloader";
import store from "./components/redux/redux-store";
import { WithSyspense } from "./hoc/WithSyspense";

// import ContainerProfile from "./components/Profile/ContainerProfile";
// import ContainerDialogs from "./components/Dialogs/ContainerDialogs";
const ContainerDialogs = React.lazy(() =>
  import("./components/Dialogs/ContainerDialogs")
);
const ContainerProfile = React.lazy(() =>
  import("./components/Profile/ContainerProfile")
);

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
          <Route path="/dialogs" render={WithSyspense(ContainerDialogs)} />
          {/* <Route
            path="/dialogs"
            render={() => {
              return (
                <Suspense fallback={<Preloader />}>
                  <ContainerDialogs />
                </Suspense>
              );
            }}
          /> */}
          <Route path="/users" render={WithSyspense(ContainerUsers)} />
          <Route
            path="/profile/:userId?"
            render={WithSyspense(ContainerProfile)}
          />
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

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
