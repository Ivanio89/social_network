import React from "react";
import ClassMessage from "./MessagesItem.module.css";

const MessageItem = (props) => {
  return (
    <div className={ClassMessage.messages}>
      <div className={ClassMessage.message}>{props.message}</div>
    </div>
  );
};

export default MessageItem;
