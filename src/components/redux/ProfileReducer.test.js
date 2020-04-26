import ProfileReducer, {
  addPostActionCreator,
  deletePost,
} from "./ProfileReducer";
import React from "react";
import MainApp from "../../App";
import ReactDOM from "react-dom";

let state = {
  postsDate: [
    { id: 1, message: "hi how are you?", licksCount: 12 },
    { id: 2, message: "It s my first post", licksCount: 5 },
    { id: 3, message: "It s my first post", licksCount: 5 },
    { id: 4, message: "It s my first post", licksCount: 5 },
    // { id: 5, message: "It s my first post", licksCount: 5 },
    // { id: 6, message: "It s my first post", licksCount: 5 },
  ],
};

// it("message of new post should be correct", () => {
//   //1.test data
//   let action = addPostActionCreator("img");

//   //2.action
//   let newState = ProfileReducer(state, action);
//   //3.expectation
//   expect(newState.postsDate.length).toBe(5);
//   expect(newState.postsDate[4].message).toBe("img");
// });

// it("length of lenght of meesage shold be decrement", () => {
//   //1.test data
//   let action = deletePost(1);

//   //2.action
//   let newState = ProfileReducer(state, action);
//   //3.expectation
//   expect(newState.postsDate.length).toBe(4);
// });

// it(`after deleting length shouldn't be decrement if id is correct`, () => {
//   //1.test data
//   let action = deletePost(1000);

//   //2.action
//   let newState = ProfileReducer(state, action);
//   //3.expectation
//   expect(newState.postsDate.length).toBe(4);
// });

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
