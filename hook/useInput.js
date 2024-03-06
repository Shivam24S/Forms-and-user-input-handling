import { useState } from "react";

export function useInput({ defaultValue, validationFn }) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didBlur, setDidBlur] = useState(false);

  const handleInputValues = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleBlur = () => {
    setDidBlur(true);
  };

  const valueIsValid = validationFn(enteredValue);

  return {
    value: enteredValue,
    handleBlur,
    handleInputValues,
    hasError: didBlur && !valueIsValid,
  };
}
