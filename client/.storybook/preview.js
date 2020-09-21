
import { addDecorator } from '@storybook/react';
import React from "react"
import { withConsole } from '@storybook/addon-console';
import { MemoryRouter } from "react-router-dom"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((storyFn, context) => <MemoryRouter>{withConsole()(storyFn)(context)}</MemoryRouter>);