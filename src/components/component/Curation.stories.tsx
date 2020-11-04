import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Curation, CurationProps } from './Curation';

export default {
  title: 'Component/Curation',
  component: Curation,
} as Meta;

const Template: Story<CurationProps> = (args) => <Curation {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: '거리',
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: '필터 추가하기',
  selected: true,
};