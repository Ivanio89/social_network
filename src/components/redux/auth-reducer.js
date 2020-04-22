import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SETUSERDATA = "set_user_data";

let initilState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initilState, action) => {
  switch (action.type) {
    case SETUSERDATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const setUserDataActionCreater = (userId, email, login, isAuth) => ({
  type: SETUSERDATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      console.log(id, login, email);
      dispatch(setUserDataActionCreater(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserDataActionCreater(null, null, null, false));
    }
  });
};

export default authReducer;
