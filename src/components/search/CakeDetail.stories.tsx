import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import CakeDetail, { CakeDetailProps } from './CakeDetail';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';

export default {
  title: 'Search/CakeDetail',
  component: CakeDetail,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<CakeDetailProps> = (args) => <CakeDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  cakeName: '체리 메이 블라썸 케이크',
  storeName: '카페원모어',
};
