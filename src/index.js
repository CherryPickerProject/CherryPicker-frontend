import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import About from './pages/About';
import Bookmark from './pages/Bookmark';
import Details from './pages/Details';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bookmark" component={Bookmark} />
      <Route exact path="/detail" component={Details} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

