import React from "react";
import Post from "./Post/Post";
import ClassPost from "./MyPosts.module.css";

const MyPosts = (props) => {
  // console.log(props.profilePage.postsDate);
  const postsUser = props.profilePage.postsDate.map((post) => (
    <Post key={post.id} message={post.message} like={post.licksCount} />
  ));

  let getNewPost = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = getNewPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={ClassPost["wrapp-posts"]}>
      <div className={ClassPost["wrapp-post__items"]}>
        <div className={ClassPost["wrapp-post__write"]}>
          <div className={ClassPost["post-write"]}>
            <textarea
              onChange={onPostChange}
              ref={getNewPost}
              cols="30"
              rows="10"
              value={props.newPostText}
              placeholder="write to post"
            />
          </div>
          <button onClick={onAddPost} className={ClassPost["add-post__btn"]}>
            Add post
          </button>
        </div>
      </div>
      <div className={ClassPost["wrapp-post__items"]}>
        <div className={ClassPost["wrapp-post__item"]}>{postsUser}</div>
      </div>
    </div>
  );
};

export default MyPosts;
