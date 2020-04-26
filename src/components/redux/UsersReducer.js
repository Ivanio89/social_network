import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLOW = "folow";
const UNFOLOW = "unfolow";
const SETUSERS = "set_users";
const SETCURRENTPAGE = "set_current_page";
const TOTALCOUNT = "total_count";
const TOGGLEISFETCHING = "toggle_is_fetching";
const TOGGLEISFETCHINGPROGRESS = "toggle_is_fetching_progress";

let initilState = {
  users: [],
  pagesSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  folowindInProgress: [],
};

const UsersReducer = (state = initilState, action) => {
  switch (action.type) {
    //   case FOLOW:
    //     return {
    //       ...state,
    //       users: state.users.map((user) => {
    //         if (user.id === action.userId) {
    //           return { ...user, followed: true };
    //         }
    //         return user;
    //       }),
    //     };
    //   case UNFOLOW:
    //     return {
    //       ...state,
    //       users: state.users.map((user) => {
    //         if (user.id === action.userId) {
    //           return { ...user, followed: false };
    //         }
    //         return user;
    //       }),
    //     };
    case FOLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
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
    case TOGGLEISFETCHINGPROGRESS: {
      return {
        ...state,
        folowindInProgress: action.isFetching
          ? [...state.folowindInProgress, action.userId]
          : state.folowindInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLOW, userId });
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

export const setIsProgress = (isFetching, userId) => ({
  type: TOGGLEISFETCHINGPROGRESS,
  isFetching,
  userId,
});

export const getUsers = (page, pagesSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));
    // console.log(currentPage);
    const data = await usersAPI.getUsers(page, pagesSize);
    // console.log(currentPage, pagesSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreactor
) => {
  dispatch(setIsProgress(true, userId));
  let response = await apiMethod(userId);
  console.log(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreactor(userId));
  }
  dispatch(setIsProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.follow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.unfollow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
  };
};

// export const follow = (userId) => {
//   return async (dispatch) => {
//     dispatch(setIsProgress(true, userId));

//     const response = await usersAPI.follow(userId);
//     if (response.data.resultCode === 0) {
//       dispatch(followSuccess(userId));
//     }
//     dispatch(setIsProgress(false, userId));
//   };
// };

// export const unfollow = (userId) => {
//   return async (dispatch) => {
//     dispatch(setIsProgress(true, userId));
//     const response = await usersAPI.unfollow(userId);
//     if (response.data.resultCode === 0) {
//       dispatch(unfollowSuccess(userId));
//     }
//     dispatch(setIsProgress(false, userId));
//   };
// };

export default UsersReducer;
