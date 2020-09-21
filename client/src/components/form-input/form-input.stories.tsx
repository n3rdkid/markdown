import React from "react";
import FormInput, { IFormInput } from "./form-input.component";
import { Meta, Story } from "@storybook/react/types-6-0";
export default {
  title: "Form/Element/FormInput",
  component: FormInput,
  argTypes: {
    handleChange: { action: "Changed" },
  },
} as Meta;

const FormInputTemplate: Story<IFormInput> = (args) => (
  <FormInput {...args}></FormInput>
);
export const TextInput = FormInputTemplate.bind({});
TextInput.args = {
  label: "Text",
  type: "text",
};

export const PasswordInput = FormInputTemplate.bind({});
PasswordInput.args = {
  label: "Password",
  type: "password",
};

export const EmailInput = FormInputTemplate.bind({});
EmailInput.args = {
  label: "Email",
  type: "email",
};
