import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import CakeDetail from './CakeDetail';

export default {
  title: 'Pages/CakeDetail',
  component: CakeDetail,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Default = () => {
  return <CakeDetail />;
};
