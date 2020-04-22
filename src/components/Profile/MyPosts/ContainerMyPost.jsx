import React from "react";
import { addPostActionCreator } from "../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendaddPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

let ContainerMyPost = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ContainerMyPost;
