import { useState } from "react";
import InputComponent from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  // validating using onblur

  const [didBlur, setDidBlur] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSUbmit=>", enteredValues);
  };

  const handleInputValues = (identifier, newValues) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: newValues,
    }));

    // resetting form values fro state
    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });
  };

  // validating input values

  const emailInvalid = didBlur.email && !enteredValues.email.includes("@");
  // const passwordInvalid =
  //   didBlur.password && enteredValues.password.trim().length < 6;

  // out sourcing validation logic and re using code from utils

  // email validation not working
  // const emailInvalid =
  //   didBlur.email &&
  //   !isEmail(enteredValues.email) &&
  //   !isNotEmpty(enteredValues.email);

  const passwordInvalid =
    didBlur.password && !hasMinLength(enteredValues.password, 6);

  // validating using blur method

  const handleBlur = (identifier) => {
    setDidBlur((prevBlur) => ({
      ...prevBlur,
      [identifier]: true,
    }));
  };

  console.log("checking=>", enteredValues);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <InputComponent
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredValues.email}
          onChange={(e) => {
            handleInputValues("email", e.target.value);
          }}
          onBlur={() => handleBlur("email")}
          error={emailInvalid && "please enter valid email Address"}
        />

        <InputComponent
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValues.password}
          onChange={(e) => {
            handleInputValues("password", e.target.value);
          }}
          onBlur={() => handleBlur("password")}
          error={passwordInvalid && "please enter valid password"}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
