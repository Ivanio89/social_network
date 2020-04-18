import { createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./ProfileReducer";
import MessageReducer from "./MessageReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagePage: MessageReducer,
  SideBarPage: SideBarReducer,
  UsersPage: UsersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
