import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

import GameContextProvider from './providers/globalProvider';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background: ${(props) => props.theme.main.bg};
    font-family: 'Nunito', sans-serif;
  }

  h1 {
    letter-spacing: 1px;
  }

  button {
    font-family: inherit;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
