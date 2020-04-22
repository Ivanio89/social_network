import React from "react";
import { reduxForm, Field, change } from "redux-form";
import { Input } from "../../common/FormsControl/FormControl";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer";
import { Redirect } from "react-router";
import StyleLogin from "./login.module.css";

const max = maxLengthCreator(20);
const min = minLengthCreator(5);

const LoginForm = (props) => {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type={"text"}
          placeholder={"Write email"}
          component={Input}
          validate={[required, min, max]}
          name={"email"}
        />
      </div>
      <div>
        <Field
          type={"password"}
          placeholder={"Write password"}
          component={Input}
          validate={[required, min, max]}
          name={"password"}
        />
      </div>
      <div>
        <p>
          <Field
            type={"checkbox"}
            component={Input}
            name={"rememberMe"}
            validate={[required, min, max]}
          />
          remember me
        </p>
      </div>
      {props.error && (
        <div className={StyleLogin["form-summary-error"]}>{props.error}</div>
      )}
      <div className="">
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
