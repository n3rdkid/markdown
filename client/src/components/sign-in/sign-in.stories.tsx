import React from "react";
import { IButton } from "../button/button.component";
import { DefaultButton } from "../button/button.stories";
import { IFormInput } from "../form-input/form-input.component";
import { EmailInput, PasswordInput } from "../form-input/form-input.stories";

export default {
  title: "Component/SignUp",
};

export const SignUp = () => (
  <>
    <EmailInput {...(EmailInput.args as IFormInput)} />
    <PasswordInput {...(PasswordInput.args as IFormInput)} />
    <DefaultButton {...(DefaultButton.args as IButton)} />
  </>
);
