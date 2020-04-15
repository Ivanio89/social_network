const add_post = "ADD_POST";
const new_post = "UPDATE-NEW-POST";
const SETUSERPROFILE = "set_user_profile";

let initilState = {
  postsDate: [
    { id: 1, message: "hi how are you?", licksCount: 12 },
    { id: 2, message: "It s my first post", licksCount: 5 },
  ],
  newPostText: "",
  profile: null,
};

const ProfileReducer = (state = initilState, action) => {
  switch (action.type) {
    case add_post:
      let newPost = {
        id: 5,
        message: state.newPostText,
        licksCount: 999,
      };
      return {
        ...state,
        newPostText: "",
        postsDate: [...state.postsDate, newPost],
      };
    case new_post:
      return { ...state, newPostText: action.newText };
    case SETUSERPROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: add_post });
export const updatePostActionCreator = (text) => ({
  type: new_post,
  newText: text,
});
export const setUserProfileActionCreator = (profile) => ({
  type: SETUSERPROFILE,
  profile,
});

export default ProfileReducer;
