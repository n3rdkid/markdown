import React from "react";
import useInputState from "../../hooks/useInputState.hook";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { signInStart } from "../../redux/user/user.actions";
import { IUserSignInInfo } from "../../redux/user/user.interfaces";
import { connect } from "react-redux";
const SignIn = (props: any) => {
  const [username, setUsername, resetUsername] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  const handleUsernameChange = React.useCallback((e: any) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signIn = props.signIn;
    await signIn({ username, password });
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
      <h1>Sign In</h1>
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
        label="Password"
        handleChange={handlePasswordChange}
        required
      />
      <Button label="Submit" handleClick={handleSubmit} />
      <Button label="Cancel" handleClick={handleCancel} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  signIn: ({ username, password }: IUserSignInInfo) =>
    dispatch(signInStart({ username, password })),
});

export default React.memo(connect(null, mapDispatchToProps)(SignIn));
