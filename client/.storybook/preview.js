
import { addDecorator } from '@storybook/react';
import React from "react"
import { withConsole } from '@storybook/addon-console';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((storyFn, context) => <MemoryRouter><Provider store={store}>{withConsole()(storyFn)(context)}</Provider></MemoryRouter>);