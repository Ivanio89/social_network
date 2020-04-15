const FOLOW = "folow";
const UNFOLOW = "unfolow";
const SETUSERS = "set_users";
const SETCURRENTPAGE = "set_current_page";
const TOTALCOUNT = "total_count";
const TOGGLEISFETCHING = "toggle_is_fetching";

let initilState = {
  users: [],
  pagesSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const UsersReducer = (state = initilState, action) => {
  switch (action.type) {
    case FOLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SETUSERS: {
      return { ...state, users: [...action.users] };
    }

    case SETCURRENTPAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case TOTALCOUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLEISFETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLOW, userId });
export const setUsers = (users) => ({ type: SETUSERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SETCURRENTPAGE,
  currentPage,
});
export const setUsersTotalCount = (count) => ({
  type: TOTALCOUNT,
  count,
});
export const setIsFetching = (isFetching) => ({
  type: TOGGLEISFETCHING,
  isFetching,
});

export default UsersReducer;
