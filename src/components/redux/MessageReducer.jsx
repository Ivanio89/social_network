const updateNewMessgeBody = "NEW_MESSAGE";
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
  newMessageBody: "",
  SideBarPage: [],
};

const MessageReducer = (state = initilState, action) => {
  switch (action.type) {
    case send_message:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesUsers: [...state.messagesUsers, { id: 3, message: body }],
      };
    case updateNewMessgeBody:
      return { ...state, newMessageBody: action.body };
    default:
      return state;
  }
};

export const sendMessageCreactor = () => ({ type: send_message });
export const updateNewMessageBodyCreator = (body) => ({
  type: updateNewMessgeBody,
  body: body,
});

export default MessageReducer;
