import ProfileReducer from "./ProfileReducer";
import MessageReducer from "./MessageReducer";
import SideBarReducer from "./SideBarReducer";

let store = {
  _state: {
    profilePage: {
      postsDate: [
        { id: 1, message: "hi how are you?", licksCount: 12 },
        { id: 2, message: "It s my first post", licksCount: 5 },
      ],
      newPostText: "",
    },
    messagePage: {
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
    },
  },
  _rerenderEntireTree() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.messagePage = MessageReducer(this._state.messagePage, action);
    this._state.profilePage = SideBarReducer(this._state.profilePage, action);
    this._rerenderEntireTree(this._state);
  },
};

window.store = store;
export default store;
