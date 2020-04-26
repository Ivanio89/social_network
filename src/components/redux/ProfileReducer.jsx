import { usersAPI, getProfileAPI } from "../../api/api";

const add_post = "ADD_POST";
const SETUSERPROFILE = "set_user_profile";
const SETUSERSTATUS = "set_user_status";
const DELETEPOST = "delete_post";

let initilState = {
  postsDate: [
    { id: 1, message: "hi how are you?", licksCount: 12 },
    { id: 2, message: "It s my first post", licksCount: 5 },
  ],
  profile: null,
  status: "",
};

const ProfileReducer = (state = initilState, action) => {
  // console.log(action);
  switch (action.type) {
    case add_post:
      let newPost = {
        id: 5,
        message: action.newPostText,
        licksCount: 999,
      };
      return {
        ...state,
        postsDate: [...state.postsDate, newPost],
      };
    case SETUSERPROFILE:
      return { ...state, profile: action.profile };
    case SETUSERSTATUS:
      return { ...state, status: action.status };
    // case DELETEPOST:
    //   return {
    //     ...state,
    //     posts: state.postsDate.filter((post) => {
    //       post.id !== action.postId; //отфильтровка постов которые не равны action.postId
    //     }),
    //   };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: add_post,
  newPostText,
});
export const setUserProfileActionCreator = (profile) => ({
  type: SETUSERPROFILE,
  profile,
});

export const setUserStatusActionCreator = (status) => ({
  type: SETUSERSTATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETEPOST,
  postId,
});

export const updateUserStatusActionCreator = (text) => ({
  type: SETUSERSTATUS,
  newText: text,
});

export const getUserProfile = (userId) => async (dispatch) => {
  console.log(userId);
  const response = await usersAPI.getUserProfile(userId);
  dispatch(setUserProfileActionCreator(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  // console.log(userId);
  const response = await getProfileAPI.getUserStatus(userId);
  dispatch(setUserStatusActionCreator(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  const response = await getProfileAPI.updateUserStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatusActionCreator(status));
  }
};

export default ProfileReducer;
