import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Header from "./header.component";

export default {
  title: "Element/Header",
  component: Header,
} as Meta;

const HeaderTemplate: Story<any> = (args) => <Header {...args}></Header>;

export const DefaultHeader = HeaderTemplate.bind({});
DefaultHeader.args = {
  currentUser: null,
};
export const SignedInHeader = HeaderTemplate.bind({});
SignedInHeader.args = {
  currentUser: { id: "1azy" },
};
