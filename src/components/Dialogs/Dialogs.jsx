import React from "react";
import ClassDialog from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessagesItem/MessageItem";

const Dialogs = (props) => {
  let state = props;
  // console.log(state.messagePage.messagesUsers);

  const usersDialogs = state.messagePage.users.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));

  const messages = state.messagePage.messagesUsers.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  const newMessageBody = state.messagePage.newMessageBody;

  const addmessage = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={ClassDialog["wrapp-messag__page"]}>
      <div className={ClassDialog["wrapp-messages__items"]}>
        <div className={ClassDialog["wrapp-user__item"]}>{usersDialogs}</div>
        <div className={ClassDialog["wrapp-message__item"]}>{messages}</div>
      </div>
      <div className={ClassDialog["block-item__write"]}>
        <div className={ClassDialog["block-item__text"]}>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="write here text"
          />
        </div>
        <br />
        <div className={ClassDialog["wrapp-message__btn"]}>
          <button onClick={addmessage}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
