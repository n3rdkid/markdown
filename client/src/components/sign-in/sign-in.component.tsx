import React from "react";
import useInputState from "../../hooks/useInputState.hook";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
const SignIn = () => {
  const [username, setUsername, resetUsername] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  const handleUsernameChange = React.useCallback((e: any) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(username, password);
    },
    []
  );
  console.log("Re-rendering Sign IN");
  return (
    <div>
      <FormInput
        type="text"
        value={username}
        label="Username"
        handleChange={handleUsernameChange}
        required
      />
      <FormInput
        value={password}
        type="password"
        label="password"
        handleChange={handlePasswordChange}
        required
      />
      <Button label="Submit" handleClick={handleSubmit} />
    </div>
  );
};

export default React.memo(SignIn);
