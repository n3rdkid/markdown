import { useState } from "react";

const useInputState = (initalValue: any) => {
  const [value, setValue] = useState(initalValue);

  const handleChange = (value: any) => {
    setValue(value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
export default useInputState;
