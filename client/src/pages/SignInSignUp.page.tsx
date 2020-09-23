import React from "react";
import SignIn from "../components/sign-in/sign-in.component";
import SignUp from "../components/sign-up/sign-up.component";
const SignInSignUp = () => {
  return (
    <div style={{ display: "flex",justifyContent:"space-around" }}>
      <div>
        <SignIn />
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignInSignUp;
