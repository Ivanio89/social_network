import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ProfileReducer from "./ProfileReducer";
import MessageReducer from "./MessageReducer";
import SideBarReducer from "./SideBarReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as fromReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagePage: MessageReducer,
  SideBarPage: SideBarReducer,
  UsersPage: UsersReducer,
  auth: authReducer,
  form: fromReducer,
  app: appReducer,
});

// add store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
