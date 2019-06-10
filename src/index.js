import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const pickTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ff751a'
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
