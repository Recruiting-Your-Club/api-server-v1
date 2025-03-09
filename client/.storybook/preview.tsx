import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Global, ThemeProvider, css } from '@emotion/react';
import theme from '../src/styles/theme';
import global from '../src/styles/global';

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Global styles={global} />
            <Story />
        </ThemeProvider>
    ),
];
