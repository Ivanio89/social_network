import React from "react";
import NavContainer from "./components/Nav/NavContainer";
import ContainerDialogs from "./components/Dialogs/ContainerDialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ContainerUsers from "./components/Users/ContainerUsers";
import ContainerProfile from "./components/Profile/ContainerProfile";

import ClassApp from "./App.module.css";

const App = (props) => {
  // console.log(props.store);
  return (
    <BrowserRouter>
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
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
