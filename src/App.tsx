import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'style/globalStyles';
import theme from 'style/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'components/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
