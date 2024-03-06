import { useRef, useState } from "react";

export default function LoginRef() {
  const [emailValidation, setEmailValidation] = useState(false);

  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = email.current.value;

    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);

    // if i want to reset email and password i can use this method but its not preferred because dom related issue might be although it works

    // email.current.value = ""; //although its works but not preferred

    // now validation on submission

    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailValidation(true);
      return;
    }
    console.log("sending http request");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailValidation && <p>please provide correct email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
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
