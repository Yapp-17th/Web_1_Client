import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import SearchPage, { SearchProps } from './SearchPage';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';

export default {
  title: 'Pages/SearchPage',
  component: SearchPage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<SearchProps> = (args) => <SearchPage {...args} />;

export const Default = Template.bind({});
Default.args = {
    cakeCount: 306,
};
