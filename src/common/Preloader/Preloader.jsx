import React from "react";
import loader from "../../assets/images/loader.gif";

const Preloader = (props) => {
  return (
    <div className="">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Preloader;
