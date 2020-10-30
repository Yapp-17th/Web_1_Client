import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@style/theme';
import GlobalStyles from '@style/globalStyles';
import styled from 'styled-components';

const Text = styled.span`
  color: ${(props) => props.theme.colors.text};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Text>파스텔로 마음을 전해요</Text>
    </ThemeProvider>
  );
}

export default App;
