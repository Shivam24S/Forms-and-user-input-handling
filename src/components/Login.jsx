import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(e) => {
              handleInputValues("email", e.target.value);
            }}
            onBlur={() => handleBlur("email")}
          />
          <div className="control-error">
            {emailInvalid && <p>please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(e) => {
              handleInputValues("password", e.target.value);
            }}
          />
        </div>
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
