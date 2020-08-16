import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import BookmarksPage from './pages/BookmarksPage/BookmarksPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Error404 from './pages/ErrorPage/Error404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/bookmarks" component={BookmarksPage} />
      <Route exact path="/detail" component={DetailsPage} />
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
