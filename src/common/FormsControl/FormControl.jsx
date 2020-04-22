import React from "react";
import StyleForm from "./FormControl.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const errorsForm = meta.touched && meta.error;
  return (
    <div className={!errorsForm ? StyleForm["form-control"] : StyleForm.error}>
      {props.children}
      <div className="">{errorsForm && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
