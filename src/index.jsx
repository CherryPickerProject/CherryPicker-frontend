import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';
import Bookmarks from './pages/Bookmarks';
import Details from './pages/Details';

/* eslint-disable */
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/about' component={About} />
      <Route exact path='/bookmarks' component={Bookmarks} />
      <Route exact path='/detail' component={Details} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
