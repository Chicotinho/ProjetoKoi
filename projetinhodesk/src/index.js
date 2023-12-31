import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './ClobalStyle.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './Themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
  <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);



