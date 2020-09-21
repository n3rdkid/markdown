import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { IButton } from "./button.component";
export default {
  title: "Form/Element/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "clicked" },
  },
} as Meta;

const ButtonTemplate: Story<IButton> = (args) => <Button {...args}></Button>;

export const DefaultButton = ButtonTemplate.bind({});
DefaultButton.args = {
  label: "Submit",
};
export const PrimaryButton = ButtonTemplate.bind({});
PrimaryButton.args = {
  label: "Submit",
};
