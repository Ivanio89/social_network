import React from "react";
import ClassDialog from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/Ivan/${props.id}`;
  return (
    <div className={ClassDialog.users}>
      <NavLink to={path} activeClassName={ClassDialog.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
