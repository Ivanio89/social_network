import React, { useState, useEffect } from "react";
import ProfileClasses from "./Profile.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  return (
    <div className="">
      {!editMode && (
        <span onDoubleClick={activateEditMode}>
          {props.status || "Not status"}
        </span>
      )}
      {editMode && (
        <div className="">
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditMode}
            type="text"
            value={status}
          />
        </div>
      )}
    </div>
  );
};

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };
//   activateEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//   };

//   deactivateEditMode = () => {
//     this.setState({
//       editMode: false,
//     });
//     this.props.updateUserStatus(this.state.status);
//   };

//   onStatusChange = (e) => {
//     this.setState({ status: e.currentTarget.value });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     // debugger;
//     if (prevProps.status !== this.props.status) {
//       this.setState({ status: this.props.status });
//     }
//     // let props = `props ${this.props}`;
//     // let state = `state ${this.state}`;
//   }

//   render() {
//     return (
//       <div className="">
//         {!this.state.editMode && (
//           <div className={ProfileClasses.content}>
//             <span onDoubleClick={this.activateEditMode}>
//               {this.props.status || "Not status"}
//             </span>
//           </div>
//         )}
//         {this.state.editMode && (
//           <div className="">
//             <input
//               onChange={this.onStatusChange}
//               autoFocus
//               onBlur={this.deactivateEditMode}
//               type="text"
//               value={this.state.status}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default ProfileStatusWithHooks;
