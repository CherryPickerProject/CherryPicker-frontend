import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import AboutPage from './pages/AboutPage/AboutPage';
import BookmarksPage from './pages/BookmarksPage/BookmarksPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/bookmarks" component={BookmarksPage} />
      <Route exact path="/detail" component={DetailsPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
