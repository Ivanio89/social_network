import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreactor,
  updateNewMessageBodyCreator,
} from "../redux/MessageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { messagePage: state.messagePage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreactor());
    },
  };
};

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ContainerDialogs;
