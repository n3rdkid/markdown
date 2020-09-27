import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Editor from "./editor.component";
export default {
  title: "Component/Editor",
  component: Editor,
} as Meta;

const EditorTemplate: Story<{}> = (args) => <Editor {...args}></Editor>;

export const DefaultEditor = EditorTemplate.bind({});
DefaultEditor.args = {
};
