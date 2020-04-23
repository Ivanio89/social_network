import React from "react";
import Post from "./Post/Post";
import ClassPost from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControl/FormControl";

const maxLength30 = maxLengthCreator(30);
const minLength5 = minLengthCreator(5);

const MyPosts = React.memo((props) => {
  console.log(props);
  console.log("render");

  const postsUser = props.profilePage.postsDate.map((post) => (
    <Post key={post.id} message={post.message} like={post.licksCount} />
  ));

  const onAddPost = (myPost) => {
    props.sendaddPost(myPost.newPostText);
    console.log(myPost.newPostText);
  };

  return (
    <div className={ClassPost["wrapp-posts"]}>
      <div className={ClassPost["wrapp-post__items"]}></div>
      <div className={ClassPost["wrapp-post__items"]}>
        <MyPostFormRedux onSubmit={onAddPost} />
        <div className={ClassPost["wrapp-post__item"]}>{postsUser}</div>
      </div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={ClassPost["wrapp-post__write"]}>
        <div className={ClassPost["post-write"]}>
          <Field
            validate={[required, maxLength30, minLength5]}
            component={Textarea}
            placeholder="write to post"
            name="newPostText"
          />
        </div>
        <button className={ClassPost["add-post__btn"]}>Add post</button>
      </div>
    </form>
  );
};

const MyPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
