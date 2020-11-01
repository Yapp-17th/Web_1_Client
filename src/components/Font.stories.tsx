import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import styled from 'styled-components';

export default {
  title: 'Font',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Text1 = styled.span`
  ${(props) => props.theme.font.n36m}
`;
const Text2 = styled.span`
  ${(props) => props.theme.font.n26b}
`;
const Text3 = styled.span`
  ${(props) => props.theme.font.n20m}
`;
const Text4 = styled.span`
  ${(props) => props.theme.font.n18b}
`;
const Text5 = styled.span`
  ${(props) => props.theme.font.n16m}
`;
const Text6 = styled.span`
  ${(props) => props.theme.font.n16r}
`;
const Text7 = styled.span`
  ${(props) => props.theme.font.n14m}
`;
const Text8 = styled.span`
  ${(props) => props.theme.font.n14r}
`;

export function General() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text1>파스텔로 마음을 전해요</Text1>
      <Text2>파스텔로 마음을 전해요</Text2>
      <Text3>파스텔로 마음을 전해요</Text3>
      <Text4>파스텔로 마음을 전해요</Text4>
      <Text5>파스텔로 마음을 전해요</Text5>
      <Text6>파스텔로 마음을 전해요</Text6>
      <Text7>파스텔로 마음을 전해요</Text7>
      <Text8>파스텔로 마음을 전해요</Text8>
    </div>
  );
}
