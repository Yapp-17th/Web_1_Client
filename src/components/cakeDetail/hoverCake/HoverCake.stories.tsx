import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import HoverCake, { HoverCakeProps } from './HoverCake';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';

export default {
  title: 'CakeDetail/HoverCake',
  component: HoverCake,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<HoverCakeProps> = (args) => <HoverCake {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '체리 메이 블라썸 케이크',
  address: '서울 마포구 매봉산로 75',
};
