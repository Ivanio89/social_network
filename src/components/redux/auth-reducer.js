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
      return { ...state, ...action.data, isAuth: true };

    default:
      return state;
  }
};

export const setUserDataActionCreater = (userId, email, login) => ({
  type: SETUSERDATA,
  data: { userId, email, login },
});

export default authReducer;
