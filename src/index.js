import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const pickTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FF5733'
    }
  }
});

render(
  <MuiThemeProvider theme={pickTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
