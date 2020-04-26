import React from "react";
import StyleForm from "./FormControl.module.css";
import { Field } from "redux-form";

const FormControl = ({
  input,
  meta: { touched, error },
  child,
  children,
  ...props
}) => {
  const errorsForm = touched && error;
  return (
    <div className={!errorsForm ? StyleForm["form-control"] : StyleForm.error}>
      {children}
      <div className="">{errorsForm && <span>{error}</span>}</div>
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

export const creactField = (
  placeholder,
  name,
  validators,
  component,
  type,
  props = {}
) => {
  return (
    <Field
      type={type.type}
      placeholder={placeholder}
      component={component}
      validate={validators}
      name={name}
      {...props}
    />
  );
};
