const send_message = "SEND_MESSAGE";

let initilState = {
  users: [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Masha" },
  ],
  messagesUsers: [
    { id: 1, message: "HI" },
    { id: 2, message: "how are you?" },
  ],
  // SideBarPage: [],
};

const MessageReducer = (state = initilState, action) => {
  switch (action.type) {
    case send_message:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesUsers: [...state.messagesUsers, { id: 3, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreactor = (newMessageBody) => ({
  type: send_message,
  newMessageBody,
});

export default MessageReducer;
