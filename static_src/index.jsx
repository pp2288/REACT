import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Layout from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <Layout />
   </MuiThemeProvider>,
=======
import Router from './components/Router'
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <BrowserRouter>
       <MuiThemeProvider>
           <Router />
       </MuiThemeProvider>
   </BrowserRouter>,
>>>>>>> master
   document.getElementById('root'),
);