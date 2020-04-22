import React from "react";
import ClassDialog from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessagesItem/MessageItem";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControl/FormControl";
import {
  required,
  minLengthCreator,
  maxLengthCreator,
} from "../utils/validators/validators";

const Dialogs = (props) => {
  let state = props;
  console.log(props);

  const usersDialogs = state.messagePage.users.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));

  const messages = state.messagePage.messagesUsers.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  // const newMessageBody = state.messagePage.newMessageBody;

  const addNewMessage = (message) => {
    props.sendMessage(message.newMessagBody);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={ClassDialog["wrapp-messag__page"]}>
      <div className={ClassDialog["wrapp-messages__items"]}>
        <div className={ClassDialog["wrapp-user__item"]}>{usersDialogs}</div>
        <div className={ClassDialog["wrapp-message__item"]}>{messages}</div>
      </div>
      <AddMessagesFormRedux onSubmit={addNewMessage} />
      <div className={ClassDialog["block-item__write"]}></div>
    </div>
  );
};

const min = minLengthCreator(5);
const max = maxLengthCreator(30);

const addMessageForm = (props) => {
  // console.log(props);

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={ClassDialog["block-item__text"]}>
        <Field
          component={Textarea}
          name="newMessagBody"
          placeholder="write here text"
          validate={[required, max, min]}
        />
      </div>
      <br />
      <div className={ClassDialog["wrapp-message__btn"]}>
        <button>add message</button>
      </div>
    </form>
  );
};

const AddMessagesFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  addMessageForm
);

export default Dialogs;
