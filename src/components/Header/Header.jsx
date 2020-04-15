import React from "react";
import HeaderClasses from "./Header.module.css";

const header = () => {
  return (
    <header className={HeaderClasses.header}>
      <div className={HeaderClasses["header-logo"]}>
        <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="" />
      </div>
    </header>
  );
};

export default header;
