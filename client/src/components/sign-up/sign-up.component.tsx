import React from "react";
import useInputState from "../../hooks/useInputState.hook";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
const SignUp = () => {
  const [username, setUsername, resetUsername] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  const handleUsernameChange = React.useCallback((e: any) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetPassword();

    resetUsername();
  };
  const handleCancel = (e: any) => {
    e.preventDefault();
    resetPassword();
    resetUsername();
  };
  return (
    <div>
         <h1>Sign Up</h1>
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
      <Button label="Cancel" handleClick={handleCancel} />
    </div>
  );
};

export default React.memo(SignUp);
