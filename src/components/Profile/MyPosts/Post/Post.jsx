import React from "react";
import PostClasses from "./Post.module.css";

const Post = (props) => {
  // console.log(props);
  return (
    <div className={PostClasses["post-item"]}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.wattpad.com%2Fcover%2F60282934-256-k714286.jpg&f=1&nofb=1"
        alt="avatar"
      />
      <div className={PostClasses["post-item"]}>
        <p>{props.message}</p>
        <span className="">like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
