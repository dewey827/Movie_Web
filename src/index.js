import React from 'react';
import ReactDOM from 'react-dom/client';

//style - 테마제공자
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme';

//라우터
import Router from './Router';

//리액트 18부터~
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>


);


