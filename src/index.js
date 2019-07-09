import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const pickTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: {
      main: '#ff751a',
      contrastText: '#ffffff'
    },
    primary: {
      main: '#3333ff'
    }
  }
});

render(
  <MuiThemeProvider theme={pickTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
