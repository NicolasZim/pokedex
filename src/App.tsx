import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks/index';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <GlobalStyle />
        <Routes />
      </AppProvider>
    </Router>
  );
};

export default App;
