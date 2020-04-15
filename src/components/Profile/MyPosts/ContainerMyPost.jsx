import React from "react";
import {
  updatePostActionCreator,
  addPostActionCreator,
} from "../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      // let action = updatePostActionCreator(text);
      dispatch(updatePostActionCreator(text));
      // console.log(action);
    },
  };
};

let ContainerMyPost = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ContainerMyPost;
