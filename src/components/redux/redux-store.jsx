import { createStore, combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";
import MessageReducer from "./MessageReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagePage: MessageReducer,
  SideBarPage: SideBarReducer,
  UsersPage: UsersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
